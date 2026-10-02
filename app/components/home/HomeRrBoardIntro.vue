<template>
  <section id="rr-board" class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 p-[48px_20px] lg:p-[88px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, x: 40 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
      class="flex-1 flex flex-col gap-5 lg:gap-6"
    >
      <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">{{ t('rrBoardIntro.tag') }}</span>
      <h2 class="w-full font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[52px] lg:leading-[56px] tracking-[-1.5px] lg:tracking-[-2px] text-[#062A5C]">
        {{ t('rrBoardIntro.heading') }}
      </h2>
      <p class="w-full font-dm-sans text-[14px] leading-[22px] lg:text-base lg:leading-[26px] text-[#062A5CCC]">
        {{ t('rrBoardIntro.body') }}
      </p>

      <img src="/images/board-1.webp" alt="RR Board stacked panels" class="lg:hidden w-full h-[240px] object-cover rounded" />

      <div class="flex flex-col sm:flex-row gap-3">
        <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] border border-[#0614281F] rounded-xl">
          <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">{{ t('rrBoardIntro.ctaConsult') }}</span>
          <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
        </a>
        <a href="https://w4c.id/LVPGoodsCatalogue" download target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-[#005FE7] rounded-xl">
          <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-white whitespace-nowrap">{{ t('rrBoardIntro.ctaSpec') }}</span>
          <Icon name="lucide:download" class="w-4 h-4 text-white" />
        </a>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
      class="hidden lg:flex w-full lg:w-[55%] shrink-0"
    >
      <img src="/images/board-1.webp" alt="RR Board stacked panels" class="w-full h-[420px] object-cover rounded" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
