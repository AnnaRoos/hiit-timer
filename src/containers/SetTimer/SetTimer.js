import React, { useState } from 'react';

import Input from '../../components/Input/Input';
import ShowTotalTime from '../../components/ShowTotalTime/ShowTotalTime';
import StartButton from '../../components/Buttons/StartButton';

import styles from './SetTimer.module.css';

import { calculateTotalTime } from '../../utils/CalculateTotalTime';

const SetTimer = (props) => {
  const [intervalMinutes, setIntervalMinutes] = useState(0);
  const [intervalSeconds, setIntervalSeconds] = useState(0);

  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);

  const [rounds, setRounds] = useState(1);

  const totalTime = calculateTotalTime(
    +intervalMinutes + +breakMinutes,
    +intervalSeconds + +breakSeconds,
    rounds
  );

  const data = {
    intervalMinutes: intervalMinutes,
    intervalSeconds: intervalSeconds,
    breakMinutes: breakMinutes,
    breakSeconds: breakSeconds,
    rounds: rounds,
    totalTime: totalTime,
  };

  return (
    <div>
      <p>Set your training time!</p>
      <h2 className={styles.headings}>Interval Time</h2>
      <Input
        label="Minutes: "
        id="intervalMinutes"
        inputType="minutes"
        value={intervalMinutes}
        changed={(event) => setIntervalMinutes(event.target.value)}
      />
      <Input
        label="Seconds: "
        id="intervalSeconds"
        inputType="seconds"
        value={intervalSeconds}
        changed={(event) => setIntervalSeconds(event.target.value)}
      />
      <h2 className={styles.headings}>Break Time</h2>
      <Input
        label="Minutes:"
        id="breakMinutes"
        inputType="minutes"
        value={breakMinutes}
        changed={(event) => setBreakMinutes(event.target.value)}
      />
      <Input
        label="Seconds:"
        id="breakSeconds"
        inputType="seconds"
        value={breakSeconds}
        changed={(event) => setBreakSeconds(event.target.value)}
      />
      <h2 className={styles.headings}>Rounds</h2>
      <Input
        label="Number:"
        id="rounds"
        inputType="rounds"
        value={rounds}
        changed={(event) => setRounds(event.target.value)}
      />
      <ShowTotalTime hours={totalTime.hours} minutes={totalTime.minutes} seconds={totalTime.seconds}>
        Total Training Time:{' '}
      </ShowTotalTime>
      <StartButton
        title="START!"
        clicked={() => props.history.push({ pathname: '/timer', state: data })}
      />
    </div>
  );
};

export default SetTimer;
