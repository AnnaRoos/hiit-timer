import React, { useState } from 'react';
import usePreciseTimer from '../../hooks/use/usePreciseTimer';

const CounterPT = (props) => {
  const [count, setCount] = useState(1000);



  return <div>Seconds: {count}</div>;
};

export default CounterPT;
