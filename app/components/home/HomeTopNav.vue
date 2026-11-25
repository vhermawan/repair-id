<template>
  <header
    class="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5 lg:pl-[30.62vw] lg:pr-[2.76vw] lg:pt-[1.76vw]"
    :class="dark ? 'text-black' : 'text-white'"
  >
    <NuxtLink to="/" class="lg:hidden">
      <img src="/images/home/logo.png" alt="Repair Project" width="640" height="170" class="w-[132px] h-auto" :class="dark && 'brightness-0'" />
    </NuxtLink>

    <nav class="hidden lg:flex items-center justify-between w-[38.14vw]">
      <NuxtLink
        v-for="link in links" :key="link.to" :to="link.to"
        class="font-dm-sans text-[clamp(14px,1.04vw,20px)] uppercase whitespace-nowrap transition-opacity hover:opacity-70"
        :aria-current="link.to === route.path ? 'page' : undefined"
      >
        {{ t(link.labelKey) }}
      </NuxtLink>
    </nav>

    <div class="flex items-center gap-3">
      <div class="flex items-center p-[3px] rounded-full border" :class="dark ? 'border-black' : 'border-white'">
        <button
          v-for="lang in ['id', 'en']" :key="lang"
          class="px-3 lg:px-[1.1vw] py-1.5 lg:py-[0.61vw] rounded-full font-dm-sans text-base lg:text-[clamp(14px,1.04vw,20px)] leading-none uppercase transition-colors"
          :class="locale === lang ? 'bg-black text-white' : 'bg-transparent'"
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
        <Icon name="lucide:menu" class="w-7 h-7" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ dark?: boolean }>()

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
