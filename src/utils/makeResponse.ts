import { TypeGuardError } from 'typia';
import { Prisma } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
const env = process.env.NODE_ENV || 'dev';

function successResponse(data: unknown[] | unknown) {
  return {
    message: 'success',
    result: true,
    code: 200,
    data: data,
  };
}

/**
 * 에러 객체를 전달 받아 공통처리한다.
 * 데이터베이스 관련 에러발생시 테이블명, 컬럼명 등이 노출되는 이슈가 있다.
 * 이런 경우엔 그냥 "내부 서버 에러"로 표시되게 끔 처리함.
 * 추가 개발 시에 공통 에러 관리를 여기서 하면됨.
 *
 * @param error
 * @returns ERROR JSON
 */
function errorResponse(error: Error) {
  console.log('====== error.name ====== :: ', error.name);

  const errInfo: { [key: string]: string } = {
    PrismaClientValidationError: '잘못된 요청입니다. 요청 파라미터를 확인해주세요.',
    TypeGuardError: '잘못된 요청입니다. 요청 파라미터를 확인해주세요.',
  };

  const msg: string = errInfo[error.name];

  return {
    code: 500,
    result: false,
    message: msg,
    error: env == 'dev' ? error.message : '',
  };
}

function makeExactError(error: unknown): unknown {
  if (error instanceof TypeGuardError) {
    error.name = 'TypeGuardError';
  }
  if (error instanceof Prisma.PrismaClientValidationError) {
    error.name = 'PrismaClientValidationError';
  }
  if (error instanceof SyntaxError) {
    error.name = 'SyntaxError';
  }

  return error;
}

export { successResponse, errorResponse, makeExactError };
