export const CalculateAverage = (values: number[]) => {
  if (values.length === 0) {
    return 0;
  }

  const sum = values.reduce((acc, num) => acc + num, 0);
  const average = sum / values.length;

  return average;
};
