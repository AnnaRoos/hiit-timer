import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import SetTimer from './containers/SetTimer/SetTimer';
import Timer from './containers/Timer/Timer';

function App() {
  return (
    <div>
      <h1>MY HIIT TIMER</h1>
      <Switch>
        <Route path="/timer" component={Timer} />
        <Route path="/" exact component={SetTimer} />
      </Switch>
    </div>
  );
}

export default App;
