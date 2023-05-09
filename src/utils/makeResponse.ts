function successResponse(data: unknown[] | unknown) {
  return {
    message: 'success',
    result: true,
    code: 200,
    data: data,
  };
}

export { successResponse };
