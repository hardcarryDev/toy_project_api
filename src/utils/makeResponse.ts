function successResponse(data: any) {
  console.log('data: ', data);

  return {
    message: 'success',
    result: true,
    code: 200,
    data: data,
  };
}

export { successResponse };
