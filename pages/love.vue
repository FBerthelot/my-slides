<template>
  <main id="love-page">
    <h1 class="title"><LoveU class="loveu" /></h1>

    <div class="img-container">
      <img src="/assets/quinn-draw.jpg" alt="Draw of Miss Quinn on a ball" />
      <img src="/assets/joker-draw.jpg" alt="Draw of Joker with flowers" />
    </div>
  </main>
</template>

<script>
import LoveU from '~/components/loveu.vue'
export default {
  components: {
    LoveU,
  },
}
</script>

<style scoped>
#love-page {
  height: 100%;
}

.title {
  height: 5rem;
  margin: 1rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loveu {
  height: 100%;
}

.img-container {
  height: calc(100% - 5rem);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
}

.img-container img {
  max-width: 48%;
  max-height: 100%;
}
</style>
