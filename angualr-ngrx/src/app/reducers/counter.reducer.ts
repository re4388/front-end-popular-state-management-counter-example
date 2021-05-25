import { CounterActions, CounterActionTypes } from '../actions/counter.actions';

export const initialState: number = 0;

// just like the reducer in redux
// the reducer take the state and action
// and will based on action type to perform change state
export function reducer(state = initialState, action: CounterActions): number {
  console.log('counter reducer executes');
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;
    case CounterActionTypes.Decrement:
      return state - 1;
    case CounterActionTypes.Reset:
      return 0;
    default:
      return state;
  }
}
