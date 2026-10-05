<template>
  <section id="rr-board" class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center p-[56px_20px] lg:p-[88px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex-1 flex flex-col gap-5 lg:gap-6"
    >
      <span class="font-dm-sans font-bold text-[10px] tracking-[1.4px] text-[#005FE7]">{{ t('rrBoardIntro.tag') }}</span>
      <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] tracking-[-1.2px] lg:text-[46px] lg:leading-[49px] lg:tracking-[-1.8px] text-navy">
        {{ t('rrBoardIntro.heading') }}
      </h2>
      <p class="max-w-[580px] font-dm-sans text-[14px] leading-[22px] lg:text-base lg:leading-[26px] text-[#0C2244]">
        {{ t('rrBoardIntro.body') }}
      </p>

      <img src="/images/rr-board/board-1.webp" alt="RR Board stacked panels" class="lg:hidden w-full h-[240px] object-cover rounded" />

      <div class="flex flex-col sm:flex-row gap-3 pt-3">
        <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[14px] [outline:1px_solid_#06142833] [outline-offset:-0.5px] rounded-full">
          <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('rrBoardIntro.ctaConsult') }}</span>
          <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-navy" />
        </a>
        <a href="https://w4c.id/LVPGoodsCatalogue" download target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[14px] bg-[#005FE7] rounded-full">
          <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('rrBoardIntro.ctaSpec') }}</span>
          <Icon name="lucide:download" class="w-4 h-4 text-white" />
        </a>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
      class="hidden lg:flex w-[600px] max-w-[45%] shrink-0"
    >
      <img src="/images/rr-board/board-1.webp" alt="RR Board stacked panels" loading="lazy" class="w-full h-[440px] object-cover rounded" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
