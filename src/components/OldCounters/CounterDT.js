import { useCallback, useEffect, useState, useRef } from 'react';

const CounterDT = (props) => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(2 * 60 * 1000);

  let timer = useRef();

  const msToTime = (duration) => {
    let milliseconds = parseInt(duration % 1000);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(3, '0');

    return milliseconds;
  };

  const run = useCallback(() => {
    const diff = Date.now() - startTime;

    let remaining = duration - diff;

    if (remaining < 0) {
      remaining = 0;
    }

    let newTime = msToTime(remaining);

    setTime(newTime);

    if (remaining === 0) {
      return () => clearInterval(timer);
    }
  }, [duration, startTime, timer]);

  const start = useCallback(() => {
      setStartTime(Date.now());
      timer.current = setInterval(() => run(), 10);
    
  }, [run]);

  useEffect(() => {
    if (props.isRunning) {
      start();
    }

    return () => clearInterval(timer);
  }, [start,props.isRunning]);

  return (
    <div>
      {time}: {time.seconds}: {time.milliseconds}:
    </div>
  );
};

export default CounterDT;
