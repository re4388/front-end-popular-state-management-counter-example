import { assign, interpret, Machine } from 'xstate';
import './styles.css';

const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

const counterMachine = Machine({
  // init state
  initial: 'active',

  // store global state in context
  context: {
    count: 5,
  },
  states: {
    // we only have to state here, active state
    active: {
      on: {
        // listen to two action/event
        // inc to increment, dec to decrement
        INC: { actions: assign({ count: increment }) },
        DEC: { actions: assign({ count: decrement }) },
      },
    },
  },
});

const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', (e) => {
  console.log(e.target.checked);
  e.target.checked ? counterService.send('INC') : counterService.send('DEC');
  // counterService.send("INC");
});

const counterService = interpret(counterMachine)
  .onTransition((state) => console.log(state.context.count))
  .start();
// => 0

counterService.send('INC');
// => 1

counterService.send('INC');
// => 2

counterService.send('DEC');
// => 1
