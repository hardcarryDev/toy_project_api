import _ from 'lodash';
import { Request } from 'express';
import BaseService from './BaseService';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});
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

  async updateMember() {
    typia.assertEquals<memberUpdateMustInput>(this.body);
    const { id } = <memberUpdateMustInput>this.body;
    const data = _.cloneDeep(<Prisma.memberUpdateInput>this.body);
    delete data.id;

    const member = await prisma.member.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        update_dt: this.nowDt(),
      },
    });
    return member;
  }

  async deleteMember() {
    this.env = 'dev ing';
    typia.assertEquals<memberDeleteInput>(this.body);
    const { id } = <memberDeleteInput>this.body;

    if (this.env == 'dev') {
      // 개발 버전일때는 그냥 지운다. 안그래도 테스트 데이터가 많아서 지워주면 개꿀이지
      const deleteMember = await prisma.member.delete({
        where: { id },
      });
      return deleteMember;
    } else {
      // 프로덕션 버전이나 테스트 버전에서는 exit_dt(탈퇴 처리) 를 업데이트 시켜준다.
      const member = await prisma.member.update({
        where: { id },
        data: {
          update_dt: this.nowDt(),
          exit_dt: this.nowDt(),
        },
      });
      return member;
    }
  }
}

export default MemberService;
