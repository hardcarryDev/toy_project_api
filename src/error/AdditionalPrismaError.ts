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
};

export { AdditionalPrismaError, prismaCommonErrMsg };
