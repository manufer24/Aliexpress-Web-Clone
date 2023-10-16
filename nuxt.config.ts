// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false
  },
  runtimeConfig: {
      public: {
        STRIPE_KEY: `${process.env.STRIPE_PK_KEY}`
      }
  },
  app: {
      head: {
        script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ],
      }
    }
})