import { error } from "console";
import pg from "pg";

const { Pool, Client } = pg;

export const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: 5432,
    database: process.env.PG_DATABASE,
});
