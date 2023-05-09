import dotenv from 'dotenv';
dotenv.config();

export const dataSource = {
  dev: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'toy_project',
    dialect: 'mysql',
  },
  test: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'database_test',
    dialect: 'mysql',
  },
  prod: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'database_production',
    dialect: 'mysql',
  },
} as const;
