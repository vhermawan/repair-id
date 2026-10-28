<template>
  <section class="relative w-full h-svh min-h-[640px] lg:h-[56.25vw] lg:min-h-0 overflow-hidden bg-black">
    <video
      ref="video"
      class="absolute inset-0 w-full h-full object-cover"
      poster="/images/home/hero-poster.webp"
      :aria-label="t('hero.imageAlt')"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="/videos/home/hero-720.mp4" type="video/mp4" media="(max-width: 1023px)" />
      <source src="/videos/home/hero-1080.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/20" aria-hidden="true" />
    <div class="lg:hidden absolute inset-0 bg-black/25" aria-hidden="true" />

    <header class="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 lg:pl-[30.3vw] lg:pr-[5.16vw] lg:pt-[4.25vw]">
      <NuxtLink to="/" class="lg:hidden">
        <img src="/images/home/logo.png" alt="Repair Project" width="640" height="170" class="w-[132px] h-auto" />
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-[3.85vw]">
        <NuxtLink
          v-for="link in links" :key="link.to" :to="link.to"
          class="font-dm-sans text-[clamp(16px,1.3vw,25px)] uppercase text-white whitespace-nowrap transition-opacity hover:opacity-70"
          :aria-current="link.to === '/' ? 'page' : undefined"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <div class="flex items-center p-[3px] rounded-full border border-white">
          <button
            v-for="lang in ['id', 'en']" :key="lang"
            class="px-3 lg:px-[0.9vw] py-1 lg:py-[0.25vw] rounded-full font-dm-sans text-base lg:text-[clamp(16px,1.3vw,25px)] uppercase text-white transition-colors"
            :class="locale === lang ? 'bg-black' : 'bg-transparent'"
            :aria-pressed="locale === lang"
            @click="setLocale(lang)"
          >
            {{ lang }}
          </button>
        </div>

        <button
          class="lg:hidden flex items-center justify-center w-10 h-10"
          :aria-label="t('hero.menu')"
          :aria-expanded="menuOpen"
          aria-controls="home-menu"
          @click="menuOpen = true"
        >
          <Icon name="lucide:menu" class="w-7 h-7 text-white" />
        </button>
      </div>
    </header>

    <div class="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 pb-10 lg:static lg:contents">
      <p class="hero-entrance hero-entrance-delay-2 max-w-[420px] font-dm-sans text-lg leading-snug text-white lg:absolute lg:left-[69.84vw] lg:top-[13.1vw] lg:w-[25vw] lg:max-w-none lg:text-[clamp(20px,1.45vw,28px)]">
        {{ t('hero.body') }}
      </p>
      <h1 class="hero-entrance hero-entrance-delay-1 order-first lg:order-none font-dm-sans font-semibold text-[40px] leading-[1.1] text-white whitespace-pre-line lg:absolute lg:left-[16.46vw] lg:bottom-[4.6vw] lg:leading-[1.17]"
        :class="locale === 'id' ? 'lg:text-[5.95vw]' : 'lg:text-[6.77vw]'">
        {{ t('hero.label') }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const menuOpen = useState('homeMenuOpen', () => false)
const video = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.value?.pause()
})

const links = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.rrBoard', to: '/rr-board' },
  { labelKey: 'nav.customProject', to: '/custom-project' },
  { labelKey: 'nav.contactLink', to: '/contact' },
]
</script>
