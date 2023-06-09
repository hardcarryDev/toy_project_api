import { Request, Response } from 'express';
import MemberService from '../services/MemberService';
import { successResponse, errorResponse, makeExactError } from '../utils/MakeResponse';
class MemberController {
  createMember = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.createMember();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  memberList = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.memberList();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };

  updateMember = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.updateMember();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
  deleteMember = async (req: Request, res: Response) => {
    const svc: MemberService = new MemberService(req);
    try {
      const result = await svc.deleteMember();
      res.send(successResponse(result));
    } catch (error) {
      const exactError: unknown = makeExactError(error);
      if (exactError instanceof Error) {
        res.send(errorResponse(exactError));
      }
    }
  };
}

export default new MemberController();
