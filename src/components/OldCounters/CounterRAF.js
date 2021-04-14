import React, { useState } from 'react';
import useAnimationFrame from '../../hooks/useAnimationFrame/useAnimationFrame';
import { msToTime } from '../../utils/MillisecondsToTime';

const CounterRAF = (props) => {
  const [count, setCount] = useState(12000);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const updateTime = () => {
    const newTime = msToTime(count);
    setTime(newTime);
  };

  useAnimationFrame((deltaTime) => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount((prevCount) => prevCount - deltaTime * 0.001);
  }, props.isRunning);

  return (
    <div>
      Counter: {Math.floor(count)}
      Seconds: {time.seconds}
      Minutes: {time.minutes}
    </div>
  );
};

export default CounterRAF;
