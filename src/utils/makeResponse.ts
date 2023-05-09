function successResponse(data: { [key: string]: string | number }) {
  return {
    message: 'success',
    result: true,
    code: 200,
    data: data ?? {},
  };
}

export { successResponse };
