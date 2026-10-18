<template>
  <section class="w-full flex flex-col items-center gap-12 lg:gap-16 pt-[120px] pb-16 lg:pt-[200px] lg:pb-[140px] bg-white">
    <div class="w-full flex flex-col items-center gap-5 lg:gap-6 px-5 lg:px-12 text-center">
      <h1 class="hero-entrance hero-entrance-delay-1 max-w-[1000px] font-dm-sans font-normal text-[#111317] text-[38px] leading-[42px] tracking-[-0.8px] md:text-[50px] md:leading-[54px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.2px] whitespace-pre-line">
        {{ t('hero.headline') }}
      </h1>
      <p class="hero-entrance hero-entrance-delay-2 max-w-[720px] font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('hero.intro') }}
      </p>
    </div>

    <div class="w-full grid grid-cols-2 sm:grid-cols-[520fr_372fr_532fr] gap-2">
      <div
        v-for="(image, i) in images" :key="image.src"
        class="group h-[220px] sm:h-[320px] lg:h-[440px] rounded-[4px] overflow-hidden"
        :class="i === 0 && 'col-span-2 sm:col-span-1'"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
