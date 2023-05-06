import { Request, Response } from 'express';
import FatSecretService from '../services/FatSecretService';

class FatSecretController {
  list = async (req: Request, res: Response): Promise<any> => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = await svc.list();
      res.send(result);
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
