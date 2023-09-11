<template>
  <h1>Counter View</h1>
  <h3>{{ counter }}</h3>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "CounterView",
  props: {},
  emits: [],
  setup() {
    const { counter, increase, decrease } = useCounter(25);

    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style scoped></style>
