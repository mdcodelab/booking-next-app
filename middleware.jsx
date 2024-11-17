import { NextResponse } from "next/server";

export async function middleware (request) {
const {pathname}=request.nextUrl;
console.log("Requested page:", {pathname});

const isAuthenticated=true;
if(!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
}

return NextResponse.next();
}

export const config={
    matcher: ["/bookings"]
}