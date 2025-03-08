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

// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// const connection = await mysql.createConnection(process.env.MYSQL_URl);
// console.log("connection sucessfull");

// export default connection;
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST, 
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
console.log("✅ MySQL Database Connected!");
export default pool;

