<template>
  <div id="articles-page">
    <Header title="Articles" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :link="`/subjects/articles/${subject.slug}`"
        internalLink
        class="subject"
        key="subject.name"
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
      title: 'Articles - Florent Berthelot - Dévelopeur et formateur Web',
      meta: [
        {
          hid: 'description',
          name:
            'Un regroupement de liens vers mes slides de présentation et mes vidéos en conférence.',
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
  min-height: calc(100% - 12rem - 1px);
}

.subject {
  margin: 2rem;
  width: 55%;
}
</style>
