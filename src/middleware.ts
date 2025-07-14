import { NextResponse, NextRequest } from 'next/server'
import {jwtVerify} from 'jose';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    
    if(!token){
        return NextResponse.redirect(new URL('/denied', req.url));
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token as string, secret);

    //console.log(req.nextUrl.pathname);
    const path = req.nextUrl.pathname;

    if(payload.role === 'customer' && !path.startsWith('/customer')){
        return NextResponse.redirect(new URL('/denied', req.url));
    }
    else if(payload.role === 'seller' && !path.startsWith('/seller')){
        return NextResponse.redirect(new URL('/denied', req.url));
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('user-id', payload.id as string);
    requestHeaders.set('user-email', payload.email as string);
    requestHeaders.set('user-role', payload.role as string);
    
    return NextResponse.next({
        headers: requestHeaders
    });
}

export const config = {
    matcher: [
        '/customer/dashboard',
        '/customer/settings',
        '/customer/product/:path*',
        '/customer/wishlist',

        '/seller/dashboard',
        '/seller/settings',
        '/seller/all-list',
        '/seller/new-item',
    ],
}