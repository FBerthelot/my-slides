<template>
  <Typography
    class="card__title"
    :component="component"
    variant="title--small"
    color="light"
  >
    <slot />
  </Typography>
</template>

<script>
import { Typography } from '../../typography'
export default {
  components: {
    Typography,
  },
  props: {
    component: {
      type: String,
      required: false,
      default: 'h2',
    },
  },
}
</script>

<style scoped>
.card__title {
  transition: all 0.5s ease-out;
  margin-bottom: 1rem;
}
</style>
