<template>
  <section class="w-full flex flex-col gap-8 lg:gap-[56px] p-[112px_20px_0] lg:p-[160px_48px_0] bg-white">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:justify-between lg:items-end">
      <div class="hero-entrance hero-entrance-delay-1 flex-1 max-w-[920px] flex flex-col gap-4 lg:gap-5">
        <span class="font-mono text-[10px] tracking-[1.4px] text-[#005FE7]">{{ t('hero.eyebrow') }}</span>
        <h1 class="font-dm-sans font-bold text-[40px] leading-[42px] tracking-[-1.5px] lg:text-[72px] lg:leading-[71px] lg:tracking-[-2.8px] text-navy whitespace-pre-line">
          {{ t('hero.headline') }}
        </h1>
      </div>

      <p class="hero-entrance hero-entrance-delay-2 lg:w-[330px] shrink-0 lg:pb-[14px] font-dm-sans text-[15px] leading-[23px] text-[#0C2244]">
        {{ t('hero.intro') }}
      </p>
    </div>

    <div class="hero-entrance hero-entrance-delay-3 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      <img
        v-for="image in images" :key="image.src"
        :src="image.src"
        :alt="image.alt"
        class="w-full h-[220px] sm:h-[260px] lg:h-[360px] object-cover"
      />
    </div>

    <div class="hero-entrance hero-entrance-delay-4 w-full flex justify-center lg:pt-[40px]">
      <a href="#rr-board" @click.prevent="scrollToRrBoard" class="flex items-center gap-2 px-[26px] py-[13px] bg-[#005FE7] rounded-full">
        <span class="font-mono text-[11px] tracking-[1.2px] text-white whitespace-nowrap">{{ t('hero.ctaBoard') }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const images = [
  { src: '/images/home/hero-bins.webp', alt: 'Recycled waste bins made from RR Board' },
  { src: '/images/home/hero-keychain.webp', alt: 'Recycled plastic keychains' },
  { src: '/images/home/hero-stool.webp', alt: 'Stool made from RR Board' },
]

const scrollToRrBoard = () => {
  document.getElementById('rr-board')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
