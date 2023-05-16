import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { successResponse, errorResponse, makeExactError } from '../utils/MakeResponse';
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
  updateOrder = async (req: Request, res: Response) => {
    const svc: OrderService = new OrderService(req);
    try {
      const result = await svc.updateOrder();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  cancelOrder = async (req: Request, res: Response) => {
    const svc: OrderService = new OrderService(req);
    try {
      const result = await svc.cancelOrder();
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
