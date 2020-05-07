<template>
  <nuxt />
</template>

<script>
import '~/assets/reset.css'
import '~/components/colors/colors.css'
import '~/components/typography/typography.css'

export default {}
</script>

<style>
html {
  font-size: 16px;
}
body {
  background-color: var(--color-black);
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
</style>
