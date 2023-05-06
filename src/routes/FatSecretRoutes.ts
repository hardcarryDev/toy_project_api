import BaseRoutes from './BaseRouter';
import FatSecretController from '../controllers/FatSecretController';

class FatSecretRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/list', FatSecretController.list);
  }
}

export default new FatSecretRoutes().router;
