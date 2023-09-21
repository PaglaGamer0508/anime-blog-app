export const checkIsNew = (date: Date): boolean => {
  const oneDayInMilliseconds: number = 24 * 60 * 60 * 1000;
  const currentDate: Date = new Date();
  const pastDate = new Date(date);
  const dateDifference: number = currentDate.getTime() - pastDate.getTime();

  return dateDifference < oneDayInMilliseconds;
};
