import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();


const db = mysql.createConnection({
  host: process.env.AWS_MYSQL_CONNECTION_API,
  user: process.env.AWS_MYSQL_CONNECTION_USER,
  password: process.env.AWS_MYSQL_CONNECTION_PASSWORD,
  database: process.env.AWS_MYSQL_CONNECTION_DATABSE_NAME,
});

export default db;