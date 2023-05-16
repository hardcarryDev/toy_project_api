import { Request } from 'express';
import { BaseService, typia, Prisma, prisma } from './BaseService';

class OrderService extends BaseService {
  constructor(req: Request) {
    super(req);
  }

  async createOrder() {
    typia.assertEquals<orderCreateMustInput>(this.body);
    const order = await prisma.order.create({
      data: <Prisma.orderCreateInput>this.body,
    });
    return order;
  }

  async orderList() {
    typia.assertEquals<orderWhereClientInput>(this.body);
    const result = await prisma.order.findMany({
      where: <Prisma.orderWhereInput>this.body,
    });
    return result;
  }
}

export default OrderService;
