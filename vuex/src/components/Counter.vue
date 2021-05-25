<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>{{ $store.getters.counter }}</p>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    // we can use $store.commit to dispatch action
    // also can $store.getters to get state
    increase() {
      this.$store.commit('increment');
    },
    decrease() {
      this.$store.commit('decrement');
    },
  },
};
</script>
