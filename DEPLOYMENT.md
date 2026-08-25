# DirectAdmin Production Deployment Guide

## Sardauna Tech Lab Ltd (`sardaunatechlabs.com.ng`)

This guide details the step-by-step procedure to deploy the Sardauna Tech Lab platform to a **Premium 8GB DirectAdmin Web Hosting** environment.

---

## 1. Hosting Directory Architecture

DirectAdmin shared hosting isolates application files above the webroot:

```text
/home/sardaunatech/
│
├── domains/
│   ├── sardaunatechlabs.com.ng/
│   │   └── public_html/              <-- Next.js pre-rendered HTML/JS bundle (or Node.js Proxy)
│   │
│   └── api.sardaunatechlabs.com.ng/
│       └── public_html/              <-- Symlinked to /home/sardaunatech/laravel-api/public
│
└── laravel-api/                      <-- Laravel Application Files (Securely Outside Webroot)
    ├── app/
    ├── bootstrap/
    ├── config/
    ├── database/
    ├── routes/
    ├── storage/
    ├── .env                          <-- Secure Environment File (Never Exposed)
    └── vendor/
```

---

## 2. Step 1: Database Setup in DirectAdmin

1. Log into your **DirectAdmin Control Panel** (`https://sardaunatechlabs.com.ng:2222`).
2. Navigate to **MySQL Management** &rarr; **Create New Database**.
3. Create database: `sardauna_db`.
4. Create database user: `sardauna_user` with a strong generated password.
5. Grant all privileges to the user on `sardauna_db`.

---

## 3. Step 2: Laravel API Deployment (`api.sardaunatechlabs.com.ng`)

1. Upload the `backend/` folder contents to `/home/sardaunatech/laravel-api/`.
2. In `/home/sardaunatech/laravel-api/`, create `.env`:
   ```env
   APP_NAME="Sardauna Tech Lab API"
   APP_ENV=production
   APP_DEBUG=false
   APP_KEY=base64:...
   APP_URL=https://api.sardaunatechlabs.com.ng

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=sardauna_db
   DB_USERNAME=sardauna_user
   DB_PASSWORD=YOUR_STRONG_PASSWORD

   MAIL_MAILER=smtp
   MAIL_HOST=mail.sardaunatechlabs.com.ng
   MAIL_PORT=465
   MAIL_USERNAME=contact@sardaunatechlabs.com.ng
   MAIL_PASSWORD=YOUR_EMAIL_PASSWORD
   MAIL_ENCRYPTION=ssl
   MAIL_FROM_ADDRESS="contact@sardaunatechlabs.com.ng"
   MAIL_FROM_NAME="Sardauna Tech Lab Ltd"

   CORS_ALLOWED_ORIGINS="https://sardaunatechlabs.com.ng,https://www.sardaunatechlabs.com.ng"
   ```
3. Set proper write permissions for storage:
   ```bash
   chmod -R 775 storage bootstrap/cache
   ```
4. Run migrations and seeders:
   ```bash
   php artisan migrate --force --seed
   php artisan storage:link
   php artisan config:cache
   php artisan route:cache
   ```
5. In DirectAdmin **Subdomains**, create `api.sardaunatechlabs.com.ng`. Replace its `public_html` with a symlink to `/home/sardaunatech/laravel-api/public`.

---

## 4. Step 3: Frontend Deployment (`sardaunatechlabs.com.ng`)

### Option A: Static-First Export (Direct HTML / Nginx / Apache)

1. On your build machine, export the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Upload the exported static assets (`.next/standalone` or `out/`) to `/home/sardaunatech/domains/sardaunatechlabs.com.ng/public_html/`.
3. Add `.htaccess` inside `public_html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

     # Handle client-side routing
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule ^ index.html [L]
   </IfModule>
   ```

### Option B: DirectAdmin Node.js Application (If CloudLinux / cPanel Node.js Selector is enabled)

1. In DirectAdmin, open **Node.js Selector** &rarr; **Create Application**.
2. Select Node.js version `20.x` or `22.x`.
3. Application Root: `/home/sardaunatech/domains/sardaunatechlabs.com.ng/frontend`.
4. Application Startup File: `server.js` or `npm start`.
5. Click **Run NPM Install** &rarr; **Restart Application**.

---

## 5. Step 4: SSL Certificate Setup

1. In DirectAdmin, navigate to **SSL Certificates**.
2. Select **Free & automatic certificate from Let's Encrypt**.
3. Check:
   - `sardaunatechlabs.com.ng`
   - `www.sardaunatechlabs.com.ng`
   - `api.sardaunatechlabs.com.ng`
4. Click **Save** & **Enforce SSL (HTTPS) Redirect**.

---

## 6. Verification Checklist

- [x] HTTPS redirect enforces encrypted transport.
- [x] All 8 service pages load with authentic company deliverables.
- [x] EventPass and TraderERP solution pages load.
- [x] Contact form submits to `/api/v1/enquiries` and logs reference number.
- [x] Admin login at `/admin/login` functions properly.
- [x] Zero placeholder copy or fake marketing statistics.
