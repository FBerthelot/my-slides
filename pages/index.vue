<template>
  <div>
    <video
      :class="{hideVideo: !videoIsRunning}"
      autoplay
      muted
      class="explosion"
      @ended="explosionEnd()"
    >
      <source src="/assets/explosion.mp4" type="video/mp4" />
    </video>

    <div class="joker-container">
      <img
        :class="{ jokerAnimation: !videoIsRunning }"
        src="/assets/joker-2.jpg"
        alt="joker"
        class="joker"
      />
    </div>

    <main>
      <loveu v-if="!videoIsRunning" class="loveu" />

      <h1 :class="{ titleAnimation: !videoIsRunning }" class="title">
        Florent Berthelot
      </h1>

      <nav>
        <ul :class="{ launchGrenade: !videoIsRunning }">
          <li>
            <a
              :class="{ twitterLaunch: !videoIsRunning }"
              href="https://twitter.com/berthel350"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              :class="{ linkedinLaunch: !videoIsRunning }"
              href="https://www.linkedin.com/in/florent-berthelot-a2678861/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              :class="{ githubLaunch: !videoIsRunning }"
              href="https://github.com/FBerthelot"
            >
              Github
            </a>
          </li>
          <li>
            <nuxt-link :class="{ slidesLaunch: !videoIsRunning }" to="/slides">
              Slides
            </nuxt-link>
          </li>
          <li>
            <a
              :class="{ mailLaunch: !videoIsRunning }"
              href="mailto:florent@berthelot.io"
            >
              Mail
            </a>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import loveu from '~/components/loveu'

export default {
  components: {
    loveu
  },
  data() {
    return {
      videoIsRunning: true
    }
  },
  methods: {
    explosionEnd() {
      this.videoIsRunning = false
    }
  },
  head() {
    return {
      title: 'Florent Berthelot - Dévelopeur et formateur Web',
      meta: [
        {
          hid: 'description',
          name:
            "Site perso d'un passionné de web. Si tu clique sur ce lien, tu vas avoir une surprise !"
        }
      ]
    }
  }
}
</script>

<style scoped>
.explosion {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
}
.hideVideo {
  display: none;
}

.loveu {
  position: absolute;
  right: 0;
  top: 10px;
  width: 10vw;
}

.joker-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.joker {
  margin-top: -20vh;
  max-height: 50%;
  max-width: 100%;
  opacity: 0;
}
.jokerAnimation {
  animation: jokerapear 0.9s ease 2s 1 forwards;
}
@keyframes jokerapear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.title {
  text-align: center;
  margin-top: 70vh;
  opacity: 0;
  color: #550a55;
  font-family: suicide-squad;
}
.titleAnimation {
  animation: titleapear 1s ease 2.9s 1 forwards;
}
@keyframes titleapear {
  from {
    opacity: 0;
    font-size: 1rem;
  }
  to {
    opacity: 1;
    font-size: 3.5rem;
  }
}

nav {
  position: absolute;
  bottom: 10vh;
  width: 100vw;
}
nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
nav ul a {
  display: block;
  color: #0d6c0d;
  border: 1px solid #0d6c0d;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0;

  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 45px;
  background-color: #0d6c0d;
  color: transparent;
}

nav ul a::before {
  display: block;
  content: '';
  position: absolute;
  left: -12px;
  width: 5px;
  height: 30px;
  transform: rotateZ(20deg);
  background-image: linear-gradient(to bottom, #444 30%, #ccc 30%);
  transition: all 1s ease;
}
nav ul a::after {
  display: block;
  content: '';
  position: absolute;
  left: -8px;
  top: -10px;
  width: 35px;
  height: 10px;
  background-image: linear-gradient(to left, #444 50%, #444 50%);
}

nav ul a::after {
  animation: explodeY 0.5s ease 6s 1 forwards;
}
nav ul a::before {
  animation: explodeX 0.5s ease 6s 1 forwards;
}

@keyframes explodeY {
  to {
    transform: translate3d(0, -300vw, 0);
  }
}
@keyframes explodeX {
  to {
    transform: translate3d(-300vw, -25vh, 0);
  }
}

main nav ul a:hover {
  background-color: #550a55;
  color: white;
  border-color: #550a55;
  transform: scale(1.5);
}

nav ul .twitterLaunch {
  animation: bounceInDown 2s ease 0.2s 1 forwards,
    deployButton 0.6s ease 2.2s 1 forwards;
}
nav ul .linkedinLaunch {
  animation: bounceInDown 2s ease 1 forwards,
    deployButton 0.6s ease 2s 1 forwards;
}
nav ul .githubLaunch {
  animation: bounceInDown 2s ease 0.7s 1 forwards,
    deployButton 0.6s ease 2.7s 1 forwards;
}
nav ul .slidesLaunch {
  animation: bounceInDown 2s ease 0.3s 1 forwards,
    deployButton 0.6s ease 2.3s 1 forwards;
}

nav ul .mailLaunch {
  animation: bounceInDown 2s ease 0.5s 1 forwards,
    deployButton 0.6s ease 2.5s 1 forwards;
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes deployButton {
  to {
    background-color: transparent;
    color: #0d6c0d;
    border-radius: 10px;
    width: 15vh;
  }
}

@media (max-width: 600px) {
  .loveu {
    width: 35vw;
  }
  .joker {
    margin-top: -40vh;
  }
  .title {
    margin-top: 50vh;
  }
  @keyframes titleapear {
    from {
      opacity: 0;
      font-size: 1rem;
    }
    to {
      opacity: 1;
      font-size: 2rem;
    }
  }
  nav {
    bottom: 15px;
  }
  nav ul {
    flex-direction: column;
  }
  nav ul li {
    margin-bottom: 5px;
  }
}
</style>
