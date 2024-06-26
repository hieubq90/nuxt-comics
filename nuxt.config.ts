// https://nuxt.com/docs/api/configuration/nuxt-config
// import { pwa } from './config/pwa'
import { appDescription } from './constants'

export default defineNuxtConfig({
  ssr: true,
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/main.scss'],
  modules: [
    '@vueuse/nuxt', // '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    // '@vite-pwa/nuxt',
    'nuxt-icon',
    '@nuxt/eslint',
    // 'shadcn-nuxt'
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],

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
  // pwa,
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
  fonts: {
    families: [
      { name: 'Baloo2', src: '/fonts/baloo2.ttf' },
      { name: 'Quicksand', src: '/fonts/quicksand.ttf' },
    ],
  },
  // postcss: {
  //   plugins: {
  //     'postcss-nested': {},
  //     'postcss-import': {},
  //     'postcss-url': {},
  //     'autoprefixer': {},
  //     'cssnano': {},
  //   },
  // },
  runtimeConfig: {
    public: {
      apiURL: 'http://localhost:3001',
    },
  },
})
