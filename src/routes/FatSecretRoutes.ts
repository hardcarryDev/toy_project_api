import BaseRoutes from './BaseRouter';
import FatSecretController from '../controllers/FatSecretController';

class FatSecretRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/list', FatSecretController.test);
    this.router.get('/member/list', FatSecretController.memberList);
    this.router.post('/member/create', FatSecretController.createMember);
  }
}

export default new FatSecretRoutes().router;
