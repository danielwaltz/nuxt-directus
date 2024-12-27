// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-04",
  modules: ["@nuxt/eslint", "@unocss/nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  css: ["@picocss/pico/css/pico.violet.min.css"],
  routeRules: {
    "/assets/**": { proxy: "http://localhost:8055/assets/**" },
  },
});
