<template>
  <section class="w-full flex flex-col gap-5 lg:gap-7 p-[40px_20px] lg:p-[64px_48px_72px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end lg:gap-[60px]"
    >
      <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7] whitespace-nowrap">{{ t('process.tag') }}</span>
      <span class="font-dm-sans text-[13px] lg:text-sm text-[#061428A6]">
        {{ t('process.subtitle') }}
      </span>
    </div>

    <div class="w-full grid grid-cols-2 lg:flex gap-3 lg:gap-4">
      <div
        v-for="(step, i) in processSteps" :key="step.index"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex-1 flex flex-col gap-3 lg:gap-[14px]"
      >
        <div class="w-full h-[140px] lg:h-[230px] bg-cover bg-center rounded overflow-hidden"
          :style="{ backgroundImage: `url(${step.image})` }" />
        <div class="flex flex-col gap-[4px] lg:gap-[5px]">
          <div class="flex items-center gap-2 lg:gap-[10px]">
            <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#005FE7]">{{ step.index }}</span>
            <span class="font-dm-sans font-bold text-[14px] lg:text-[18px] tracking-[-0.5px] text-navy">{{ t(step.titleKey) }}</span>
          </div>
          <p class="font-dm-sans text-[11px] lg:text-[13px] leading-[17px] lg:leading-[20px] text-[#06142899]">{{ t(step.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const processSteps = [
  { index: '01', titleKey: 'process.step1.title', descKey: 'process.step1.desc', image: '/images/process-collect.jpg' },
  { index: '02', titleKey: 'process.step2.title', descKey: 'process.step2.desc', image: '/images/process-shred.jpg' },
  { index: '03', titleKey: 'process.step3.title', descKey: 'process.step3.desc', image: '/images/process-press.jpg' },
  { index: '04', titleKey: 'process.step4.title', descKey: 'process.step4.desc', image: '/images/process-panel.jpg' },
]
</script>
