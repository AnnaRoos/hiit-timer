import React, { useState, useEffect } from 'react';
import Rounds from '../../components/Rounds/Rounds';
import Counter from '../../components/Counter/Counter';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerButton from '../../components/Buttons/TimerButton';
import GoBackButton from '../../components/Buttons/GoBackButton';

import styles from './Timer.module.css';

import { msToTime } from '../../utils/MillisecondsToTime';
import { timeToMilliseconds } from '../../utils/TimeToMilliseconds';

const Timer = (props) => {
  const { state } = props.location;

  const intervalTimeInMilliseconds = timeToMilliseconds(
    +state.intervalSeconds,
    state.intervalMinutes
  );

  const breakTimeInMilliseconds = timeToMilliseconds(
    +state.breakSeconds,
    +state.breakMinutes
  );

  const totalTimeInMilliseconds = timeToMilliseconds(
    +state.totalTime.seconds,
    +state.totalTime.minutes,
    +state.totalTime.hours
  );

  const [totalCounterInMilliseconds, setTotalCounterInMilliseconds] = useState(
    totalTimeInMilliseconds
  );

  const [totalCounter, setTotalCounter] = useState({
    hours: +state.totalTime.hours,
    minutes: +state.totalTime.minutes,
    seconds: +state.totalTime.seconds,
  });

  const [smallCounterInMilliseconds, setSmallCounterInMilliseconds] = useState(
    intervalTimeInMilliseconds
  );

  const initialIntervalTime = msToTime(intervalTimeInMilliseconds);

  const [smallCounter, setSmallCounter] = useState({
    minutes: initialIntervalTime.minutes,
    seconds: initialIntervalTime.seconds,
  });

  const [rounds, setRounds] = useState(state.rounds);

  const [isRunning, setIsRunning] = useState(false);
  const [onInterval, setOnInterval] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const reset = () => {
    setIsFinished(false);
    setSmallCounter({
      minutes: initialIntervalTime.minutes,
      seconds: initialIntervalTime.seconds,
    });
    setTotalCounter({
      hours: +state.totalTime.hours,
      minutes: +state.totalTime.minutes,
      seconds: +state.totalTime.seconds,
    });
    setRounds(state.rounds);
    setSmallCounterInMilliseconds(intervalTimeInMilliseconds);
    setTotalCounterInMilliseconds(totalTimeInMilliseconds);
    setOnInterval(true);
  };

  useEffect(() => {
    let myInterval;
    if (isRunning && rounds > 0) {
      myInterval = setInterval(() => {
        if (totalCounterInMilliseconds > 0) {
          setTotalCounterInMilliseconds(totalCounterInMilliseconds - 1000);
          const newTime = msToTime(totalCounterInMilliseconds);

          setTotalCounter({
            hours: newTime.hours,
            minutes: newTime.minutes,
            seconds: newTime.seconds,
          });
        }

        if (smallCounterInMilliseconds > 0) {
          setSmallCounterInMilliseconds(smallCounterInMilliseconds - 1000);
          const newIntervalAndBreakTime = msToTime(smallCounterInMilliseconds);
          setSmallCounter({
            minutes: newIntervalAndBreakTime.minutes,
            seconds: newIntervalAndBreakTime.seconds,
          });
        } else {
          if (onInterval) {
            setSmallCounterInMilliseconds(breakTimeInMilliseconds - 1000);
            const newBreakTime = msToTime(breakTimeInMilliseconds);
            setSmallCounter({
              minutes: newBreakTime.minutes,
              seconds: newBreakTime.seconds,
            });
            setOnInterval(false);
          } else {
            setSmallCounterInMilliseconds(intervalTimeInMilliseconds - 1000);
            const newIntervalTime = msToTime(intervalTimeInMilliseconds);
            setSmallCounter({
              minutes: newIntervalTime.minutes,
              seconds: newIntervalTime.seconds,
            });
            setRounds(rounds - 1);
            setOnInterval(true);
          }
        }
        if (totalCounterInMilliseconds === 0) {
          setTotalCounter({ hours: 0, minutes: 0, seconds: 0 });
          setSmallCounter({ minutes: 0, seconds: 0 });
          setIsFinished(true);
          clearInterval(myInterval);
        }
      }, 1000);
    }
    return () => clearInterval(myInterval);
  }, [
    isRunning,
    breakTimeInMilliseconds,
    intervalTimeInMilliseconds,
    onInterval,
    rounds,
    smallCounterInMilliseconds,
    totalCounterInMilliseconds,
  ]);

  return (
    <div className={styles.timer}>
      <ProgressBar
        title={onInterval ? 'Interval Time:' : 'Break Time:'}
        time={smallCounter}
        timeLeft={smallCounterInMilliseconds}
        timeLimit={
          onInterval ? intervalTimeInMilliseconds : breakTimeInMilliseconds
        }
        isRunning={isRunning}
        isFinished={isFinished}
      />
      <div className={styles.rounds}>
        <Rounds rounds={rounds} />
      </div>
      <div className={styles.totalTime}>
        <Counter
          title={'Total Time'}
          hours={totalCounter.hours}
          minutes={totalCounter.minutes}
          seconds={totalCounter.seconds}
        />
      </div>
      <div className={styles.timerButtons}>
        <TimerButton
          title="START"
          clicked={() => setIsRunning(true)}
          color="green"
        />
        <TimerButton
          title="PAUSE"
          clicked={() => setIsRunning(false)}
          color="yellow"
        />
        <TimerButton title="RESET" clicked={reset} color="pink" />
      </div>
      <GoBackButton title="GO BACK" clicked={() => props.history.goBack()} />
    </div>
  );
};

export default Timer;
