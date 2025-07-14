import { db } from "@/config/db";
import { Product } from "@/schema/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const type = req.url.split('=')[1];

    if (type === 'all') {
        try {
            const found = await db.select().from(Product);

            return NextResponse.json({
                success: true,
                message: `Products fetched`,
                data: found
            }, { status: 200 });
        } catch (err) {
            return NextResponse.json({
                success: false,
                message: `Something went wrong`,
            }, { status: 500 });
        }
    }
    else {
        const id = Number(req.url.split('=')[1]);

        try {
            if (id !== null) {
                const found = await db.select().from(Product).where(eq(Product.id, id));

                return NextResponse.json({
                    success: true,
                    message: `Product data fetched`,
                    data: found[0]
                }, { status: 200 });
            }
        } catch (err) {
            return NextResponse.json({
                success: false,
                message: `Something went wrong`,
            }, { status: 500 });
        }
    }
}