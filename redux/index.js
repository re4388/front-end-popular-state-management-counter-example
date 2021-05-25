import { createStore } from 'redux';

/**
 * reduce, a pure function。
 * handle changing state based on action
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// storeAPI: { subscribe, dispatch, getState }。
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1

// original come from:
// https://chentsulin.github.io/redux/
