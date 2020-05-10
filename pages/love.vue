<template>
  <main id="love-page">
    <h1 class="title"><LoveU class="loveu" /></h1>

    <div class="img-container">
      <a
        href="https://www.linkedin.com/in/agn%C3%A8s-vall%C3%A9e-856888105/"
        target="_blank"
        rel="noreferrer"
        tabindex="0"
      >
        <img src="/assets/quinn-draw.jpg" alt="Draw of Miss Quinn on a ball" />
      </a>
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
  head() {
    return {
      title: "Florent Berthelot - Ma pacsé, je l'aime!",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Sur cette page, vous trouverez des dessins de ma bien aimée',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Florent Berthelot - Ma pacsé, je l'aime!",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: "Florent Berthelot - Ma pacsé, je l'aime!",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Sur cette page, vous trouverez des dessins de ma bien aimée',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Sur cette page, vous trouverez des dessins de ma bien aimée',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://berthelot.io/love',
        },
      ],
    }
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

.img-container a {
  display: block;
  max-width: 48%;
  height: 100%;
}

.img-container a img {
  max-width: 100%;
}

.img-container img {
  width: auto;
  max-width: 48%;
  height: 100%;
}
</style>
