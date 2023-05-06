import { Request } from 'express';
import BaseService from './BaseService';

class TestService extends BaseService {
  constructor(req: Request) {
    super(req);
  }
  info = async () => {
    const result = {
      name: 'cordelia',
    };

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('기다려. 아무 이유 없으니까');
      }, 1000);
      resolve(result);
    });
    return promise;
  };
}

export default TestService;
