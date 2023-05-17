import { Request, Response } from 'express';
import CartService from '../services/CartService';
import { successResponse, errorResponse, makeExactError } from '../utils/MakeResponse';
class CartController {
  createCart = async (req: Request, res: Response) => {
    const svc: CartService = new CartService(req);
    try {
      const result = await svc.createCart();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  cartList = async (req: Request, res: Response) => {
    const svc: CartService = new CartService(req);
    try {
      const result = await svc.cartList();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  updateCart = async (req: Request, res: Response) => {
    const svc: CartService = new CartService(req);
    try {
      const result = await svc.updateCart();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
  deleteCart = async (req: Request, res: Response) => {
    const svc: CartService = new CartService(req);
    try {
      const result = await svc.deleteCart();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
}

export default new CartController();
