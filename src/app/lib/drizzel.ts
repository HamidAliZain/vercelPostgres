import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
    uniqueIndex,
} from 'drizzle-orm/pg-core';

export const db = drizzle(sql);
export const table = pgTable(
    "person",
    {
        name: varchar('name'),
        owner : varchar('owner'),
    },
);
