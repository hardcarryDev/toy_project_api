import { Request } from 'express';
import BaseService from './BaseService';
import { readFile } from 'fs/promises';
import * as path from 'path';
import QUERY_BUILDER from '../utils/queryTemplate';
import dotenv from 'dotenv';
dotenv.config();
// const DUMMY_PATH = process.env.DUMMY_PATH || './dummy';
import typia from 'typia';

import IEatingList from '../structures/IEatingList';
const createRandomList = typia.createRandom<IEatingList>();
const API_LIST_CNT = 10;

class FatSecretService extends BaseService {
  constructor(req: Request) {
    super(req);
  }
  list() {
    // const result = await readFile(path.join(DUMMY_PATH, '/fatSecret.json'), 'utf-8');
    const result = [];
    for (let i = 0; i < API_LIST_CNT; i++) {
      result.push(createRandomList());
    }
    return result;
  }

  userList() {
    const result = QUERY_BUILDER.SIMPLE_SELECT('user');
    return;
  }
}

export default FatSecretService;
