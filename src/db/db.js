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
  database:process.env.MYSQL_DATABASE,
  host: process.env.MYSQLHOST, 
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  
  port: process.env.MYSQLPORT || 3306, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Log database connection status
pool.getConnection()
    .then(() => console.log("✅ Connected to MySQL"))
 
    .catch((err) => {
        console.error("❌ Database connection failed:", err.message);
        console.error("🔹 Check if your .env file has the correct database credentials.");
    });
export default pool;

