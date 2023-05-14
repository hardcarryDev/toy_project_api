import { Request } from 'express';
import BaseService from './BaseService';
import { Prisma, PrismaClient, order } from '@prisma/client';
const prisma = new PrismaClient();
import typia from 'typia';

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
    // 타입 체킹시 에러남 :  Maximum call stack size exceeded
    // node_modules\typia\lib\factories\internal\metadata\iterate_metadata_object.js:32:111
    // typia.assert<Prisma.orderWhereInput>(this.body);
    const result = await prisma.order.findMany({
      where: <Prisma.orderWhereInput>this.body,
    });
    return result;
  }
}

export default OrderService;
