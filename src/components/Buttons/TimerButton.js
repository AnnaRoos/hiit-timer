import React from 'react';
import styles from './TimerButton.module.css';

const TimerButton = (props) => {
  let color;
  if (props.color === 'green') {
    color = styles.green;
  } else if (props.color === 'yellow') {
    color = styles.yellow;
  } else if (props.color === 'pink') {
    color = styles.pink;
  }

  return (
    <button
      className={[styles.timerButton, color].join(' ')}
      onClick={props.clicked}
    >
      {props.title}
    </button>
  );
};

export default TimerButton;
