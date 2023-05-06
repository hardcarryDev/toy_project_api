import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

class Bundle {
  public app: Application;
  public host: string;
  public port: string;

  constructor() {
    this.app = express();
    this.host = process.env.HOST || 'http://localhost';
    this.port = process.env.PORT || '3000';
  }
}

const bundle = new Bundle();
const app = bundle.app;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(bundle.port, () => {
  console.log(`THIS APP IS RUNNING ==> ${bundle.host}:${bundle.port}`);
});
