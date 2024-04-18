// import UnoCSS from "@unocss/postcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/device",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@vue-macros/nuxt",
    "@unocss/nuxt",
    "nuxt-swiper",
    "nuxt-icon",
  ],
  macros: {
    // configure plugin options, if needed
  },
  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-import": {},
      "postcss-url": {},
      autoprefixer: {},
      cssnano: {},
    },
  },
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:3001/api/v1",
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
});
