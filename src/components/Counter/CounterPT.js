import React, { useState } from 'react';
import usePreciseTimer from '../../hooks/usePreciseTimer/usePreciseTimer';

const CounterPT = (props) => {
  const [count, setCount] = useState(1000);

  const updateTime = (timeDelay) => {
    setCount(count => count - (1 + timeDelay));
  }

  usePreciseTimer(updateTime, 1000, props.isRunning);

  return <div>Seconds: {count}</div>;
};

export default CounterPT;
