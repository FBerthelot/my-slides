<template>
  <div id="talks-page">
    <Header title="Sujets de conférences" />

    <main class="subjects">
      <Card v-for="subject in subjects" class="subject" :key="subject.name">
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaData }}</CardMeta>

        <CardVideo
          v-if="subject.video"
          :video="subject.video"
          title="video of the talk"
        />

        <CardLink :href="subject.slides">Lien vers les slides</CardLink>

        <CardSecondary v-if="subject.alternatives">
          <Typography variant="title--extra-small">
            L'ensemble des versions
          </Typography>
          <ul>
            <Typography
              component="li"
              v-for="alternative in subject.alternatives"
              :key="alternative.name"
            >
              {{ alternative.name }}:
              <Typography
                component="a"
                v-if="alternative.video"
                target="_blank"
                :href="alternative.video"
                >Video</Typography
              >
              <Typography
                component="a"
                v-if="alternative.slide"
                target="_blank"
                :href="alternative.slide"
                >Slides</Typography
              >
              - {{ alternative.date }}
            </Typography>
          </ul>
        </CardSecondary>
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
import { talks } from '~/assets/subjects'

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
      subjects: talks,
    }
  },
  head() {
    return {
      title: 'Florent Berthelot - Sujets de conférences',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Liste des conférences que j'ai eu la chance de donner.",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Florent Berthelot - Sujets de conférences',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Florent Berthelot - Sujets de conférences',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Liste des conférences que j'ai eu la chance de donner.",
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: "Liste des conférences que j'ai eu la chance de donner.",
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://berthelot.io/subjects/talks',
        },
      ],
    }
  },
}
</script>

<style scoped>
#talks-page {
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
