import { Request } from 'express';
import { BaseService, typia, Prisma, prisma, _ } from './BaseService';

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

  async updateOrder() {
    typia.assertEquals<orderUpdateMustInput>(this.body);
    const { id } = <orderUpdateMustInput>this.body;
    const data = _.cloneDeep(<Prisma.orderUpdateInput>this.body);
    delete data.id;

    const order = await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        update_dt: this.nowDt(),
      },
    });
    return order;
  }

  async cancelOrder() {
    typia.assertEquals<orderDeleteInput>(this.body);
    const { id } = <orderDeleteInput>this.body;

    const order = await prisma.order.update({
      where: { id },
      data: {
        update_dt: this.nowDt(),
        order_cancel_dt: this.nowDt(),
      },
    });
    return order;
  }
}

export default OrderService;
