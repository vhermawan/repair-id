<template>
  <section class="w-full flex flex-col gap-5 items-center p-[112px_20px_64px] lg:p-[156px_48px_88px] overflow-hidden">
    <span class="hero-entrance hero-entrance-delay-1 font-mono text-[10px] tracking-[1.4px] text-blue-accent whitespace-nowrap">
      {{ t('customProjectPage.hero.tag') }}
    </span>
    <h1 class="hero-entrance hero-entrance-delay-2 max-w-[900px] font-dm-sans font-bold text-[44px] leading-[46px] lg:text-[64px] lg:leading-[65px] tracking-[-1.6px] lg:tracking-[-2.6px] text-navy text-center">
      {{ t('customProjectPage.hero.title') }}
    </h1>

    <!-- Card fan: fixed-size stage scaled down on small screens -->
    <div class="hero-entrance hero-entrance-delay-3 w-full h-[170px] sm:h-[290px] lg:h-[450px] relative">
      <div class="absolute left-1/2 top-0 w-[1200px] h-[450px] -translate-x-1/2 origin-top scale-[0.34] sm:scale-[0.6] lg:scale-100">
        <img
          v-for="(card, i) in cards"
          :key="card.image"
          :src="card.image"
          :alt="t(card.labelKey)"
          class="absolute w-[206px] h-[280px] object-cover rounded-[14px] origin-top-left shadow-[0_10px_28px_0_#0614281F]"
          :style="{ left: `${43 + i * 146}px`, top: `${card.top}px`, transform: `rotate(${card.rotate}deg)`, zIndex: i }"
        >
        <span class="absolute left-[29px] top-[18px] z-[7] px-3.5 py-[7px] bg-blue-accent rounded-full font-mono text-[10px] tracking-[0.8px] text-white whitespace-nowrap">
          {{ t('customProjectPage.products.displayTable') }}
        </span>
        <span class="absolute left-[959px] top-[34px] z-[8] px-3.5 py-[7px] bg-navy rounded-full font-mono text-[10px] tracking-[0.8px] text-white whitespace-nowrap">
          {{ t('customProjectPage.products.phoneHolder') }}
        </span>
      </div>
    </div>

    <p class="hero-entrance hero-entrance-delay-4 max-w-[620px] font-dm-sans text-[15px] leading-[23px] lg:text-[16px] lg:leading-[25px] text-[#0C2244] text-center">
      {{ t('customProjectPage.hero.body') }}
    </p>
    <div class="hero-entrance hero-entrance-delay-4 flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
      <a href="#products" class="flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-navy rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('customProjectPage.hero.ctaProducts') }}</span>
        <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
      </a>
      <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-[26px] py-3.5 [outline:1px_solid_#06142833] [outline-offset:-0.5px] rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('customProjectPage.hero.ctaDiscuss') }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const cards = [
  { image: '/images/custom-project/product-display-table.webp', labelKey: 'customProjectPage.products.displayTable', rotate: -15, top: 118 },
  { image: '/images/custom-project/product-waste-bin.webp', labelKey: 'customProjectPage.products.wasteBin', rotate: -10, top: 78 },
  { image: '/images/custom-project/product-furniture.webp', labelKey: 'customProjectPage.products.furniture', rotate: -5, top: 54 },
  { image: '/images/custom-project/product-placard.webp', labelKey: 'customProjectPage.products.placard', rotate: 0, top: 46 },
  { image: '/images/custom-project/product-keychain.webp', labelKey: 'customProjectPage.products.keychain', rotate: 5, top: 54 },
  { image: '/images/custom-project/product-medals.webp', labelKey: 'customProjectPage.products.medals', rotate: 10, top: 78 },
  { image: '/images/custom-project/product-phone-holder.webp', labelKey: 'customProjectPage.products.phoneHolder', rotate: 15, top: 118 },
]
</script>
