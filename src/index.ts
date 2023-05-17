import express, { Application, Request, Response, NextFunction } from 'express';
import SchemasRoute from './routes/SchemasRoute';
import MemberRoutes from './routes/MemberRoutes';
import OrderRoutes from './routes/OrderRoutes';
import ProductRoutes from './routes/ProductRoutes';
import CartRoutes from './routes/CartRoutes';
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
    this.db = process.env.PRISMA_DB_URL || '';
    this.environment = process.env.NODE_ENV || 'dev';
    this.plugins();
    this.routes();
    this.handlers();
  }

  private plugins() {
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
  }

  private routes(): void {
    this.app.use('/components/schemas', SchemasRoute);
    this.app.use('/member', MemberRoutes);
    this.app.use('/order', OrderRoutes);
    this.app.use('/product', ProductRoutes);
    this.app.use('/cart', CartRoutes);
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
  console.log(`* DB INFO     : ${bundle.db}`);
});
