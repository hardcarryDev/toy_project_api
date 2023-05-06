import { Request } from 'express';

export default class BaseService {
  body: Request['body'];
  params: Request['params'];

  constructor(req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.body = req.body;
    this.params = req.params;
  }
}
