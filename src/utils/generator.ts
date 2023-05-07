function generateRandomKorean(len: number) {
  const koreans = [];
  for (let i = 0; i < len; i++) {
    const str = String.fromCharCode(Math.floor(Math.random() * (0xd7a3 - 0xac00)) + 0xac00);
    koreans.push(str);
  }
  return koreans.join('');
}

export { generateRandomKorean };

