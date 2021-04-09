import React from 'react';
import { useState, useEffect } from 'react';

const Counter = (props) => {
  const { initialMinutes = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (props.start) {
        let myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => {
          clearInterval(myInterval);
        };
    }
  
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h2>
          {props.children}{' '}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
    </div>
  );
};

export default Counter;
