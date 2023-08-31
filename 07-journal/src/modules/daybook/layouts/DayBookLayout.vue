<template>
  <NavbarComponent />

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Espere por favor...
      <h3 class="mt-2">
        <i class="fa fa-spinner fa-spin"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-4">
      <EntryListComponent />
    </div>
    <div class="col">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import("../components/NavbarComponent.vue")
    ),
    EntryListComponent: defineAsyncComponent(() =>
      import("../components/EntryListComponent.vue")
    ),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
  created() {
    this.loadEntries();
  },
};
</script>
