export const calculateTotalTime = (min, sec, no) => {
  const timeInSeconds = +min * 60 + +sec;
  const totalTimeInSeconds = timeInSeconds * +no;
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds - minutes * 60;
  return { minutes: minutes, seconds: seconds };
};
