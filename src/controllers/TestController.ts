import { Request, Response } from 'express';
import TestService from '../services/TestService';

class TestController {
  whoAreU = (req: Request, res: Response) => {
    try {
      res.send({
        name: 'cordelia',
        nickName: 'hardcarryDev',
        email: 'chaindevchu@gmail.com',
        birthDate: '19930815',
      });
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
  whatYourName = async (req: Request, res: Response): Promise<any> => {
    const service: TestService = new TestService(req);
    try {
      const result = await service.info();
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

export default new TestController();
