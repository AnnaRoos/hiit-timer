import React, { useEffect, useState } from 'react';

import Counter from '../Counter/Counter';

import styles from './ProgressBar.module.css';

const ProgressBarPurple = (props) => {
  const [circleTime, setCircleTime] = useState([0, 283]);
  const [circleColor, setCircleColor] = useState(styles.green);

  const fullDashArray = 283;

  useEffect(() => {
    setCircleTime([283, 283]);
    if (props.isRunning) {
      let timeLimit = props.timeLimit;
      let timeLeft = props.timeLeft + 1000;
      let rawTimeFraction = timeLeft / timeLimit;
      let timeFraction =
        rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
      const newCircleDasharray = [
        (timeFraction * fullDashArray).toFixed(0),
        283,
      ];
      if (timeFraction < 0.33) {
        setCircleColor(styles.pink);
      } else if (timeFraction < 0.66) {
        setCircleColor(styles.yellow);
      } else {
        setCircleColor(styles.green)
      }
      setCircleTime(newCircleDasharray);
    }
  }, [props.timeLeft, props.isRunning, props.timeLimit]);

  let timer = (
    <path
      id="base-timer-path-remaining"
      strokeDasharray={[circleTime[0], circleTime[1]].join(' ').toString()}
      className={[styles.baseTimerPathRemaining, circleColor].join(' ')}
      d="
                   M 50, 50
                   m -45, 0
                   a 45,45 0 1,0 90,0
                   a 45,45 0 1,0 -90,0
                   "
    ></path>
  );

  let timeLabel = (
    <span id="base-timer-label" className={styles.baseTimerLabel}>
      <span className={styles.title}>{props.title}</span>
      <Counter minutes={props.time.minutes} seconds={props.time.seconds} />
    </span>
  );

  let finishedMessage = (<span className={styles.baseTimerLabel}>DONE!</span>);

  return (
    <div className={styles.baseTimer}>
      <svg
        className={styles.baseTimerSvg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={styles.baseTimerCircle}>
          <circle
            className={styles.baseTimerPathElapsed}
            cx="50"
            cy="50"
            r="45"
          ></circle>
          {timer}
        </g>
      </svg>
      {!props.isFinished ? timeLabel : finishedMessage}
    </div>
  );
};

export default ProgressBarPurple;
