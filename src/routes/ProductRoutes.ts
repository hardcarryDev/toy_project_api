import BaseRoutes from './BaseRouter';
import ProductController from '../controllers/ProductController';

class ProductRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/create', ProductController.createProduct);
    this.router.post('/list', ProductController.productList);
    this.router.post('/update', ProductController.updateProduct);
    this.router.post('/delete', ProductController.deleteProduct);
  }
}

export default new ProductRoutes().router;
