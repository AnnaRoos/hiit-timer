import React, { useState, useLayoutEffect, useEffect} from "react";
import { msToTime } from '../../utils/MillisecondsToTime';


const CounterULE = props => {
  const [counter, setCounter] = useState(10000);
  const [time, setTime] = useState({minutes: 0, seconds: 0})

  useLayoutEffect(() => {
    if (props.isRunning) {
      let timerId;


      const f = () => {
        setCounter((x) => (x - 0.1) % 60);
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);

      return () => cancelAnimationFrame(timerId);
    }
  }, [props.isRunning]);



    



  return (
    <p>
      Counter: {counter}
      Minutes: {time.minutes}
      Seconds:{time.seconds}
    </p>
  );
}

export default CounterULE;