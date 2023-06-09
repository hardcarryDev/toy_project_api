import { Request } from 'express';
import _ from 'lodash';
import typia from 'typia';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

import dotenv from 'dotenv';
dotenv.config();

/**
 * 제공되는 프로퍼티 목록
 *
 * @prop body: Request['body'];
 * @prop params: Request['params'];
 * @prop env: string;
 * @prop nowDt: () => Date;
 */
class BaseService {
  protected body: Request['body'];
  protected params: Request['params'];
  protected env: string;
  protected nowDt: () => Date;

  constructor(req: Request) {
    this.body = <unknown>req.body;
    this.params = req.params;
    this.env = process.env.NODE_ENV || 'dev';

    // node.js 에서 new Date()를 기본으로 GMT 타임존으로 만들어버리는 이슈가 있다.
    // 데이터베이스 타임존도 맞추면 둘다 맞긴한데 한국이니 한국에 맞게 맞춰야 되지 않겠나
    // 처음 dayjs.tz.defualt를 통해 구현했지만 Prisma Schema에서 Date 타입으로 db를 긁어오기
    // 때문에 다시 Date로 감싸줘야 하는 문제가 있었고, 그럴 경우 'Asia/Seoul'로 맞춰놓은
    // 타임존이 GMT로 원상복구되는 진귀한 현상이 발생하여 그냥 9시간을 더해주는 로직으로 만듬.
    this.nowDt = () => {
      const date = new Date();
      const hour = date.getHours();
      date.setHours(hour + 9);
      return date;
    };
  }
}

export { BaseService, typia, Prisma, prisma, _ };
