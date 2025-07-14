import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/schema/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, desc, image, category, imagePath, price } = body;
    const sellerEmail = req.headers.get('user-email') as string;

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
    const sellerEmail = req.headers.get('user-email') as string;

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