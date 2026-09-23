<template>
  <section
    ref="heroContainer"
    class="parallax-container w-full min-h-[400px] lg:h-[560px] flex flex-col gap-0 p-[24px_20px_32px] lg:p-[36px_48px_48px] justify-between items-start overflow-hidden relative"
  >
    <img src="/images/rr-board-terrazzo-blue.webp" alt="RR Board" class="parallax-img z-0" />
    <div class="absolute inset-0 bg-[#062A5CD9] [background-image:linear-gradient(93.923deg,_#061428F2_1.813%,_#0044A8A6_98.187%)] z-[1]" />

    <div class="h-0 relative z-[3]" />

    <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-16 lg:pt-[64px] items-start lg:items-end relative z-[3]">
      <div class="flex-1 flex flex-col gap-4 lg:gap-5">
        <span class="hero-entrance hero-entrance-delay-1 font-mono text-[10px] lg:text-[11px] tracking-[1.3px] text-[#A9C9FF]">
          {{ t('rrPage.heroTag') }}
        </span>
        <h1 class="hero-entrance hero-entrance-delay-2 font-dm-sans font-bold text-[52px] leading-[52px] lg:text-[92px] lg:leading-[92px] tracking-[-2px] lg:tracking-[-4px] text-cream">
          {{ t('rrPage.heroTitle') }}
        </h1>
        <p class="hero-entrance hero-entrance-delay-3 font-dm-sans text-[15px] leading-[24px] lg:text-[17px] lg:leading-[27px] text-[#E6EEFF] max-w-[820px]">
          {{ t('rrPage.heroDesc') }}
        </p>
      </div>

      <div class="hero-entrance hero-entrance-delay-4 w-full lg:w-[444px] shrink-0 flex flex-col">
        <div
          v-for="meta in heroMeta" :key="meta.keyKey"
          class="flex justify-between items-center py-[13px] border-t border-[#F4F1E933]"
        >
          <span class="font-mono text-[10px] tracking-[0.8px] text-[#A9C9FF]">{{ t(meta.keyKey) }}</span>
          <span class="font-dm-sans text-[13px] font-medium text-cream">{{ t(meta.valueKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { target: heroContainer } = useParallax(0.3)

const heroMeta = [
  { keyKey: 'rrPage.heroMeta1.key', valueKey: 'rrPage.heroMeta1.value' },
  { keyKey: 'rrPage.heroMeta2.key', valueKey: 'rrPage.heroMeta2.value' },
  { keyKey: 'rrPage.heroMeta3.key', valueKey: 'rrPage.heroMeta3.value' },
]
</script>
