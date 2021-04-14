import React from 'react';
import styles from './StartButton.module.css';

const StartButton = props => {
  return (
    <button className={styles.startButton} onClick={props.clicked}>
      {props.title}
    </button>
  );
}

export default StartButton;