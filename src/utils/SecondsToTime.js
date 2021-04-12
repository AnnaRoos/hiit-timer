export const secondsToTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  return { minutes: minutes, seconds: seconds };
};
