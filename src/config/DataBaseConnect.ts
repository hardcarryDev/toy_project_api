import mysql, { ConnectionConfig } from 'mysql';
import { dataSource } from './DataSource';
import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV;
const dbInfo: ConnectionConfig = dataSource[environment];
export const conn = mysql.createConnection(dbInfo);
