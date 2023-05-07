import dotenv from 'dotenv';
dotenv.config();

export const dataSource = {
  dev: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  test: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'database_test',
  },
  prod: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'database_production',
  },
};
