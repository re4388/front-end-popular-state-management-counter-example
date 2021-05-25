import React from 'react';
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// use atom to setup the state
const countState = atom({
  key: 'countState',
  default: 0,
});

// use selector to get the "derived form" of the state
const countNextState = selector({
  key: 'counterNextState',
  get: ({ get }) => {
    return get(countState) + 100;
  },
});

const Counter = () => {
  // also provide the useRecoilState hook to let
  // use to get state and set state
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
};

//This component shares the same atom making the count state global or shareble
const CounterInfo = () => {
  // useRecoilValue get selector state
  const count = useRecoilValue(countNextState);
  return <p>the number add 100 is {count}</p>;
};

// also need to use RecoilRoot to wrap the app
export default function App() {
  return (
    <RecoilRoot>
      <h1>Recoil counter</h1>
      <Counter />
      <CounterInfo />
    </RecoilRoot>
  );
}
