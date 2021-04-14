import React from 'react';

const Counter = (props) => {
  const minutes =
    props.minutes > 0
      ? props.minutes < 10
        ? '0' + props.minutes + ':'
        : props.minutes + ':'
      : null;

  return (
    <div>
      {props.title}: {minutes}
      {props.seconds < 10 ? '0' + props.seconds : props.seconds}
    </div>
  );
};

export default Counter;
