import { Request, Response } from 'express';
import MemberService from '../services/MemberService';
import { successResponse, errorResponse } from '../utils/makeResponse';
class MemberController {
  createMember = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.createMember();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };

  memberList = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.memberList();
      res.send(successResponse(result));
    } catch (error) {
      if (error instanceof Error) {
        res.send(errorResponse(error));
      }
    }
  };
}

export default new MemberController();
