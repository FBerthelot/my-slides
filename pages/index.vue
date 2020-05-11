<template>
  <div
    class="container"
    :class="{ 'container__explision-ended': !videoIsRunning }"
  >
    <video
      autoplay
      muted
      class="explosion"
      :class="{ explosion__hidden: !videoIsRunning }"
      @ended="explosionEnd()"
    >
      <source src="/assets/explosion.mp4" type="video/mp4" />
    </video>

    <header class="header">
      <div class="header--1-level">
        <nuxt-link to="/love" class="myPic"><Logo :face="0" /></nuxt-link>
        <Typography component="h1" variant="title">
          Florent Berthelot
        </Typography>
        <nuxt-link to="/love" class="avatar"><Logo :face="1" /></nuxt-link>
      </div>

      <Typography class="header--tagline" component="h2" variant="title--small">
        <!--Design system and well-tested programs evangelist-->
        Prêcheur des Design System et des programmes bien testés
      </Typography>
    </header>

    <main
      :class="{ 'main-content__visible': !videoIsRunning }"
      class="main-content"
    >
      <nav class="main-links" v-if="!videoIsRunning">
        <ul>
          <li>
            <nuxt-link to="/subjects/articles">
              <GrenadeButton component="div">
                Articles
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/courses">
              <GrenadeButton :throwIn="200" component="div">
                Cours
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/talks">
              <GrenadeButton :throwIn="550" component="div">
                Talks
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/projects">
              <GrenadeButton component="div" :throwIn="300">
                Projets
              </GrenadeButton>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <Card class="presentation">
        <Typography>
          Je suis passionné du Web et des technologies qui gravitent autour.
          J'aime le W3C, le TC39 (quand il ne smoosh pas devant moi), le WhatWG,
          les frameworks JS (React, Vue.js, Node.js, Angular, ...) et la
          vanille.
          <br /><br />
          Transmettre ma passion pour l'artisanat web occupe une part importante
          de mon travail de développeur (meetups, formations, conférences,
          encadrement de stagiaires).
          <br /><br />
          Vive le web, Vive le JS et Vive l'artisanat!
        </Typography>
      </Card>
    </main>
    <Footer class="footer" :class="{ footer__visible: !videoIsRunning }" />
  </div>
</template>

<script>
import { GrenadeButton } from '~/components/button'
import { Logo } from '~/components/logo'
import { Card } from '~/components/card'
import Footer from '~/components/footer'
import { Typography } from '~/components/typography'

export default {
  components: {
    GrenadeButton,
    Typography,
    Logo,
    Card,
    Footer,
  },
  data() {
    return {
      videoIsRunning: true,
    }
  },
  methods: {
    explosionEnd() {
      this.videoIsRunning = false
    },
  },
  head() {
    return {
      title:
        'Florent Berthelot - Prêcheur des Design System et des programmes bien testés',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Mon site où tu retrouvera mes articles, supports de cours, conférences, ...',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'Florent Berthelot - Prêcheur des Design System et des programmes bien testé',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Florent Berthelot - Prêcheur des Design System et des programmes bien testé',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Mon site où tu retrouvera mes articles, supports de cours, conférences, ...',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Mon site où tu retrouvera mes articles, supports de cours, conférences, ...',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: black;
  transition: background 2s ease;
  overflow-y: hidden;
}
.container__explision-ended {
  background-color: var(--color-black);
}
.explosion {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
.explosion__hidden {
  display: none;
}

.header {
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header--1-level {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 1rem 20%;
  opacity: 0;
  transform: scale(0);
  text-align: center;
  animation: headerAppear 3s linear 1s 1 forwards;
}

.header--tagline {
  text-align: center;
  opacity: 0;
  transform: scale(0);
  animation: taglineAppear 3s linear 5s 1 forwards;
}

.main-content {
  height: calc(70% - 5rem - 1px);
  padding: 1rem;
  box-sizing: border-box;
}

.presentation {
  width: 40%;
  margin: 3rem auto;
  transition: all 3s ease;
  opacity: 0;
}
.main-content__visible .presentation {
  opacity: 1;
}

.main-links {
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
}
.main-links ul {
  width: 60%;
  margin: 0 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.main-links ul a {
  text-decoration: none;
  display: block;
  margin: 0 1px;
}
.main-links ul a:focus {
  outline: none;
}

.footer {
  opacity: 0;
  transform: translateY(100%);
  transition: all 4s ease;
}

.footer__visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes headerAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes taglineAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
  .header--1-level {
    width: 90%;
    margin: 1rem 5%;
  }
}

@media screen and (max-width: 850px) {
  .container {
    overflow-y: auto;
  }
  .header {
    height: auto;
  }
  .header--1-level {
    width: 100%;
    margin: 0;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    flex-direction: column;
  }
  .header--1-level .avatar {
    display: none;
  }

  .header--tagline {
    margin: 0 3rem;
    text-align: center;
  }

  .main-content {
    height: auto;
    margin-top: 1rem;
  }
  .presentation {
    width: 90%;
  }

  .main-links {
    margin-top: 1rem;
  }

  .main-links ul {
    flex-direction: column;
  }

  .main-links ul a {
    margin: 1rem;
  }
}
</style>
