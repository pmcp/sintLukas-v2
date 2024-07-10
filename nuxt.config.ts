// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", '@nuxt/ui'],
  mapbox: {
    accessToken: 'pk.eyJ1IjoicG1jcCIsImEiOiJjbHduc3hkMGExdzNwMmpteWh2M3c3cHZ3In0.4edOOiqp_E93TDvm-1BxCQ'
  },
  build: {
    transpile: ['@egjs/vue-grid']
  },
  extends: ['@nuxt/ui-pro'],
  ui: {
    safelistColors: ['black', 'primary', 'secondary']
  },
  image: {
    provider: 'netlify'
  }
})