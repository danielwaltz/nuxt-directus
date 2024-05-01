// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@unocss/nuxt'],
  experimental: {
    asyncContext: true,
    headNext: true,
    typedPages: true,
    viewTransition: true,
  },
  css: ['@picocss/pico/css/pico.violet.min.css'],
  routeRules: {
    '/assets/**': { proxy: 'http://localhost:8055/assets/**' },
  },
});
