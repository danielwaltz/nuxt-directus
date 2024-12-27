// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@unocss/nuxt"],
  css: ["@picocss/pico/css/pico.violet.min.css"],
  routeRules: {
    "/assets/**": { proxy: "http://localhost:8055/assets/**" },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: "2024-07-04",
  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
});
