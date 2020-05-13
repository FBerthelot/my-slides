<template>
  <div id="talks-page">
    <Header :title="$t('talks.title')" />

    <main class="subjects">
      <Card v-for="subject in subjects" class="subject" :key="subject.name">
        <CardTitle>{{ subject.name }}</CardTitle>
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaData }}</CardMeta>

        <CardVideo
          v-if="subject.video"
          :video="subject.video"
          :title="$t('talks.video_title')"
        />

        <CardLink :href="subject.slides" target="_blank" rel="noopener">{{
          $t('talks.slide_link')
        }}</CardLink>

        <CardSecondary v-if="subject.alternatives">
          <Typography variant="title--extra-small">
            {{ $t('talks.alternative') }}
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
                rel="noopener"
                :href="alternative.video"
                >{{ $t('talks.alternative_video') }}</Typography
              >
              <Typography
                component="a"
                v-if="alternative.slide"
                target="_blank"
                rel="noopener"
                :href="alternative.slide"
                >{{ $t('talks.alternative_slide') }}</Typography
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
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('talks.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('talks.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('talks.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
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
