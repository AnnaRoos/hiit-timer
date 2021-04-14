export const timeToMilliseconds = (seconds, minutes = 0, hours = 0) => {
  const secondsInMilliseconds = seconds * 1000;
  const minutesInMilliseconds = minutes * 60 * 1000;
  const hoursInMilliseconds = hours * 60 * 60 * 1000;
  return secondsInMilliseconds + minutesInMilliseconds + hoursInMilliseconds;
};
