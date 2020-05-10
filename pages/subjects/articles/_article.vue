<template>
  <div id="article-page">
    <Header :title="article.name" backLink="/subjects/articles/" />

    <Typography
      class="article"
      component="main"
      v-html="article.content"
    ></Typography>

    <Footer />
  </div>
</template>

<script>
import { Typography } from '~/components/typography'
import Header from '~/components/header'
import Footer from '~/components/footer'

import { articles } from '~/assets/subjects'

export default {
  components: {
    Typography,
    Header,
    Footer,
  },
  validate({ params }) {
    return !!articles.find((article) => [params.article])
  },
  data() {
    return {
      article: articles.find((article) => [this.$route.article]),
    }
  },
  head() {
    return {
      title: `Florent Berthelot - blog - ${this.article.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description.replace(/<br[/]?>/g, ''),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.name,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.name,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description.replace(/<br[/]?>/g, ''),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description.replace(/<br[/]?>/g, ''),
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://berthelot.io/subjects/articles/${this.article.slug}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.image
            ? this.article.image
            : 'https://berthelot.io/assets/moi.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
#article-page {
  height: 100%;
}

.article {
  box-sizing: border-box;
  min-height: calc(100% - 12rem - 1px);
  width: 50%;
  margin: 2rem 25% 2rem 25%;
}

@media screen and (max-width: 850px) {
  .article {
    width: 100%;
    padding: 2rem 1rem;
    margin: 0;
  }
}
</style>

<style>
/* markdownit style */
.article h2,
.article h3,
.article h4,
.article h5,
.article h6 {
  font-family: suicide-squad, 'Comic Sans MS', 'Comic Sans', cursive;
  margin: 0.5rem;
}
.article h2 {
  font-size: 2rem;
  line-height: 2.4rem;
}
.article h3 {
  font-size: 1.5rem;
  line-height: 2rem;
}
.article h4 {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.article h5 {
  font-size: 1rem;
  line-height: 1.3rem;
}
.article h6 {
  font-size: 0.7rem;
  line-height: 1rem;
}

.article p {
  margin: 0.5rem;
}

.article a {
  color: var(--color-light);
  transition: all 0.3s ease;
  text-decoration: none;
}

.article a:hover {
  text-decoration: underline;
}
.article a:active {
  color: var(--color-dark);
}

.article strong {
  font-weight: bold;
}
.article em {
  font-style: italic;
}

.article blockquote {
  border-left: 2px solid var(--color-light);
  padding-left: 0.5rem;
}

.article code {
  padding: 0.125rem 0.25rem;
  background-color: var(--color-dark);
  border-radius: 0.25rem;
}

.article pre {
  display: block;
  padding: 0.75rem;
  margin: 0.5rem;
  font-size: 0.75rem;
  word-break: break-all;
  word-wrap: break-word;
  background-color: var(--color-dark);
  border: 1px solid var(--color-light);
  border-radius: 0.125rem;
}

.article pre code {
  padding: 0;
  border-radius: 0;
  margin: 0.5rem;
}

.article ul {
  list-style: disc;
  padding-left: 3rem;
}

.article ol {
  list-style: decimal;
  padding-left: 3rem;
}

.article img {
  vertical-align: middle;
  max-width: 35%;
}

.article table {
  margin: 2rem;
}

.article thead tr {
  border-bottom: 2px solid var(--color-light);
  font-weight: bold;
}
.article th {
  padding: 0.5rem;
}

.article tbody tr:not(:last-child) {
  border-bottom: 2px solid var(--color-dark);
}
.article td {
  padding: 0.5rem;
}
</style>
