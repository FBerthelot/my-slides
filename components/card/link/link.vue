<template>
  <Typography class="card__link" :component="component" variant="meta-info">
    <slot></slot>
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
      default: 'a',
    },
  },
}
</script>

<style scoped>
.card__link {
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
