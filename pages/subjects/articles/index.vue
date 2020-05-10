<template>
  <div id="articles-page">
    <Header title="Articles" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :link="`/subjects/articles/${subject.slug}`"
        internalLink
        class="subject"
        :key="subject.name"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{
          subject.date.toLocaleString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}</CardMeta>
      </Card>
    </main>

    <Footer />
  </div>
</template>

<script>
import {
  Card,
  CardTitle,
  CardMeta,
  CardVideo,
  CardLink,
  CardSecondary,
} from '~/components/card'
import { Typography } from '~/components/typography'
import Header from '~/components/header'
import Footer from '~/components/footer'

import { articles } from '~/assets/subjects'

export default {
  components: {
    Card,
    CardTitle,
    CardMeta,
    CardVideo,
    CardLink,
    CardSecondary,
    Typography,
    Header,
    Footer,
  },
  data() {
    return {
      subjects: articles,
    }
  },
  head() {
    return {
      title: "Florent Berthelot - blog d'un artisan du web",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "J'écris sur le web, les tests, le JavaScript, les designs systems, ...",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Florent Berthelot - blog d'un artisan du web",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Florent Berthelot - blog d'un artisan du web",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "J'écris sur le web, les tests, le JavaScript, les designs systems, ...",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "J'écris sur le web, les tests, le JavaScript, les designs systems, ...",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/subjects/articles',
        },
      ],
    }
  },
}
</script>

<style scoped>
#articles-page {
  height: 100%;
}
.subjects {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  box-sizing: border-box;
  min-height: calc(100% - 14rem - 1px);
}

.subject {
  margin: 2rem;
  width: 55%;
}

@media screen and (max-width: 850px) {
  .subjects {
    padding: 1rem;
  }

  .subject {
    margin: 1rem;
    width: 90%;
  }
}
</style>
