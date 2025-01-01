import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith("/dashboard")){
        // console.log("visiting admin page")
        const sessionId = req.cookies.get('session_id')?.value;

        if (!sessionId) {

            return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if session_id is missing
        }
        
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
};
