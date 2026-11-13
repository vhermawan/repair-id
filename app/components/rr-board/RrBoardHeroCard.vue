<template>
  <div class="rr-card-drop w-full flex flex-col justify-between gap-10 px-5 py-10 bg-[#2042EA] text-white lg:w-[26.93vw] lg:min-h-[25.1vw] lg:gap-[1vw] lg:p-[2.93vw_2.4vw_2.82vw_3.42vw]">
    <div class="font-dm-sans">
      <p class="rr-card-item rr-card-item-1 font-semibold text-[72px] leading-none lg:text-[5vw] lg:leading-[0.833]">{{ t('rrPage.hero.statValue') }}</p>
      <p class="rr-card-item rr-card-item-2 mt-2 text-[56px] leading-none lg:mt-[0.6vw]" :class="locale === 'id' ? 'lg:text-[3.6vw]' : 'lg:text-[4.17vw]'">{{ t('rrPage.hero.cardLabel') }}</p>
    </div>
    <a
      :href="SPEC_SHEET_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="rr-card-item rr-card-item-3 self-start inline-flex items-center gap-3 px-5 py-1.5 bg-white rounded-full font-dm-sans text-base text-black whitespace-nowrap transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] lg:px-[1.03vw] lg:py-[0.3vw] lg:gap-[0.8vw] lg:text-[clamp(16px,1.04vw,20px)]"
    >
      {{ t('rrPage.hero.ctaSpec') }}
      <img src="/images/rr-board/redesign/arrow-black.svg" alt="" width="12" height="12" />
    </a>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const SPEC_SHEET_URL = 'https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view'
</script>
