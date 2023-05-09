function successResponse(data: { [key: string]: any }) {
  return {
    message: 'success',
    result: true,
    code: 200,
    data: data,
  };
}

export { successResponse };
