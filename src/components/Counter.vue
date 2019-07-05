<template>
  <div>
    <p>Counter value is {{ counter }}</p>
    <p>Double coutner is {{ counterTwo }}</p>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    counterTwo() {
      return this.$store.getters.doubleCount;
    }
  },
  methods: {
    increment() {
      // this.$store.state.counter++;

      // instead of modifying the state directly we commit a mutation in the store to take care of this
      // this.$store.commit("increment");

      // we use actions in our comonents which commit the mutation to modify our state
      this.$store.dispatch("increment");
    },
    decrement() {
      // this.$store.state.counter--;

      // instead of modifying the state directly we commit a mutation in the store to take care of this
      // this.$store.commit("decrement");

      this.$store.dispatch("decrement");
    }
  }
};
</script>
