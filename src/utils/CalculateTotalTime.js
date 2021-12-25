export const calculateTotalTime = (min, sec, no) => {
  const timeInSeconds = +min * 60 + +sec;
  const totalTimeInSeconds = timeInSeconds * +no;
  const hours = Math.floor(totalTimeInSeconds / 60 / 60);
  const minutes = Math.floor((totalTimeInSeconds / 60) % 60);
  const seconds = Math.floor(totalTimeInSeconds % 60);

  return { hours: hours, minutes: minutes, seconds: seconds };
};
