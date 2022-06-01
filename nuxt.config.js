import axios from 'axios'

export default {
  target: 'static',

  head: {
    title: '都市文化祭2022 公式HP',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '横浜国立大学 都市文化祭2022の公式ホームページです。開催日は6月26日（日）となります。今年のテーマは『雑踏』です！',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '都市文化祭2022 公式HP',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ucf2022.com' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '都市文化祭2022 公式HP',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '横浜国立大学 都市文化祭2022の公式ホームページです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ucf2022.com/logos/ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Zen+Antique&family=Zen+Kaku+Gothic+New:wght@400;700&family=Zen+Old+Mincho&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicon-48x48.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-microcms-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    '@nuxtjs/sitemap',
    [
      'nuxt-lazy-load',
      {
        defaultImage: '/comingsoon.svg',
        directiveOnly: true,
      },
    ],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-T6PWW1E0RN',
        debug: false,
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
            route: '/news/' + content.id,
            payload: content,
          }))
        )
      return pages
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ucf2022.com/',
    routes(callback) {
      const routeList = []

      // Add routes related to microcms
      try {
        const res = axios.get(
          `https://ucf2022.microcms.io/api/v1/news?limit=100`,
          {
            headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
          }
        )

        const route1 = res.data.contents.map((content) => {
          return '/news' + content.id
        })

        callback(null, routeList)
      } catch (e) {
        callback(e)
      }
    },
  },
}
