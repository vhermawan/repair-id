export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Repair Material Studio',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon'],
  googleFonts: {
    families: {
      'Archivo': { wght: '100..900' },
      'Inter': { wght: '100..900' },
      'JetBrains Mono': { wght: '100..800' },
      'Instrument Serif': { ital: [400] },
    },
    display: 'swap',
  },
})
