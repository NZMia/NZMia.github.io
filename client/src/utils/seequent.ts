export const compareStringNumber = (origin: string) => {
  const reverseString = origin.split('').reverse().join('');
  const result = parseFloat(reverseString) - parseFloat(origin);

  return result !== 0 ? (result < 0 ? origin : reverseString) : origin;
};
