import express, { Application, Request, Response, NextFunction } from 'express';
import testRoutes from './routes/TestRoutes';
import fatSecretRoutes from './routes/FatSecretRoutes';
import { dbInit } from './config/DataBaseConnect';
import dotenv from 'dotenv';
dotenv.config();

class Bundle {
  public app: Application;
  public host: string;
  public port: string;
  public db: string;
  public environment: string;
  public connection: any;

  constructor() {
    this.app = express();
    this.host = process.env.HOST || 'http://localhost';
    this.port = process.env.PORT || '3000';
    this.db = process.env.DB_HOST || '';
    this.environment = process.env.NODE_ENV || 'dev';
    dbInit();
    this.routes();
    this.handlers();
  }

  private routes(): void {
    this.app.use('', testRoutes);
    this.app.use('/fat', fatSecretRoutes);
  }

  private handlers(): void {
    this.app.use((_: Request, res: Response) => {
      console.error(res || '404');
      res.status(404).send({
        message: '404 error',
        result: false,
        code: 404,
      });
    });
    this.app.use((err: Error, _: Request, res: Response) => {
      if (err) {
        console.error(err.message || err);
        res.status(500).send({
          message: err.message,
          result: false,
          code: 500,
        });
      }
    });
  }
}

const bundle = new Bundle();
const app = bundle.app;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World');
// });

app.listen(bundle.port, () => {
  console.log(`* APP RUNNING : ${bundle.host}:${bundle.port}`);
  console.log(`* ENVIRONMENT : ${bundle.environment}`);
  console.log(`* DB HOST     : ${bundle.db}`);
});
