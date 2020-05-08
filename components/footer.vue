<template>
  <footer class="footer">
    <ul class="social-network">
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
          href="https://twitter.com/berthel350"
        >
          Twitter
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/florent-berthelot-a2678861/"
        >
          Linkedin
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
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
  </footer>
</template>

<script>
import { Typography } from '~/components/typography'
import { Logo } from '~/components/logo'

export default {
  components: {
    Typography,
    Logo,
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid var(--color-dark);
  height: 3rem;
  box-sizing: border-box;
}

.social-network {
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}
.social-network a {
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

.social-network a:hover,
.social-network a:focus {
  border: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-black);
  transform: scale(1.3);
  box-shadow: 0 0rem 2rem var(--color-light);
  outline: none;
}
</style>
