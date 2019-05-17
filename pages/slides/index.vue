<template>
  <main>
    <nuxt-link
      class="back-button"
      to="/"
    >
      &lt;-
    </nuxt-link>

    <h1>Mes slides et vidéos</h1>

    <div class="slide-container">
      <article
        v-for="slide in slides"
        :key="slide.title"
      >
        <nuxt-link
          v-if="!slide.external"
          :to="slide.url"
        >
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </nuxt-link>
        <a
          v-else
          :href="slide.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </a>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: 'Tester des composants',
          description:
            'Comment faire des tests maintenable en TDD et même en BDD avec Angular ? La réponse dans cette présentation !',
          url: 'https://slides.com/florentberthelot/test-composants-web',
          external: true
        },
        {
          title: 'JavaScript',
          description:
          'La presentation sur l\'ensemble des nouveautées javascript et repose les bases du langage.',
          url: '/slides/javascript.html',
          external: true
        },
        {
          title: 'Les modules en JavaScript',
          description:
            'Laissez-moi vous raconter l\' histoire des modules en Javascript.',
          url: '/slides/es-modules.html',
          external: true
        },
        {
          title: 'Redux & co',
          description:
            'Mais c\'est quoi redux ? Pourquoi Angular utilise le pattern MVC ? Redux répond à quel problème ?',
          url:
            'https://slides.com/florentberthelot/what-is-redux-and-all-redux-like',
          external: true
        },
        {
          title: 'Les framework JavaScript',
          description:
            'Slide issue d\'une matinal sur les Framework JavaScrip.t',
          url:
            'https://docs.google.com/presentation/d/1l7pXU3k2dDEo1MOleZF22hsWQlYbUuBiSjhzLNJaxpE/edit#slide=id.g1e43053bed_0_176',
          external: true
        },
        {
          title: 'La toile en VR - slides',
          description:
            'Présentation à Devoxx sur le Web VR et plus particulièrement A-Frame et React-VR.',
          url: 'https://fberthelot.github.io/la_toile_en_vr/slides/#/',
          external: true
        },
        {
          title: 'La toile en VR - Video youtube',
          description:
            'Vidéo de la présentation à Devoxx sur le Web VR et plus particulièrement A-Frame et React-VR.',
          url: 'https://www.youtube.com/watch?v=JLhugL7Hvgc',
          external: true
        },
        {
          title: 'Réconcilions Web & Audio',
          description:
            'C\'est l\'histoire de deux mec qui veulent faire une pédale de distortion en Web pour réconcilier les surfeurs au bruit.',
          url:
            'https://slides.com/benjaminplouzennec/reconcilions-web-et-audio#/7/4',
          external: true
        },
        {
          title: 'Headless CMS',
          description: 'Retour d\'expérience sur l\'utilisation des headless CMS',
          url: 'https://slides.com/florentberthelot/headless-cms',
          external: true
        },
        {
          title: 'Package ? Tout compris !',
          description:
            'À l\'époque Yarn et NPM se battait, bower survivait encore. Mais qu\'est ce c\'est un bon package manager ? - Talk fait au snowcamp.',
          url:
            'https://docs.google.com/presentation/d/1JuNunEmZk8zQf2lJccUP1YfJYRPWzHxgkhD9GQaQIFw',
          external: true
        },
        {
          title: 'GraphQL, côté serveur ça donne quoi ?',
          description:
            'GraphQL est au top du Hype car c\'est fun a utiliser côté client. Oui mais voilà... côté serveur quels sont les implication ?',
          url: '/slides/graphql-server-side.html',
          external: true
        },
        {
          title: 'Tribu Web Zenika - Soirée Progressive Web App',
          description:
            'La Tribu Web de Zenika vous propose une soirée autour des progressive web app.',
          url: '/slides/tribu-web-pwa.html',
          external: true
        },
        {
          title: 'Tribu Web Zenika - Soirée Web Worker',
          description:
            'La Tribu Web de Zenika vous propose une soirée autour des web worker.',
          url: '/slides/tribu-web-web-worker.html',
          external: true
        },
        {
          title: 'Tribu Web Zenika - TP React',
          description: 'Ma première présentation pour la Tribu Web de Zenika.',
          url: '/slides/tribu-web-react.html',
          external: true
        }
      ]
    };
  },
  head() {
    return {
      title:
        'Mes slides et vidéos - Florent Berthelot - Dévelopeur et formateur Web',
      meta: [
        {
          hid: 'description',
          name:
            'Un regroupement de liens vers mes slides de présentation et mes vidéos en conférence.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 5vh;
  left: 5vh;
  font-size: 1.3rem;
}

main {
  background: linear-gradient(90deg, #4b6cb7 0%, #550a55 100%);
  min-height: 100vh;
  width: 100vw;
}

h1 {
  height: 5vh;
  font-size: 1.5rem;
  text-align: center;
  padding: 5vh;
}

a {
  text-decoration: none;
  color: #eee;
}

.slide-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 10px;
}

@media (max-width: 600px) {
  .slide-container {
    grid-template-columns: 1fr;
  }
}

article {
  box-shadow: 2px 2px #550a55;
  background-color: #bb4316;
  margin: 15px 10px;
  color: white;
  border-radius: 5px;
  transition: all 0.5s ease;
}
article:hover {
  transform: scale(1.05);
}

article a {
  display: block;
  padding: 5vh 5vw;
}

article h2 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

article p {
  font-style: italic;
  font-size: 0.9rem;
}
</style>
