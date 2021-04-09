import React from 'react';

const Input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case 'minutes':
      inputElement = (
        <input
          type="number"
          id={props.id}
          name="minutes"
          min="0"
          max="60"
          onChange={props.changed}
        />
      );
      break;
    case 'seconds':
      inputElement = (
        <input
          type="number"
          id={props.id}
          name="seconds"
          min="0"
          max="60"
          onChange={props.changed}
        />
      );
      break;
    case 'rounds':
      inputElement = (
        <input
          type="number"
          id={props.id}
          name="rounds"
          min="1"
          max="10"
          onChange={props.changed}
        />
      );
      break;
    default:
      break;
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
