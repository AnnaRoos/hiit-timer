export const timeToMilliseconds = (minutes, seconds) => {
  const secondsInMilliseconds = seconds * 1000;
  const minutesInMilliseconds = minutes * 60 * 1000;
  return secondsInMilliseconds + minutesInMilliseconds;
}