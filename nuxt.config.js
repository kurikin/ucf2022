export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ucf2022',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/swiper', ssr: false },
    { src: '@/plugins/modal' },
    { src: '@/plugins/scroll_lock' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-microcms-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/date-fns',
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

  webfontloader: {
    google: {
      families: ['Zen+Kaku+Gothic+New:400,700', 'Zen+Antique:400'],
    },
  },

  axios: {
    baseURL: '/',
  },

  build: {
    vendor: ['vue-awesome-swiper'],
  },
}
