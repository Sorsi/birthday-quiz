const codeGenerator = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const createCodeList = (codeLength: number, codeAmount: number) => {
  let result = [];
  let counter = 0;
  while (counter < codeAmount) {
    result.push(codeGenerator(codeLength));
    counter += 1;
  }
  return result;
};
