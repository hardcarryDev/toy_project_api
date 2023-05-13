import { Request } from 'express';
import BaseService from './BaseService';
import QUERY_BUILDER from '../utils/queryTemplate';

import { Prisma, PrismaClient, member } from '@prisma/client';
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
  test() {
    const result = [];
    for (let i = 0; i < API_LIST_CNT; i++) {
      result.push(createRandomList());
    }
    return result;
  }

  async memberList() {
    // const query1 = QUERY_BUILDER.SIMPLE_SELECT('member1', [], { user_id: 'test2' });
    // const result = await prisma.$queryRawUnsafe<member[]>(query1);
    // return result;
    typia.assert<Prisma.memberWhereInput>(this.body);
    const result = await prisma.member.findMany({
      where: <Prisma.memberWhereInput>this.body,
    });
    return result;
  }

  async createMember() {
    typia.assert<memberCreateMustInput>(this.body);
    const member = await prisma.member.create({
      data: <Prisma.memberCreateInput>this.body,
    });
    return member;
  }
}

export default FatSecretService;
