import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 import { db, table } from '@/app/lib/drizzel';


export async function GET(request:  Request) {
    const data = await db.select().from(table);

    try {
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("Check Your Network");
    }
}
   