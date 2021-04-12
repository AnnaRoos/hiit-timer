import { timeToSeconds } from './TimeToSeconds';
import { secondsToTime } from './SecondsToTime';


export const calculateSwitchTime = (minutesLeft, secondsLeft, minusMinutes, minusSeconds) => {
  const totalSecondsLeft = timeToSeconds(minutesLeft, secondsLeft);
  const deduction = timeToSeconds(minusMinutes, minusSeconds);
  const newTimeInSeconds = totalSecondsLeft - deduction;
  const newTime = secondsToTime(newTimeInSeconds);
  return newTime;
}