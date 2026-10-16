<template>
  <section class="w-full flex flex-col gap-8 lg:gap-[56px] p-[112px_20px_64px] lg:p-[160px_48px_104px] bg-white">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:justify-between lg:items-end">
      <h1 class="hero-entrance hero-entrance-delay-1 flex-1 max-w-[920px] font-dm-sans font-bold type-display text-navy whitespace-pre-line">
        {{ t('hero.headline') }}
      </h1>

      <p class="hero-entrance hero-entrance-delay-2 lg:w-[420px] shrink-0 lg:pb-[10px] font-dm-sans type-lead text-[#0C2244]">
        {{ t('hero.intro') }}
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div
        v-for="(image, i) in images" :key="image.src"
        class="hero-img-reveal group w-full aspect-[4/3] sm:aspect-square overflow-hidden"
        :style="{ animationDelay: `${0.45 + i * 0.15}s` }"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="hero-img-zoom w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          :style="{ animationDelay: `${0.45 + i * 0.15}s` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const images = [
  { src: '/images/home/low-value-plastic.webp', alt: 'Low-value plastic waste' },
  { src: '/images/home/rr-board.webp', alt: 'RR Board panels' },
  { src: '/images/home/medal.webp', alt: 'Products made from RR Board' },
]
</script>
