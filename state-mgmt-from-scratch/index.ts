// this code comes from https://egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe

type Reducer = {
  (state: number, action: any): number;
  (arg0: any, arg1: any): any;
};

const createStore = (reducer: Reducer) => {
  let state: any;
  let listeners: Function[] = [];

  // use getState to get state
  const getState = () => state;

  // use dispatch to dispatch actions
  // and use passed in reducer to transform to another state
  const setAction = (action: {}) => {
    state = reducer(state, action);
    listeners.forEach((listeners) => listeners());
  };

  const subscribe = (listener: any) => {
    // push to listeners to track
    listeners.push(listener);
    // return a fn to unsubscribe
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  setAction({}); // init state

  return { getState, setAction, subscribe };
};

type Action = { type: any };

function counter(state = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// we passed a reducer and get a store function
let store = createStore(counter);

// use subscribe to listen to store changes and invoke a callback
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// use set action to change state
store.setAction({ type: 'INCREMENT' }); // 1
store.setAction({ type: 'INCREMENT' }); // 2
store.setAction({ type: 'DECREMENT' }); // 1
unsubscribe();
store.setAction({ type: 'DECREMENT' }); // nothing here
