import React from 'react';

const ShowTotalTime = (props) => {
  return (
    <h2>
      {props.children} {props.minutes}:
      {props.seconds < 10 ? '0' + props.seconds : props.seconds}
    </h2>
  );
};

export default ShowTotalTime;
