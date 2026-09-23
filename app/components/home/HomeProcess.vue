<template>
  <section class="w-full bg-white flex flex-col lg:flex-row gap-8 lg:gap-[56px] p-[40px_20px_64px] lg:p-[48px_48px_104px_48px]">
    <!-- Label Column -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col gap-[10px] lg:w-[280px] shrink-0"
    >
      <span class="font-mono text-[11px] leading-[17px] tracking-[1.2px] text-[#005FE7] whitespace-nowrap">{{ t('impact.tag') }}</span>
      <span class="font-dm-sans text-[16px] leading-[24px] text-[#061428A6] whitespace-nowrap">{{ t('impact.heading') }}</span>
    </div>

    <!-- Content Column -->
    <div class="flex-1 flex flex-col gap-10 lg:gap-[56px]">
      <!-- Statement -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        class="font-dm-sans text-[22px] leading-[32px] lg:text-[34px] lg:leading-[45px] tracking-[-1px] text-[#061428] w-full"
      >
        {{ t('impact.body') }}
      </p>

      <!-- Stats -->
      <div class="w-full flex flex-col sm:flex-row gap-8 sm:gap-[48px]">
        <div
          v-for="(stat, i) in stats" :key="i"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 + i * 100 } }"
          class="flex-1 flex flex-col gap-[10px]"
        >
          <div class="w-fit flex flex-row gap-[7px] items-end">
            <span class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[38px] lg:leading-[42px] tracking-[-1.5px] text-[#061428] whitespace-nowrap">{{ t(stat.valueKey) }}</span>
            <span class="font-mono text-[13px] leading-[25px] tracking-[0.5px] text-[#005FE7] whitespace-nowrap">{{ t(stat.unitKey) }}</span>
          </div>
          <p class="font-dm-sans text-[13.5px] leading-[22px] text-[#06142899] w-full">{{ t(stat.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { valueKey: 'impact.stat1.value', unitKey: 'impact.stat1.unit', descKey: 'impact.stat1.desc' },
  { valueKey: 'impact.stat2.value', unitKey: 'impact.stat2.unit', descKey: 'impact.stat2.desc' },
  { valueKey: 'impact.stat3.value', unitKey: 'impact.stat3.unit', descKey: 'impact.stat3.desc' },
]
</script>
