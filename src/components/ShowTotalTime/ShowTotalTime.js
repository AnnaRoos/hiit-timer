import React from 'react';
import styles from './ShowTotalTime.module.css';

const ShowTotalTime = (props) => {
  const hours = props.hours ? (props.hours < 10 ? '0' + props.hours + ':' : props.hours + ':') : null;
  return (
    <div>
      <h2 className={styles.title}> {props.children}</h2>
      <h2 className={styles.time}>
        {hours}
        {props.minutes < 10 ? '0' + props.minutes : props.minutes}:
        {props.seconds < 10 ? '0' + props.seconds : props.seconds}
      </h2>
    </div>
  );
};

export default ShowTotalTime;
