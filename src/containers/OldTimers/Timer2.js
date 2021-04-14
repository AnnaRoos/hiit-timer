import React, { useState, useEffect, useCallback } from 'react';
import Rounds from '../../components/Rounds/Rounds';
import { calculateSwitchTime } from '../../utils/CalculateSwitchTime';
import { msToTime } from '../../utils/MillisecondsToTime';
import { timeToMilliseconds } from '../../utils/TimeToMilliseconds';

const Timer2 = (props) => {
  const { state } = props.location;

  const intervalTimeInMilliseconds = timeToMilliseconds(
    +state.intervalMinutes,
    +state.intervalSeconds
  );

  const breakTimeInMilliseconds = timeToMilliseconds(
    +state.breakMinutes,
    +state.breakSeconds
  );

  const totalTimeInMilliseconds = timeToMilliseconds(
    state.totalTime.minutes,
    state.totalTime.seconds
  );

  const [timeInMilliseconds, setTimeInMilliseconds] = useState(
    totalTimeInMilliseconds
  );

  const [intervalsAndBreaks, setIntervalsAndBreaks] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [switchTime, setSwitchTime] = useState(null);

  const totalTime = state.totalTime;

  const [rounds, setRounds] = useState(state.rounds);

  const [counter, setCounter] = useState({
    minutes: +totalTime.minutes,
    seconds: +totalTime.seconds,
  });

  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [onInterval, setOnInterval] = useState(true);
  const [isFinished, setIsFinished] = useState(false);


  const pause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const start = () => {
    let startTime = Date.now() + timeInMilliseconds;
    setSavedTime(startTime);
    setIsRunning(true);
  };
  const [savedTime, setSavedTime] = useState(null);

  useEffect(() => {
    let myInterval;
    if (isRunning) {
      myInterval = setInterval(() => {
        const now = Date.now();
        let distance = savedTime - now;
        setTimeInMilliseconds(distance);

        const newTime = msToTime(distance);

     
        setCounter({
          minutes: newTime.minutes,
          seconds: newTime.seconds,
        });


        if (distance < 0) {
          distance = 0;
        }
        if (distance === 0) {
          setCounter({ minutes: 0, seconds: 0 });
          clearInterval(myInterval);
        }
      }, 10);
    } else if (isPaused && !isRunning) {
      clearInterval(myInterval);
      setIsPaused(false);
    }
    return () => clearInterval(myInterval);
  }, [isRunning, isPaused, savedTime]);

  return (
    <div>
      <h2>
        Interval Time:{' '}
        {intervalsAndBreaks.minutes < 10
          ? '0' + intervalsAndBreaks.minutes
          : intervalsAndBreaks.minutes}
        :
        {intervalsAndBreaks.seconds < 10
          ? '0' + intervalsAndBreaks.seconds
          : intervalsAndBreaks.seconds}
      </h2>
      <h2>
        Total Time:{' '}
        {counter.minutes < 10 ? '0' + counter.minutes : counter.minutes}:
        {counter.seconds < 10 ? '0' + counter.seconds : counter.seconds}
      </h2>
      <button onClick={start}>Start</button>
      <br /> <br />
      <button onClick={pause}>Pause</button>
      <br /> <br />
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

export default Timer2;
