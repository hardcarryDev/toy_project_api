import { Request } from 'express';
import BaseService from './BaseService';
import QUERY_BUILDER from '../utils/queryTemplate';

import { PrismaClient, Prisma, user } from '@prisma/client';
const prisma = new PrismaClient();

import dotenv from 'dotenv';
dotenv.config();
import typia from 'typia';

import IEatingList from '../structures/IEatingList';
const createRandomList = typia.createRandom<IEatingList>();
const API_LIST_CNT = 10;

class FatSecretService extends BaseService {
  constructor(req: Request) {
    super(req);
  }
  list() {
    const result = [];
    for (let i = 0; i < API_LIST_CNT; i++) {
      result.push(createRandomList());
    }
    return result;
  }

  async userList() {
    try {
      const query1 = QUERY_BUILDER.SIMPLE_SELECT('user', [], { user_id: 'test2' });
      const result = await prisma.$queryRawUnsafe<user[]>(query1);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

export default FatSecretService;
