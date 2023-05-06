import BaseRoutes from './BaseRouter';
import TestController from '../controllers/TestController';

class TestRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/test/aa', TestController.whoAreU);
    this.router.get('/test/bb', TestController.whatYourName);
  }
}

export default new TestRoutes().router;
