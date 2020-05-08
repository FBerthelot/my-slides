<template>
  <div>
    <div
      class="alternatives"
      v-bind:class="{ 'alternatives--displayed': displayAlternatives }"
      :aria-hidden="!displayAlternatives"
    >
      <slot></slot>
    </div>

    <MoreButton
      class="card__alternative-button"
      v-bind:class="{ 'card__alternative-button--open': displayAlternatives }"
      role="button"
      @click.stop.native="toggleDisplayAlternatives"
    />
  </div>
</template>

<script>
import { Typography } from '../../typography'
import { MoreButton } from '../../button'
export default {
  components: {
    Typography,
    MoreButton,
  },
  data: () => ({
    displayAlternatives: false,
  }),
  methods: {
    toggleDisplayAlternatives() {
      this.displayAlternatives = !this.displayAlternatives
    },
  },
}
</script>

<style>
.card__alternative-button {
  position: absolute;
  bottom: -1rem;
  right: calc(50% - 1rem);
}

.card__alternative-button--open {
  transform: rotateZ(180deg);
}

.alternatives {
  max-height: 0;
  transition: all 0.5s ease-out;
  overflow: hidden;
}
.alternatives--displayed {
  max-height: 40rem;
}

.alternatives__element {
  display: flex;
}
</style>
