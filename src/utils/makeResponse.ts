function successResponse(data: any) {
  return {
    message: 'success',
    result: true,
    code: 200,
    data: data,
  };
}

export { successResponse };
