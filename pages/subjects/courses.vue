<template>
  <div id="courses-page">
    <Header title="Supports de formations" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :link="subject.url"
        class="subject"
        key="subject.name"
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
      title:
        'Mes slides et vidéos - Florent Berthelot - Dévelopeur et formateur Web',
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
</style>
