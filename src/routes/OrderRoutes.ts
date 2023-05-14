import BaseRoutes from './BaseRouter';
import OrderController from '../controllers/OrderController';

class OrderRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/create', OrderController.createOrder);
    this.router.post('/list', OrderController.orderList);
  }
}

export default new OrderRoutes().router;
