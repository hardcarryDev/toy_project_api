import { Request } from 'express';
import { BaseService, typia, Prisma, prisma, _ } from './BaseService';

class CartService extends BaseService {
  constructor(req: Request) {
    super(req);
  }

  async createCart() {
    typia.assertEquals<cartCreateMustInput>(this.body);
    const cart = await prisma.cart.create({
      data: <Prisma.cartCreateInput>this.body,
    });
    return cart;
  }

  async cartList() {
    typia.assertEquals<cartWhereClientInput>(this.body);
    const result = await prisma.cart.findMany({
      where: <Prisma.cartWhereInput>this.body,
    });
    return result;
  }

  async updateCart() {
    typia.assertEquals<cartUpdateMustInput>(this.body);
    const { id } = <cartUpdateMustInput>this.body;
    const data = _.cloneDeep(<Prisma.cartUpdateInput>this.body);
    delete data.id;

    const cart = await prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        update_dt: this.nowDt(),
      },
    });
    return cart;
  }

  async deleteCart() {
    typia.assertEquals<cartDeleteInput>(this.body);
    const { id } = <cartDeleteInput>this.body;
    const cart = await prisma.cart.update({
      where: { id },
      data: {
        update_dt: this.nowDt(),
        delete_dt: this.nowDt(),
      },
    });
    return cart;
  }
}

export default CartService;
