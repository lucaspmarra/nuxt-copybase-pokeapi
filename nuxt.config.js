export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-copybase-pokeapi',
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
  css: ['@/assets/css/style.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
  build: {},
  loading: {
    color: 'blue',
    height: '5px',
  },
  ssr: false,
  target: 'static',
  analyze: {
    analyzerMode: 'static',
  },
  server: {
    port: 8887,
    host: '0.0.0.0',
  },
  router: {
    base: '/copybase-pokeapi',
    mode: 'hash',
  },
  generate: {
    fallback: true,
  },
}
