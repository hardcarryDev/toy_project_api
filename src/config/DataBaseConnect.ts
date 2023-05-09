import mysql from 'mysql2/promise';
import { dataSource } from './DataSource';
import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV;
const dbInfo = dataSource[environment];
let conn;

function dbInit() {
  conn = mysql.createPool(dbInfo);
}
export { dbInit, conn };
