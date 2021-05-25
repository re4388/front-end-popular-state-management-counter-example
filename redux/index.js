import { createStore } from 'redux';

/**
 * 這是一個 reducer，一個有 (state, action) => state signature 的 pure function。
 * 它描述一個 action 如何把 state 轉換成下一個 state。
 *
 * state 的形狀取決於你：它可以是基本類型、一個陣列、一個物件，
 * 或甚至是一個 Immutable.js 資料結構。唯一重要的部分是你
 * 不應該改變 state 物件，而是當 state 變化時回傳一個新的物件。
 *
 * 在這個範例中，我們使用一個 `switch` 陳述句和字串，不過你可以使用一個 helper，
 * 來遵照一個不同的慣例 (例如 function maps)，如果它對你的專案有意義。
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

// 建立一個 Redux store 來掌管你的應用程式的 state。
// 它的 API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 你可以手動的去訂閱更新，或是使用跟你的 view layer 之間的綁定。
// 通常你會使用一個 view 綁定 library（例如：React Redux），而不是直接 subscribe()。
// 然而也可以很方便的將目前狀態儲存在 localStorage。
store.subscribe(() => console.log(store.getState()));

// 變更內部 state 的唯一方法是 dispatch 一個 action。
// actions 可以被 serialized、logged 或是儲存並在之後重播。
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1

// https://chentsulin.github.io/redux/
