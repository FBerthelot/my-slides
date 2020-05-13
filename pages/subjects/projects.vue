<template>
  <div id="projects-page">
    <Header :title="$t('projects.title')" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        class="subject"
        :link="subject.link"
        :key="subject.name"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography
          ><span v-html="subject.description[$i18n.locale]"></span
        ></Typography>
        <CardMeta>{{ subject.metaInfo[$i18n.locale] }}</CardMeta>
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
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('projects.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('projects.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('projects.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('projects.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('projects.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('projects.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
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
  min-height: calc(100% - 14rem - 1px);
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
