import React from 'react';
import styles from './ShowTotalTime.module.css';

const ShowTotalTime = (props) => {
  return (
    <div>
      <h2 className={styles.title}> {props.children}</h2>
      <h2 className={styles.time}>
        {props.minutes < 10 ? '0' + props.minutes : props.minutes}:
        {props.seconds < 10 ? '0' + props.seconds : props.seconds}
      </h2>
    </div>
  );
};

export default ShowTotalTime;
