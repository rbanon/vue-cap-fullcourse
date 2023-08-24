<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola mundo</h1>
    <button @click="goToDaybook('Primary button')" class="btn btn-primary">
      Primary
    </button>
    <button @click="goToDaybook('Secondary button')" class="btn btn-secondary">
      Secondary
    </button>
    <button @click="goToDaybook('Success button')" class="btn btn-success">
      Success
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    goToDaybook(buttonName) {
      console.log(buttonName);
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
