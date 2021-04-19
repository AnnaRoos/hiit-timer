import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SetTimer from './containers/SetTimer/SetTimer';
import Timer from './containers/Timer/Timer';

import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <h1 className={styles.heading}>HIIT TIMER</h1>
      </header>
      <Switch>
        <Route path="/timer" component={Timer} />
        <Route path="/" exact component={SetTimer} />
      </Switch>
    </>
  );
}

export default App;
