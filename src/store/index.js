import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      myCounterState: 0,
    };
  },
  mutations: {
    increment(state) {
      state.myCounterState += 1;
    },
  },
});
