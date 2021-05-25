import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// create store
export const store = new Vuex.Store({
  state: {
    counter: 0,
  },

  // like the reducer logic
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
  },

  // getter, like selector or derived state
  getters: {
    counter: (state) => state.counter,
  },
});
