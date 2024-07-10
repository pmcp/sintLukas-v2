// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", '@nuxt/ui'],
  extends: ['@nuxt/ui-pro'],
  ui: {
    safelistColors: ['black', 'primary', 'secondary']
  },
  image: {
    provider: 'netlify'
  }
})