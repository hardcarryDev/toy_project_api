import { Request } from 'express';
import BaseService from './BaseService';
import { readFile } from 'fs/promises';
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const DUMMY_PATH = process.env.DUMMY_PATH || './dummy';

class FatSecretService extends BaseService {
  constructor(req: Request) {
    super(req);
  }
  list = async () => {
    const result = await readFile(path.join(DUMMY_PATH, '/fatSecret.json'), 'utf-8');
    return result;
  };
}

export default FatSecretService;
