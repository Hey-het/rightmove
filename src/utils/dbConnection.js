import pg from "pg";
// import { connectionString } from "pg/lib/defaults";

export function connect(){
    const dbConnectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
    const db = new pg.Pool({
        connectionString: dbConnectionString,
    });
    return db;
}

export const db= connect();