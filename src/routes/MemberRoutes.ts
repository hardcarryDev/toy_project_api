import BaseRoutes from './BaseRouter';
import MemberController from '../controllers/MemberController';

class MemberRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/create', MemberController.createMember);
    this.router.post('/list', MemberController.memberList);
  }
}

export default new MemberRoutes().router;
