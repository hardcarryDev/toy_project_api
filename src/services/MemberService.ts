import { Request } from 'express';
import BaseService from './BaseService';
import { Prisma, PrismaClient, member } from '@prisma/client';
const prisma = new PrismaClient();
import typia from 'typia';

class MemberService extends BaseService {
  constructor(req: Request) {
    super(req);
  }

  async createMember() {
    typia.assertEquals<memberCreateMustInput>(this.body);
    const member = await prisma.member.create({
      data: <Prisma.memberCreateInput>this.body,
    });
    return member;
  }

  async memberList() {
    typia.assertEquals<Prisma.memberWhereInput>(this.body);
    const result = await prisma.member.findMany({
      where: <Prisma.memberWhereInput>this.body,
    });
    return result;
  }
}

export default MemberService;
