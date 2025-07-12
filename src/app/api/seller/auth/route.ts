import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { Customer, Seller } from "@/schema/schema";
import { eq } from "drizzle-orm";
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { type } = body;

    if (type === 'register') {
        const { name, email, password, location } = body;
        const customerFound = await db.select().from(Customer).where(eq(Customer.email, email));
        const sellerFound = await db.select().from(Seller).where(eq(Seller.email, email));

        if (customerFound.length > 0 || sellerFound.length > 0) {
            return NextResponse.json({
                success: false,
                message: `Email already exists`
            }, { status: 400 });
        }

        try {
            const hashed = await bcrypt.hash(password, 10);
            const newCustomer = await db.insert(Seller).values({ name, email, location, password: hashed });

            return NextResponse.json({
                success: true,
                message: `User registered`,
                newCustomer
            }, { status: 200 });

        } catch (err) {
            return NextResponse.json({
                success: false,
                message: `Something went wrong`
            }, { status: 500 });
        }
    }
    else if (type === 'login') {
        const { email, password } = body;
        const found = await db.select().from(Seller).where(eq(Seller.email, email));

        if (found.length === 0) {
            return NextResponse.json({
                success: false,
                message: `No user found`
            }, { status: 404 });
        }

        try {
            const matched = await bcrypt.compare(password, found[0].password);

            if (!matched) {
                return NextResponse.json({
                    success: false,
                    message: `Incorrect password`
                }, { status: 401 });
            }

            const token = jwt.sign({role: 'seller', id: found[0].id, email: found[0].email }, process.env.JWT_SECRET as string, { expiresIn: '1d' });

            const res = NextResponse.json({
                success: true,
                message: 'login successful',
            }, {status : 200});

            res.cookies.set('token', token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                maxAge: 86400000
            });

            return res;
        } catch (err) {
            return NextResponse.json({
                success: false,
                message: `Something went wrong`
            }, { status: 500 });
        }
    }
}

export async function GET(req: NextRequest){

    const userId = req.headers.get('user-id');
    const userRole = req.headers.get('user-role');
    const userEmail = req.headers.get('user-email');

    const sellerFound = await db.select().from(Seller).where(eq(Seller.email, userEmail as string));
  
    return NextResponse.json({
        success: true,
        data: sellerFound[0]
    }, {status: 200});
}