import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { render } from 'react-dom';

class AppState {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.counter++;
  };

  decrease = () => {
    this.counter++;
  };
}

const TimerView = observer(({ appState }) => (
  <div>
    <p>{appState.counter}</p>
    <button onClick={appState.increase}>increase</button>
    <button onClick={appState.decrease}>decrease</button>
  </div>
));

render(
  <div>
    <TimerView appState={new AppState()} />
  </div>,
  document.getElementById('root')
);
