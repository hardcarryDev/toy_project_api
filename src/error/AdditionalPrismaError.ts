class AdditionalPrismaError extends Error {
  name: string;
  message: string;
  code?: number | string;
  prismaErrCode?: string;
  prismaErrMsg?: string;

  constructor(name: string, message: string, code?: number | string, prismaErrCode?: string, prismaErrMsg?: string) {
    super();
    this.name = name;
    this.message = message;
    this.code = code;
    this.prismaErrCode = prismaErrCode;
    this.prismaErrMsg = prismaErrMsg;
  }
}

const prismaCommonErrMsg: { [key: string]: string } = {
  P2025: 'An operation failed because it depends on one or more records that were required but not found. {cause}',
  // 지금 다 집어넣기는 너무 귀찮다. 발생하면 하나씩 집어넣는다. 어차피 원인은 Error stack 에 나오기 때문에 난 상관 없음
  // FRONT 개발자만 자세한 원인을 모를뿐.
};

export { AdditionalPrismaError, prismaCommonErrMsg };
