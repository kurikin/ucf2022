import axios from 'axios'

export default {
  target: 'static',

  head: {
    title: '都市文化祭2022',
    htmlAttrs: {
      lang: 'jp',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Kaku+Gothic+New:wght@400;700&family=Zen+Old+Mincho&display=swap',
      },
    ],
  },

  css: [
    '~/assets/scss/common.scss',
    '~/assets/scss/animations.scss',
    '~/assets/scss/keyframes.scss',
  ],

  // Disable progress bar
  loading: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/swiper', ssr: false },
    { src: '@/plugins/modal' },
    { src: '@/plugins/scroll_lock' },
    { src: '@/plugins/countdown', ssr: false },
    { src: '@/plugins/youtube', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-microcms-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    [
      'nuxt-lazy-load',
      {
        defaultImage: '/comingsoon.jpeg',
        directiveOnly: true,
      },
    ],
  ],

  styleResources: {
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_mixin.scss'],
  },

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  axios: {
    baseURL: '/',
  },

  build: {},

  generate: {
    fallback: true,
    async routes() {
      const pages = await axios
        .get('https://ucf2022.microcms.io/api/v1/news?limit=100', {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/news/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },
  },
}
