export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/animations.css'],
  app: {
    head: {
      title: 'Repair: Circular Material for Commercial',
      meta: [
        { name: 'description', content: 'Repair develops circular materials by transforming low-value plastics into materials for commercial applications.' },
        { property: 'og:title', content: 'Repair: Circular Material for Commercial' },
        { property: 'og:description', content: 'Repair develops circular materials by transforming low-value plastics into materials for commercial applications.' },
        { property: 'og:image', content: 'https://www.repairproject.id/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.repairproject.id' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Repair: Circular Material for Commercial' },
        { name: 'twitter:description', content: 'Repair develops circular materials by transforming low-value plastics into materials for commercial applications.' },
        { name: 'twitter:image', content: 'https://www.repairproject.id/images/og-image.jpg' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon', '@vueuse/motion/nuxt'],
  googleFonts: {
    families: {
      'DM Sans': { wght: '100..1000' },
      'JetBrains Mono': { wght: '100..800' },
      'Instrument Serif': { ital: [400] },
    },
    display: 'swap',
  },
})
