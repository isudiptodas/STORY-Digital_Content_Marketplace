import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/schema/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { jwtVerify } from 'jose';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, desc, image, category, imagePath, price } = body;
    const token = req.cookies.get('token')?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token as string, secret);

    const sellerEmail = payload.email as string;

    try {
        const res = await db.insert(Product).values({ name, desc, image, category, imagePath, price, sellerEmail });
        if (res) {
            return NextResponse.json({
                success: true,
                message: 'Product listed'
            }, { status: 200 });
        }

        return NextResponse.json({
            success: false,
            message: 'Product listing failed'
        }, { status: 400 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            success: false,
            message: 'Internal Server Error'
        }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token as string, secret);

    const sellerEmail = payload.email as string;
    const type = req.url.split('=')[1];

    if (type === 'all') {
        try {
            const found = await db.select().from(Product).where(eq(Product.sellerEmail, sellerEmail));
            return NextResponse.json({
                success: true,
                message: 'All products fetched',
                data: found
            }, { status: 200 });
        } catch (err) {
            console.log(err);
            return NextResponse.json({
                success: false,
                message: 'Internal Server Error'
            }, { status: 500 });
        }
    }
    else {
        const id = Number(req.url.split('id=')[1]);

        if (id !== null) {
            const found = await db.select().from(Product).where(eq(Product.id, id));

            if (found.length > 0) {
                return NextResponse.json({
                    success: true,
                    message: 'Product fetched',
                    data: found[0]
                }, { status: 200 });
            }
        }

        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const id = Number(req.url.split('=')[1]);

    try {
        const found = await db.delete(Product).where(eq(Product.id, id));
        return NextResponse.json({
            success: true,
            message: 'Product unlisted',
        }, { status: 201 });
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
        }, { status: 500 });
    }
}