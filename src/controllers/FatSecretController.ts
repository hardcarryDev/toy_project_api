import { Request, Response } from 'express';
import FatSecretService from '../services/FatSecretService';
import { successResponse, errorResponse } from '../utils/makeResponse';
class FatSecretController {
  test = (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = svc.test();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };

  memberList = async (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = await svc.memberList();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };

  createMember = async (req: Request, res: Response) => {
    const svc: FatSecretService = new FatSecretService(req);
    try {
      const result = await svc.createMember();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };
}

export default new FatSecretController();
