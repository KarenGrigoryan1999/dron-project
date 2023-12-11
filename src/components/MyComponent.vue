<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>Вы нажали на кнопку: {{ clickCount }} раз</p>
    <button @click="onButtonClick">Нажми на меня</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    title: String,
  },
  methods: {
    onButtonClick() {
      this.$store.commit("increment");
    },
  },
  computed: {
    clickCount() {
      return this.$store.state.myCounterState;
    },
  },
};
</script>

<style scoped>
.container {
  width: fit-content;
  margin: 0 auto;
  border: 2px solid green;
  border-radius: 10px;
  padding: 10px;
}
</style>
