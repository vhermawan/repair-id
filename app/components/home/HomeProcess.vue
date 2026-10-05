<template>
  <section class="w-full bg-white flex flex-col gap-10 lg:gap-[56px] p-[64px_20px] lg:p-[104px_48px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="w-full flex flex-col lg:flex-row gap-4 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <span class="font-dm-sans font-bold text-[10px] tracking-[1.4px] text-[#005FE7] whitespace-nowrap">{{ t('impact.tag') }}</span>
      <p class="lg:w-[620px] shrink-0 font-dm-sans text-[16px] leading-[24px] text-navy">
        {{ t('impact.body') }}
      </p>
    </div>

    <div class="w-full flex flex-col sm:flex-row border-t border-[#0614281F]">
      <div
        v-for="(stat, i) in stats" :key="i"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex-1 flex flex-col gap-[10px] pt-6 sm:pt-9 pr-8"
      >
        <span class="font-dm-sans font-bold text-[44px] leading-[44px] tracking-[-1.6px] lg:text-[64px] lg:leading-[64px] lg:tracking-[-2.4px] text-navy whitespace-nowrap">{{ t(stat.valueKey) }}</span>
        <p class="max-w-[240px] font-dm-sans text-[13px] leading-[20px] text-[#0C2244]">{{ t(stat.unitKey) }} {{ t(stat.descKey) }}</p>
      </div>
    </div>
  </section>

  <img
    src="/images/home/impact-waste.webp"
    :alt="t('impact.imageCaption')"
    loading="lazy"
    class="w-full h-[200px] lg:h-[300px] object-cover"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { valueKey: 'impact.stat1.value', unitKey: 'impact.stat1.unit', descKey: 'impact.stat1.desc' },
  { valueKey: 'impact.stat2.value', unitKey: 'impact.stat2.unit', descKey: 'impact.stat2.desc' },
  { valueKey: 'impact.stat3.value', unitKey: 'impact.stat3.unit', descKey: 'impact.stat3.desc' },
]
</script>
