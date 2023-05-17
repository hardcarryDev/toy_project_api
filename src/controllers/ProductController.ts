import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import { successResponse, errorResponse, makeExactError } from '../utils/MakeResponse';
class ProductController {
  createProduct = async (req: Request, res: Response) => {
    const svc: ProductService = new ProductService(req);
    try {
      const result = await svc.createProduct();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  productList = async (req: Request, res: Response) => {
    const svc: ProductService = new ProductService(req);
    try {
      const result = await svc.productList();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    const svc: ProductService = new ProductService(req);
    try {
      const result = await svc.updateProduct();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
  deleteProduct = async (req: Request, res: Response) => {
    const svc: ProductService = new ProductService(req);
    try {
      const result = await svc.deleteProduct();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
}

export default new ProductController();
