<template>
  <Typography :component="component" class="button">
    &#9660;
  </Typography>
</template>

<script>
import Typography from '../typography/typography.vue'

export default {
  components: {
    Typography,
  },
  props: {
    component: {
      type: String,
      required: false,
      default: 'button',
    },
  },
}
</script>

<style scoped>
.button {
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  border: none;

  background-color: var(--color-medium);

  cursor: pointer;
  transition: all 1s;
}

.button:hover {
  transform: translateY(0.2rem) scale(1.2);
}
</style>
