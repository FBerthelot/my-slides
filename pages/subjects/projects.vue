<template>
  <div id="projects-page">
    <Header title="Projets" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        class="subject"
        :link="subject.link"
        :key="subject.name"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaInfo }}</CardMeta>
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
import { projects } from '~/assets/subjects'

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
      subjects: projects,
    }
  },
  head() {
    return {
      title: 'Florent Berthelot - Projets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'En plus de mon travail de consultant, je travail actuellement sur ces projets',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Florent Berthelot - Projets',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Florent Berthelot - Projets',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'En plus de mon travail de consultant, je travail actuellement sur ces projets',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'En plus de mon travail de consultant, je travail actuellement sur ces projets',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://berthelot.io/subjects/projects',
        },
      ],
    }
  },
}
</script>

<style scoped>
#projects-page {
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
