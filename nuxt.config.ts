// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Odibee+Sans&display=swap' },
      ],
    },
  },
  devtools: { enabled: true }
})
