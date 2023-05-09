import { Request, Response } from 'express';
import FatSecretService from '../services/FatSecretService';
import { successResponse, errorResponse } from '../utils/makeResponse';
class FatSecretController {
  list = (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = svc.list();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };

  userList = async (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = await svc.userList();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };
}

export default new FatSecretController();
