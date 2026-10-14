<template>
  <section class="w-full flex flex-col gap-8 lg:gap-[56px] p-[112px_20px_64px] lg:p-[160px_48px_104px] bg-white">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:justify-between lg:items-end">
      <h1 class="hero-entrance hero-entrance-delay-1 flex-1 max-w-[920px] font-dm-sans font-bold text-[40px] leading-[42px] tracking-[-1.5px] lg:text-[72px] lg:leading-[71px] lg:tracking-[-2.8px] text-navy whitespace-pre-line">
        {{ t('hero.headline') }}
      </h1>

      <p class="hero-entrance hero-entrance-delay-2 lg:w-[420px] shrink-0 lg:pb-[10px] font-dm-sans text-[17px] leading-[27px] lg:text-[19px] lg:leading-[30px] text-[#0C2244]">
        {{ t('hero.intro') }}
      </p>
    </div>

    <div class="hero-entrance hero-entrance-delay-3 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      <img
        v-for="image in images" :key="image.src"
        :src="image.src"
        :alt="image.alt"
        class="w-full aspect-[4/3] sm:aspect-square object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const images = [
  { src: '/images/home/impact-waste.webp', alt: 'Low-value plastic waste' },
  { src: '/images/rr-board/board-1.webp', alt: 'RR Board panels' },
  { src: '/images/home/hero-stool.webp', alt: 'Products made from RR Board' },
]
</script>
