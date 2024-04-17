// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
});
