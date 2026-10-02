<template>
  <section class="w-full flex flex-col gap-10 lg:gap-[56px] p-[64px_20px] lg:p-[104px_48px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <div class="lg:w-[740px] flex flex-col gap-4">
        <span class="font-mono text-[10px] tracking-[1.4px] text-blue-accent whitespace-nowrap">{{ t('contactPage.steps.tag') }}</span>
        <h2 class="font-dm-sans font-bold text-[30px] leading-[34px] lg:text-[46px] lg:leading-[49px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
          {{ t('contactPage.steps.heading') }}
        </h2>
      </div>
      <p class="lg:w-[300px] shrink-0 font-dm-sans text-[14px] leading-[22px] text-[#0C2244]">
        {{ t('contactPage.steps.note') }}
      </p>
    </div>

    <ol class="w-full grid grid-cols-1 lg:grid-cols-4 border-t border-[#0614281F]">
      <li
        v-for="(step, i) in steps" :key="step.num"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-5 p-[24px_0_28px] lg:p-[28px_56px_36px_0] border-b lg:border-b-0 lg:border-r lg:last:border-r-0 border-[#0614281F]"
      >
        <div class="w-full flex justify-between items-center">
          <span class="font-mono text-[11px] tracking-[1.2px] text-blue-accent">{{ step.num }}</span>
          <Icon :name="step.icon" size="18" class="text-[#0C2244]" />
        </div>
        <div class="w-full flex flex-col gap-[10px]">
          <h3 class="font-dm-sans font-semibold text-[19px] leading-[24px] lg:text-[21px] lg:leading-[25px] tracking-[-0.6px] text-navy">
            {{ t(`contactPage.steps.${step.num}.title`) }}
          </h3>
          <p class="font-dm-sans text-[14px] leading-[22px] text-[#0C2244]">
            {{ t(`contactPage.steps.${step.num}.body`) }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = [
  { num: '01', icon: 'lucide:layout-grid' },
  { num: '02', icon: 'lucide:message-square' },
  { num: '03', icon: 'lucide:factory' },
  { num: '04', icon: 'lucide:truck' },
]
</script>
