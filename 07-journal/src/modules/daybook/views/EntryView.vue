<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">23</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-5">2023, miércoles</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt" />
      </button>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload" />
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <FabComponent icon="fa-save" />

  <img
    src="https://media.traveler.es/photos/613778b8ccdecaa3de671dd3/master/w_320%2Cc_limit/34402.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/FabComponent.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
