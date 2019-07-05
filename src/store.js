import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 2
  },
  getters: {
    doubleCount: state => {
      return state.counter * 2;
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    // mutations are synchronous, which means they will run right away. We can use asynchronus code by using actions
    // Actions are used to commit mutations on the state
    increment: context => {
      context.commit("increment");
    },
    decrement: context => {
      context.commit("decrement");
    }
  }
});
