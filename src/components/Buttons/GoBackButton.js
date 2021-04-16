import React from 'react';
import styles from './GoBackButton.module.css';

const GoBackButton = (props) => {
  return (
    <button
      className={styles.goBackButton}
      onClick={props.clicked}
    >
      {props.title}
    </button>
  );
};

export default GoBackButton;
