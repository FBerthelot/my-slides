<template>
  <iframe
    class="video"
    width="560"
    height="315"
    :src="video"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {
  components: {},
  props: {
    video: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.video {
  width: 100%;
  margin: 3rem 0 2rem 0;
}
</style>
