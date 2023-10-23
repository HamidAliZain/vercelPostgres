import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
// import { db } from '@vercel/postgres';
import { db, table } from '@/app/lib/drizzel';


export async function GET(request: NextRequest) {
    const data = await db.select().from(table);

    try {
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("Check Your Network");
    }
}
export async function Post(request: Request) {
    const body = await request.json()
    await db.insert(table).values(body);
    try {
        return console.log(body, "body");
    } catch (error) {
        return console.log(error);
    }
    console.log(body);
}
