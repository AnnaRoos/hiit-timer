import React, { useState, useEffect } from 'react';
import Rounds from '../../components/Rounds/Rounds';
import Counter from '../../components/Counter/Counter';
import CounterRAF from '../../components/Counter/CounterRAF';
import CounterPT from '../../hooks/usePreciseTimer/usePreciseTimer';
import CounterULE from '../../components/Counter/CounteULE';
import { calculateTotalTime } from '../../utils/CalculateTotalTime';
import CounterDT from '../../components/Counter/CounterDT';

const Timer = (props) => {
  const { state } = props.location;

  const intervalMinutes = +state.intervalMinutes;
  const intervalSeconds = +state.intervalSeconds;

  const breakMinutes = +state.breakMinutes;
  const breakSeconds = +state.breakSeconds;

  const totalMinutes = +intervalMinutes + +breakMinutes;
  const totalSeconds = +intervalSeconds + +breakSeconds;

  const [rounds, setRounds] = useState(state.rounds);

  const [counterMinutes, setCounterMinutes] = useState(0);
  const [counterSeconds, setCounterSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [hasBeenPaused, setHasBeenPaused] = useState(false);
  const [onInterval, setOnInterval] = useState(true);

  const time = calculateTotalTime(totalMinutes, totalSeconds, rounds);

  const startTimer = () => {
    if (!hasBeenPaused) {
      setCounterMinutes(intervalMinutes);
      setCounterSeconds(intervalSeconds);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setHasBeenPaused(true);
  };

  useEffect(() => {
    if (isRunning && rounds > 0) {
      let myInterval = setInterval(() => {
        if (counterSeconds > 0) {
          setCounterSeconds(counterSeconds - 1);
        }
        if (counterSeconds === 0) {
          if (counterMinutes === 0) {
            if (!onInterval) {
              setRounds(rounds - 1);
              setOnInterval(true);
              if (rounds > 1) {
                setCounterMinutes(intervalMinutes);
                setCounterSeconds(intervalSeconds);
              }
            } else {
              setCounterMinutes(breakMinutes);
              setCounterSeconds(breakSeconds);
              setOnInterval(false);
            }
            clearInterval(myInterval);
          } else {
            setCounterMinutes(counterMinutes - 1);
            setCounterSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [
    isRunning,
    counterMinutes,
    counterSeconds,
    rounds,
    breakMinutes,
    breakSeconds,
    intervalMinutes,
    intervalSeconds,
    onInterval,
  ]);

  return (
    <div>
      <h2>
        {onInterval ? 'Interval Time:' : 'Break Time'} {counterMinutes}:
        {counterSeconds < 10 ? '0' + counterSeconds : counterSeconds}
      </h2>
      <Rounds rounds={rounds} />
      <Counter initialMinutes={time.minutes} initialSeconds={time.seconds} start={isRunning}>
        Total Time Left:
      </Counter>
{/*        <CounterRAF seconds={totalSeconds} isRunning={isRunning} /> */}
      {/*       <CounterPT isRunning={isRunning} /> */}
{/*       <CounterULE isRunning={isRunning} /> */}
      {/*       <CounterDT isRunning={isRunning}/> */} 
      <button onClick={startTimer}>Start</button>
      <br /> <br />
      <button onClick={pauseTimer}>Pause</button>
      <br /> <br />
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

export default Timer;
