// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/hints"],

  devtools: {
    enabled: true,
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2026-06-30",
  vite: {
    optimizeDeps: {
      include: ["debug"],
    },
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
