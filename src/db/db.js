// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const db = await mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// console.log("✅ MySQL Database Connected!");

// export default db;

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);
console.log("connection sucessfull");

export default connection;
