import BaseRoutes from './BaseRouter';
import FatSecretController from '../controllers/FatSecretController';

class FatSecretRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/list', FatSecretController.list);
    this.router.post('/user/list', FatSecretController.userList);
  }
}

export default new FatSecretRoutes().router;
