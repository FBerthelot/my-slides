import pkg from './package'
import fr from './assets/fr.json'
import en from './assets/en.json'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    title: 'Florent Berthelot - Web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@berthel350',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://berthelot.io/assets/moi.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      messages: {
        en,
        fr,
      },
    },
    detectBrowserLanguage: false,
  },
  sitemap: {
    hostname: 'https://berthelot.io',
    gzip: true,
    i18n: 'en',
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://berthelot.io/sitemap.xml',
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-footnote', 'markdown-it-ins', 'markdown-it-emoji'],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  generate: {
    routes: ['/subjects/articles/hello-world'],
  },
}
