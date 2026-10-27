<template>
  <section class="relative w-full h-svh min-h-[640px] lg:h-[56.25vw] lg:min-h-0 overflow-hidden bg-black">
    <img
      src="/images/home/hero-sachet-hands.webp"
      :alt="t('hero.imageAlt')"
      class="absolute inset-0 w-full h-full object-cover"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-black/20" aria-hidden="true" />
    <div class="lg:hidden absolute inset-0 bg-black/25" aria-hidden="true" />

    <aside class="hidden lg:block absolute inset-y-0 left-0 w-[12.86vw] bg-black/25">
      <NuxtLink to="/" class="absolute left-[2.74vw] top-[4.53vw] flex items-start gap-[9.6px]" aria-label="Repair Project">
        <img src="/images/home/logo-mark.svg" alt="" />
        <span class="flex flex-col gap-[6px]">
          <img src="/images/home/logo-repair.svg" alt="" />
          <img src="/images/home/logo-project.svg" alt="" />
        </span>
      </NuxtLink>

      <img src="/images/home/menu-lines.svg" alt="" class="absolute left-[5.96vw] top-[26.1vw]" />

      <nav class="absolute left-[6.05vw] top-[39.2vw] flex flex-col items-center gap-[2vw]" :aria-label="t('hero.socialLabel')">
        <a
          v-for="social in socials" :key="social.label"
          :href="social.href" target="_blank" rel="noopener noreferrer"
          class="[writing-mode:vertical-rl] rotate-180 font-dm-sans text-[clamp(16px,1.3vw,25px)] text-white transition-opacity hover:opacity-70"
        >
          {{ social.label }}
        </a>
      </nav>
    </aside>

    <header class="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 lg:pl-[30.3vw] lg:pr-[5.16vw] lg:pt-[4.25vw]">
      <NuxtLink to="/" class="lg:hidden flex items-start gap-2" aria-label="Repair Project">
        <img src="/images/home/logo-mark.svg" alt="" />
        <span class="flex flex-col gap-[6px]">
          <img src="/images/home/logo-repair.svg" alt="" />
          <img src="/images/home/logo-project.svg" alt="" />
        </span>
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
          @click="menuOpen = true"
        >
          <Icon name="lucide:menu" class="w-7 h-7 text-white" />
        </button>
      </div>
    </header>

    <div class="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 pb-10 lg:static lg:contents">
      <p class="hero-entrance hero-entrance-delay-2 max-w-[420px] font-dm-sans text-base text-white lg:absolute lg:left-[75.78vw] lg:top-[13.1vw] lg:w-[19.08vw] lg:max-w-none lg:text-[clamp(16px,1.04vw,20px)]">
        {{ t('hero.body') }}
      </p>
      <h1 class="hero-entrance hero-entrance-delay-1 order-first lg:order-none font-dm-sans font-semibold text-[40px] leading-[1.1] text-white whitespace-pre-line lg:absolute lg:left-[16.46vw] lg:bottom-[4.6vw] lg:text-[6.77vw] lg:leading-[1.17]">
        {{ t('hero.label') }}
      </h1>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="menuOpen" class="lg:hidden fixed inset-0 z-50 flex flex-col px-5 pt-5 pb-8 bg-[#2042EA]">
        <div class="flex justify-end">
          <button class="flex items-center justify-center w-10 h-10" :aria-label="t('hero.close')" @click="menuOpen = false">
            <Icon name="lucide:x" class="w-7 h-7 text-white" />
          </button>
        </div>
        <nav class="flex flex-col mt-8">
          <NuxtLink
            v-for="link in links" :key="link.to" :to="link.to"
            class="py-5 border-t border-white/30 font-dm-sans text-[32px] uppercase text-white"
            @click="menuOpen = false"
          >
            {{ t(link.labelKey) }}
          </NuxtLink>
        </nav>
        <div class="mt-auto flex gap-6">
          <a
            v-for="social in socials" :key="social.label"
            :href="social.href" target="_blank" rel="noopener noreferrer"
            class="font-dm-sans text-lg text-white"
          >
            {{ social.label }}
          </a>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const menuOpen = ref(false)

const links = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.rrBoard', to: '/rr-board' },
  { labelKey: 'nav.customProject', to: '/custom-project' },
  { labelKey: 'nav.contactLink', to: '/contact' },
]

const socials = [
  { label: 'WA', href: 'https://wa.me/6282258044904' },
  { label: 'EMAIL', href: 'mailto:carissa@repairproject.id' },
  { label: 'IG', href: 'https://tr.ee/K4G-EzRrb1' },
]

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>
