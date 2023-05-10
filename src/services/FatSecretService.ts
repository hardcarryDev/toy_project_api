import { Request } from 'express';
import BaseService from './BaseService';
import { db, sequelize } from '../config/DataBase';
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
      // const query1 = QUERY_BUILDER.SIMPLE_SELECT('user', [], { user_id: 'test2' });
      // console.log(`query1: ${query1}`);
      // const records1 = await sequelize.query(query1);
      // return records1[0];
      // const allUsers = await prisma.user.findMany();
      // return allUsers;

      const result = await prisma.$queryRaw<user[]>`SELECT * FROM User`;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

export default FatSecretService;
