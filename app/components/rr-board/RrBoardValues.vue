<template>
  <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-navy-deep">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end"
    >
      <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.3px] text-[#A9C9FF]">
          {{ t('rrPage.s2.tag') }}
        </span>
        <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-cream">
          {{ t('rrPage.s2.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-cream/65">
        {{ t('rrPage.s2.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
      <div
        v-for="(val, i) in coreValues" :key="val.index"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        class="flex flex-col gap-4 pt-6 border-t border-cream/18"
      >
        <span class="font-mono text-[11px] tracking-[1px] text-[#A9C9FF99]">{{ val.index }}</span>
        <h3 class="font-dm-sans font-semibold text-[22px] leading-[27px] lg:text-[24px] lg:leading-[29px] tracking-[-0.8px] text-cream">
          {{ t(val.titleKey) }}
        </h3>
        <p class="font-dm-sans text-[14px] leading-[23px] text-cream/65">{{ t(val.descKey) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const coreValues = [
  { index: '01', titleKey: 'rrPage.s2.val1.title', descKey: 'rrPage.s2.val1.desc' },
  { index: '02', titleKey: 'rrPage.s2.val2.title', descKey: 'rrPage.s2.val2.desc' },
  { index: '03', titleKey: 'rrPage.s2.val3.title', descKey: 'rrPage.s2.val3.desc' },
  { index: '04', titleKey: 'rrPage.s2.val4.title', descKey: 'rrPage.s2.val4.desc' },
  { index: '05', titleKey: 'rrPage.s2.val5.title', descKey: 'rrPage.s2.val5.desc' },
  { index: '06', titleKey: 'rrPage.s2.val6.title', descKey: 'rrPage.s2.val6.desc' },
]
</script>
