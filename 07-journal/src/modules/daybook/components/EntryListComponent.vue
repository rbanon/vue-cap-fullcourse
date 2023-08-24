<template>
  <div ckass="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entradas" />
    </div>
    <div class="entry-scrollarea px-2 pt-2">
      <EntryComponent v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryListComponent",
  components: {
    EntryComponent: defineAsyncComponent(() => import("./EntryComponent.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  background-color: #2c2c2c;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 104px);
  overflow-y: auto;
}
</style>
