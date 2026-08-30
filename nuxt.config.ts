// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/hints", "@comark/nuxt"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    openAiApiKey: "hello",
    public: {
      someValue: "on the frontned",
    },
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
