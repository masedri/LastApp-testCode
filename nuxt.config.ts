// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    },

    plugins: [svgLoader()],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
})
