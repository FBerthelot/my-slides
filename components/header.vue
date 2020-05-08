<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link :to="backLink" aria-label="Back to home"><Logo /></nuxt-link>
    </div>

    <Typography variant="header__title" component="h1" class="title">
      {{ title }}
    </Typography>

    <div class="header__actions">
      <div class="tabs">
        <nuxt-link
          to="/subjects/articles"
          :tabindex="$route.path === '/subjects/articles' ? -1 : 0"
        >
          <Typography
            class="tab"
            :class="{ active: $route.path.startsWith('/subjects/articles') }"
            component="span"
          >
            Articles
          </Typography>
        </nuxt-link>
        <nuxt-link
          to="/subjects/courses"
          :tabindex="$route.path === '/subjects/courses' ? -1 : 0"
        >
          <Typography
            class="tab"
            :class="{ active: $route.path === '/subjects/courses' }"
            component="span"
          >
            Cours
          </Typography>
        </nuxt-link>
        <nuxt-link
          to="/subjects/talks"
          :tabindex="$route.path === '/subjects/talks' ? -1 : 0"
        >
          <Typography
            class="tab"
            :class="{ active: $route.path === '/subjects/talks' }"
            component="span"
          >
            Talks
          </Typography>
        </nuxt-link>
        <nuxt-link
          to="/subjects/projects"
          :tabindex="$route.path === '/subjects/projects' ? -1 : 0"
        >
          <Typography
            class="tab"
            :class="{ active: $route.path === '/subjects/projects' }"
            component="span"
          >
            Projets
          </Typography>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import { Typography } from '~/components/typography'
import { Logo } from '~/components/logo'

export default {
  components: {
    Typography,
    Logo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    backLink: {
      type: String,
      required: false,
      default: '/',
    },
  },
}
</script>

<style scoped>
.header {
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dark);
}
.header__logo {
  margin: 0.5rem;
}
.header__title {
  text-align: center;
}

.header__actions,
.header__title,
.header__logo {
  width: 33%;
}

.header__actions {
  align-self: flex-end;
}

.tabs {
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}
.tabs .tab {
  position: relative;
  display: inline-block;
  margin: 0 1rem -1px 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 1px solid var(--color-dark);
  border-bottom: 1px solid var(--color-black);
  background: var(--color-black);
  cursor: pointer;
  padding: 1rem;
  width: 6rem;
  height: 3rem;
  transition: all 0.5s ease;
  box-shadow: 0 -0.25rem 0.25rem var(--color-black);
  transform-origin: bottom center;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
}

.tabs .tab::after {
  position: absolute;
  content: '';
  display: block;
  width: calc(100% + 4rem);
  height: 2rem;
  left: -2rem;
  bottom: calc(-2rem - 1px);
  background-color: var(--color-black);
}

.tabs :hover .tab:not(.active),
.tabs :focus .tab:not(.active) {
  border: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-black);
  transform: scale(1.3);
  box-shadow: 0 0rem 2rem var(--color-light);
}
.tabs a:focus {
  outline: none;
}

.tabs .tab.active {
  border: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-black);
  box-shadow: 0 0rem 1rem var(--color-light);
  cursor: default;
}
</style>
