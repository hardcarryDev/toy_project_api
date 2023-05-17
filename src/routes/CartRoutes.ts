import BaseRoutes from './BaseRouter';
import CartController from '../controllers/CartController';

class CartRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/create', CartController.createCart);
    this.router.post('/list', CartController.cartList);
    this.router.post('/update', CartController.updateCart);
    this.router.post('/delete', CartController.deleteCart);
  }
}

export default new CartRoutes().router;
