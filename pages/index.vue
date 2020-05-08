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
        <nuxt-link to="/love"><Logo :face="0" /></nuxt-link>
        <Typography component="h1" variant="title">
          Florent Berthelot
        </Typography>
        <nuxt-link to="/love"><Logo :face="1" /></nuxt-link>
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
      <div class="main-content--mid-section">
        <ul class="social-network social-network__left">
          <li>
            <Typography
              component="a"
              target="_blank"
              rel="noopener"
              href="https://twitter.com/berthel350"
            >
              Twitter
            </Typography>
          </li>
          <li>
            <Typography
              component="a"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/florent-berthelot-a2678861/"
            >
              Linkedin
            </Typography>
          </li>
        </ul>

        <Card class="presentation">
          <Typography>
            Je suis passionné du Web et des technologies qui gravitent autour.
            J'aime le W3C, le TC39 (quand il ne smoosh pas devant moi), le
            WhatWG, les frameworks JS (React, Vue.js, Node.js, Angular, ...) et
            la vanille.
            <br /><br />
            Transmettre ma passion pour l'artisanat web occupe une part
            importante de mon travail de développeur (meetups, formations,
            conférences, encadrement de stagiaires).
            <br /><br />
            Vive le web, Vive le JS et Vive l'artisanat!
          </Typography>
        </Card>

        <ul class="social-network social-network__right">
          <li>
            <Typography
              component="a"
              target="_blank"
              rel="noopener"
              href="https://github.com/FBerthelot"
            >
              Github
            </Typography>
          </li>

          <li>
            <Typography component="a" href="mailto:florent@berthelot.io">
              Mail
            </Typography>
          </li>
        </ul>
      </div>

      <nav class="main-links" v-if="!videoIsRunning">
        <ul>
          <li>
            <nuxt-link to="/subjects/articles">
              <GrenadeButton :throwIn="400" component="div">
                Articles
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/courses">
              <GrenadeButton :throwIn="600" component="div">
                Cours
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/talks">
              <GrenadeButton :throwIn="1400" component="div">
                Talks
              </GrenadeButton>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/subjects/projects">
              <GrenadeButton component="div" :throwIn="1000">
                Projets
              </GrenadeButton>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import { GrenadeButton } from '~/components/button'
import { Logo } from '~/components/logo'
import { Card } from '~/components/card'
import { Typography } from '~/components/typography'

export default {
  components: {
    GrenadeButton,
    Typography,
    Logo,
    Card,
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
  animation: headerAppear 3s linear 1s 1 forwards;
}

.header--tagline {
  text-align: center;
  opacity: 0;
  transform: scale(0);
  animation: taglineAppear 3s linear 3s 1 forwards;
}

.main-content {
  height: 70%;
}

.main-content--mid-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
}
.presentation {
  width: 40%;
  transition: all 3s ease;
  opacity: 0;
}
.main-content__visible .presentation {
  opacity: 1;
}

.social-network li {
  display: flex;
  margin: 1.5rem 0;
}
.social-network li a {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: block;
  border: 1px solid var(--color-dark);
  text-align: center;
  text-decoration: none;
  transition: all 0.6s ease;
}
.main-content__visible .social-network li a:hover,
.main-content__visible .social-network li a:focus {
  border: 1px solid var(--color-light);
  transform: scale(1.3);
  box-shadow: 0 0 2rem var(--color-light);
  outline: none;
}

.social-network__left li a {
  box-shadow: 0.25rem 0 0.25rem var(--color-dark);
  border-left: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transform-origin: center left;
  transform: translateX(-105%);
}
.main-content__visible .social-network__left li a:hover,
.main-content__visible .social-network__left li a:focus {
  border-left: none;
}

.social-network__right li a {
  box-shadow: -0.25rem 0 0.25rem var(--color-dark);
  border-right: none;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transform-origin: center right;
  transform: translateX(105%);
}
.main-content__visible .social-network__right li a:hover,
.main-content__visible .social-network__right li a:focus {
  border-right: none;
}
.main-content__visible .social-network li a {
  transform: translate(0);
}

.main-links {
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
}
.main-links ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.main-links ul a {
  text-decoration: none;
}
.main-links ul a:focus {
  outline: none;
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
</style>
