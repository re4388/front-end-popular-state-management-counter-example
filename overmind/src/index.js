import { createOvermind } from 'overmind';
import { createHook, Provider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// global store setup
const store = createOvermind({
  state: {
    count: 0,
  },
  actions: {
    increaseCount({ state }) {
      state.count++;
    },
    decreaseCount({ state }) {
      state.count--;
    },
  },
});

// use create hook to create hook
const useApp = createHook();

function App() {
  // use overmind useApp hook to provide state and action in function component
  // state to get state, action to set state
  const { state, actions } = useApp();

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>increase</button>
    </div>
  );
}

ReactDOM.render(
  // use overmind provider the global state
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
