import React from 'react';

const Counter = (props) => {
  let hours = null;

  if (props.hours > 0) {
    hours = props.hours < 10 ? '0' + props.hours + ':' : props.hours + ':';
  }

  return (
    <div>
      {props.title}: {hours}
      {props.minutes < 10 ? '0' + props.minutes + ':' : props.minutes + ':'}
      {props.seconds < 10 ? '0' + props.seconds : props.seconds}
    </div>
  );
};

export default Counter;
