import React, { useState, useEffect } from 'react';

import Rounds from '../../components/Rounds/Rounds';
import Counter from '../../components/Counter/Counter';

import { calculateTotalTime } from '../../utils/CalculateTotalTime';
import { calculateSwitchTime } from '../../utils/CalculateSwitchTime';

const Timer = (props) => {
  const { state } = props.location;

  const intervalMinutes = +state.intervalMinutes;
  const intervalSeconds = +state.intervalSeconds;

  const breakMinutes = +state.breakMinutes;
  const breakSeconds = +state.breakSeconds;

  const [rounds, setRounds] = useState(state.rounds);

  const totalTime = calculateTotalTime(
    +intervalMinutes + +breakMinutes,
    +intervalSeconds + +breakSeconds,
    rounds
  );

  const [counterMinutes, setCounterMinutes] = useState(totalTime.minutes);
  const [counterSeconds, setCounterSeconds] = useState(totalTime.seconds);

  const [isRunning, setIsRunning] = useState(false);
  const [onInterval, setOnInterval] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const switchTime = calculateSwitchTime(
    totalTime.minutes,
    totalTime.seconds,
    intervalMinutes,
    intervalSeconds
  );
  const [switchMinutes, setSwitchMinutes] = useState(switchTime.minutes);
  const [switchSeconds, setSwitchSeconds] = useState(switchTime.seconds + 1);

  useEffect(() => {
    if (isRunning && rounds > 0) {
      let myInterval = setInterval(() => {
        if (
          counterMinutes === switchMinutes &&
          counterSeconds === switchSeconds
        ) {
          if (onInterval) {
            const newSwitchTime = calculateSwitchTime(
              counterMinutes,
              counterSeconds,
              breakMinutes,
              breakSeconds
            );
            setSwitchMinutes(newSwitchTime.minutes);
            setSwitchSeconds(newSwitchTime.seconds);
            setOnInterval(false);
          } else if (!onInterval && rounds > 1) {
            const newSwitchTime = calculateSwitchTime(
              counterMinutes,
              counterSeconds,
              intervalMinutes,
              intervalSeconds
            );
            setSwitchMinutes(newSwitchTime.minutes);
            setSwitchSeconds(newSwitchTime.seconds);
            setRounds(rounds - 1);
            setOnInterval(true);
          }
        }
        if (counterSeconds > 0) {
          setCounterSeconds(counterSeconds - 1);
        }
        if (counterSeconds === 0) {
          if (counterMinutes === 0) {
            setRounds(rounds - 1);
            setIsFinished(true);
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
    counterMinutes,
    counterSeconds,
    isRunning,
    onInterval,
    rounds,
    switchSeconds,
    switchMinutes,
    breakMinutes,
    breakSeconds,
    intervalMinutes,
    intervalSeconds,
    isFinished,
  ]);

  return (
    <div>
      <div>
        {!isFinished ? (
          <h2>
            {onInterval ? (
              <Counter
                initialMinutes={intervalMinutes}
                initialSeconds={intervalSeconds}
                start={isRunning}
              >
                Interval Time:{' '}
              </Counter>
            ) : null}
            {!onInterval ? (
              <Counter
                initialMinutes={breakMinutes}
                initialSeconds={breakSeconds}
                start={isRunning}
              >
                Break Time:{' '}
              </Counter>
            ) : null}
          </h2>
        ) : (
          <h2>Done!</h2>
        )}
      </div>
      <Rounds rounds={rounds} />
      <h2>
        Total Time Left: {counterMinutes}:
        {counterSeconds < 10 ? '0' + counterSeconds : counterSeconds}
      </h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <br /> <br />
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <br /> <br />
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

export default Timer;
