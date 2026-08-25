# Sardauna Tech Lab Ltd - Corporate Platform & CMS

Official production codebase for **Sardauna Tech Lab Ltd** (`sardaunatechlabs.com.ng`).

---

## 1. System Architecture

```text
                                 PUBLIC USERS / CLIENTS
                                            │
                                            ▼
                           NEXT.JS 15 FRONTEND (TypeScript)
                                 sardaunatechlabs.com.ng
                                            │
                     ┌──────────────────────┴──────────────────────┐
                     ▼                                             ▼
          PUBLIC CORPORATE PLATFORM                         CUSTOM INTERNAL CMS
     - Interactive Hero with Canvas                   - Protected RBAC Auth
     - 8 Core Services (/services/[slug])             - Real-time Enquiry Pipeline
     - Proprietary Products (/solutions/[slug])       - Content & Case Studies CMS
     - Selected Work & Case Studies (/work/[slug])    - Insights & Article Publishing
     - 9 Industry Specializations (/industries)       - Careers & Application Portal
     - Enterprise Contact Flow (/contact)             - Site Settings & SEO Manager
                     │                                             │
                     └──────────────────────┬──────────────────────┘
                                            │ REST API (/api/v1)
                                            ▼
                           LARAVEL 11 BACKEND API (PHP 8.3)
                               api.sardaunatechlabs.com.ng
                                            │
                     ┌──────────────────────┼──────────────────────┐
                     ▼                      ▼                      ▼
                 MySQL DB             LOCAL / S3 MEDIA        DIRECTADMIN
              (Full Migrations)          STORAGE                 SMTP
```

---

## 2. Technology Stack

- **Frontend**: Next.js 15+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Laravel 11, PHP 8.3+, REST APIs (`/api/v1/`).
- **Database**: MySQL (Optimized schema, indexed foreign keys, transactional integrity).
- **Authentication**: Laravel Sanctum tokens and secure session management.
- **Hosting Target**: Premium 8GB DirectAdmin Shared / Cloud Web Hosting.
- **Dual Deployment**:
  - **Mode A (Node.js runtime supported)**: Next.js production SSR/ISR runtime.
  - **Mode B (Standard DirectAdmin Web Hosting)**: Static-first pre-rendered export with dynamic REST API hydration.

---

## 3. Directory Structure

```text
sardauna-tech-lab/
├── frontend/                     # Next.js 15 Application
│   ├── src/
│   │   ├── app/                  # App Router Pages & Layouts
│   │   │   ├── company/          # /company (About & Leadership)
│   │   │   ├── services/         # /services & /services/[slug] (8 Services)
│   │   │   ├── solutions/        # /solutions & /solutions/[slug] (EventPass & TraderERP)
│   │   │   ├── work/             # /work & /work/[slug] (Case Studies)
│   │   │   ├── industries/       # /industries (9 Industry Hubs)
│   │   │   ├── insights/         # /insights & /insights/[slug] (Technical Articles)
│   │   │   ├── careers/          # /careers & /careers/[slug] (Job Openings & Application Form)
│   │   │   ├── contact/          # /contact (Multi-Category Enquiry Form)
│   │   │   ├── privacy/          # /privacy (Legal Policy)
│   │   │   ├── terms/            # /terms (Terms of Service)
│   │   │   └── admin/            # /admin & /admin/login (Custom CMS Portal)
│   │   ├── components/
│   │   │   ├── ui/               # Button, Container, Section, Card, Badge, TechnologyCanvas
│   │   │   ├── layout/           # Navbar, MobileMenu, Footer
│   │   │   └── sections/         # Hero, Intro, Services, Products, Work, Process, TechStack, etc.
│   │   ├── lib/                  # Verified Domain Data, API Client
│   │   └── types/                # Strict TypeScript Domain Interfaces
│   └── package.json
│
├── backend/                      # Laravel 11 REST API
│   ├── app/
│   │   ├── Http/Controllers/Api/V1/  # Public & Admin API Controllers
│   │   └── Models/               # Eloquent Models (Service, Product, Project, Enquiry, etc.)
│   ├── database/
│   │   ├── migrations/           # Complete Relational Schema Migrations
│   │   └── seeders/              # DatabaseSeeder with Verified Authentic STL Content
│   ├── routes/
│   │   └── api.php               # Versioned RESTful Endpoints (/api/v1/)
│   └── .env.example
│
├── DEPLOYMENT.md                 # DirectAdmin 8GB Step-by-Step Production Guide
└── README.md
```

---

## 4. Local Development Setup

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:3000`.

### Backend Setup

```bash
cd backend
cp .env.example .env
# Configure your DB_DATABASE, DB_USERNAME, DB_PASSWORD in .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

The API will run at `http://localhost:8000/api/v1/`.

---

## 5. Production Build Verification

To compile the optimized production frontend build:

```bash
cd frontend
node node_modules/next/dist/bin/next build
```

All 35 routes compile into optimized, accessible, static-first production artifacts.

---

## 6. Corporate Identity & Disclosures

- **Registered Name**: Sardauna Tech Lab Ltd
- **Corporate Affairs Commission (RC)**: `9161899`
- **Head Office**: Dutse, Jigawa State, Nigeria
- **Corporate Website**: `https://sardaunatechlabs.com.ng`
- **Official Email**: `contact@sardaunatechlabs.com.ng`
- **Official Phones**: `+234 701 967 2820` / `+234 906 027 6333`
- **Executive Leadership**:
  - Muhammad Auwal Abubakar (Founder & Chief Executive Officer)
  - Maryam Abubakar (Co-Founder)
