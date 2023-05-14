import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { successResponse, errorResponse, makeExactError } from '../utils/makeResponse';
class OrderController {
  createOrder = async (req: Request, res: Response) => {
    const svc: OrderService = new OrderService(req);
    try {
      const result = await svc.createOrder();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  orderList = async (req: Request, res: Response) => {
    const svc: OrderService = new OrderService(req);
    try {
      const result = await svc.orderList();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
}

export default new OrderController();
