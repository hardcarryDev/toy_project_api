import { Request, Response } from 'express';
import FatSecretService from '../services/FatSecretService';
import { successResponse } from '../utils/makeResponse';
class FatSecretController {
  list = (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = svc.list();
      res.send(successResponse(result));
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.send({
          code: 500,
          result: false,
          message: error.message,
        });
      }
    }
  };

  userList = (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = svc.userList();
      res.send(successResponse(result));
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.send({
          code: 500,
          result: false,
          message: error.message,
        });
      }
    }
  };
}

export default new FatSecretController();
