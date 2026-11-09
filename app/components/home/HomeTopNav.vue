<template>
  <header class="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5 lg:pl-[30.3vw] lg:pr-[5.16vw] lg:pt-[4.25vw]">
    <NuxtLink to="/" class="lg:hidden">
      <img src="/images/home/logo.png" alt="Repair Project" width="640" height="170" class="w-[132px] h-auto" />
    </NuxtLink>

    <nav class="hidden lg:flex items-center gap-[3.85vw]">
      <NuxtLink
        v-for="link in links" :key="link.to" :to="link.to"
        class="font-dm-sans text-[clamp(16px,1.3vw,25px)] uppercase text-white whitespace-nowrap transition-opacity hover:opacity-70"
        :aria-current="link.to === route.path ? 'page' : undefined"
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
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const menuOpen = useState('homeMenuOpen', () => false)

const links = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.rrBoard', to: '/rr-board' },
  { labelKey: 'nav.customProject', to: '/custom-project' },
  { labelKey: 'nav.contactLink', to: '/contact' },
]
</script>
