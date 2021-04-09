import React, { useState } from 'react';

import Input from '../../components/Input/Input';
import ShowTotalTime from '../../components/ShowTotalTime/ShowTotalTime';
import { calculateTotalTime } from '../../utils/CalculateTotalTime';

const SetTimer = (props) => {
  const [intervalMinutes, setIntervalMinutes] = useState(0);
  const [intervalSeconds, setIntervalSeconds] = useState(0);

  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);

  const [rounds, setRounds] = useState(1);

  const data = {
    intervalMinutes: intervalMinutes,
    intervalSeconds: intervalSeconds,
    breakMinutes: breakMinutes,
    breakSeconds: breakSeconds,
    rounds: rounds,
  };

  const time = calculateTotalTime(
    +intervalMinutes + +breakMinutes,
    +intervalSeconds + +breakSeconds,
    rounds
  );

  return (
    <div>
      <h2>Interval Time:</h2>
      <Input
        label="Min"
        id="intervalMinutes"
        inputType="minutes"
        value={intervalMinutes}
        changed={(event) => setIntervalMinutes(event.target.value)}
      />
      <Input
        label="Sec"
        id="intervalSeconds"
        inputType="seconds"
        value={intervalSeconds}
        changed={(event) => setIntervalSeconds(event.target.value)}
      />
      <h2>Break Time:</h2>
      <Input
        label="Min"
        id="breakMinutes"
        inputType="minutes"
        value={breakMinutes}
        changed={(event) => setBreakMinutes(event.target.value)}
      />
      <Input
        label="Sec"
        id="breakSeconds"
        inputType="seconds"
        value={breakSeconds}
        changed={(event) => setBreakSeconds(event.target.value)}
      />
      <h2>Rounds:</h2>
      <Input
        label="No"
        id="rounds"
        inputType="rounds"
        value={rounds}
        changed={(event) => setRounds(event.target.value)}
      />
      <ShowTotalTime
        minutes={time.minutes}
        seconds={time.seconds}
      >Total Training Time: </ShowTotalTime>
      <button
        onClick={() => props.history.push({ pathname: '/timer', state: data })}
      >
        START!
      </button>
    </div>
  );
};

export default SetTimer;
