<template>
  <div id="courses-page">
    <Header title="Supports de formations" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :link="subject.url"
        class="subject"
        :key="subject.name"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaData }}</CardMeta>
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

import { courses } from '~/assets/subjects'

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
      subjects: courses,
    }
  },
  head() {
    return {
      title: 'Florent Berthelot - Supports de formations',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Supports de cours que j'utilise pour former au développement web.",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Florent Berthelot - Supports de formations',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Florent Berthelot - Supports de formations',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Supports de cours que j'utilise pour former au développement web",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Supports de cours que j'utilise pour former au développement web",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/subjects/courses',
        },
      ],
    }
  },
}
</script>

<style scoped>
#courses-page {
  height: 100%;
}

.subjects {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  min-height: calc(100% - 12rem - 1px);
}

.subject {
  margin: 2rem;
  width: 25%;
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
