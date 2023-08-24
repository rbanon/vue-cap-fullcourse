<template>
  <div
    class="entry-container mb-2 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Título-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">23</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">2023, miércoles</span>
    </div>

    <div class="entry-description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae
      magni distinctio sint possimus corrupti nemo excepturi rerum cumque
      delectus eligendi odio ab, laboriosam nesciunt iure pariatur veniam.
      Temporibus, recusandae.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>
<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in-out;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
