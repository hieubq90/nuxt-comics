import { pwa } from './config/pwa'
import { appDescription } from './constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/main.scss'],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@vue-macros/nuxt',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/eslint',
  ],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/comic.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: 'white',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#222222',
        },
      ],
    },
  },
  pwa,
  devtools: { enabled: true },
  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  // macros: {
  //   // configure plugin options, if needed
  // },
  fonts: {
    families: [
      { name: 'Baloo2', src: '/fonts/baloo2.ttf' },
      { name: 'Quicksand', src: '/fonts/quicksand.ttf' },
    ],
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': {},
      'postcss-url': {},
      'autoprefixer': {},
      'cssnano': {},
    },
  },
  runtimeConfig: {
    public: {
      apiURL: 'http://localhost:3001',
    },
  },
})
