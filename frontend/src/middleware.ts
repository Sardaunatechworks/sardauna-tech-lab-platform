import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const token = request.cookies.get('stl_admin_token')?.value;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login';

    if (!token && !isLoginPage) {
      // Unauthenticated visitor trying to access protected admin area
      const loginUrl = new URL('/admin/login', request.url);
      if (pathname !== '/admin') {
        loginUrl.searchParams.set('redirect', pathname + search);
      }
      const response = NextResponse.redirect(loginUrl);
      // Clean up potentially stale cookie
      response.cookies.delete('stl_admin_token');
      return response;
    }

    if (token && isLoginPage) {
      // Already authenticated user visiting login page -> redirect directly to dashboard
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Security Headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all admin routes and general pages, but skip static assets and Next internals
     */
    '/admin/:path*',
  ],
};
