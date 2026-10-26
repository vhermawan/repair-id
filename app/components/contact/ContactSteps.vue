<template>
  <section class="w-full flex flex-col gap-10 lg:gap-[56px] p-[64px_20px] lg:p-[104px_48px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[64px] lg:justify-between lg:items-end"
    >
      <div class="lg:flex-1 lg:max-w-[740px] flex flex-col gap-4">
        <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
          {{ t('contactPage.steps.heading') }}
        </h2>
      </div>
      <p class="lg:w-[480px] xl:w-[560px] 2xl:w-[620px] shrink-0 font-dm-sans text-[#5A5D63] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px]">
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
          <span class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] text-[#5A5D63]">{{ step.num }}</span>
          <Icon :name="step.icon" size="18" class="text-[#5A5D63]" />
        </div>
        <div class="w-full flex flex-col gap-[10px]">
          <h3 class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] tracking-[-0.4px]">
            {{ t(`contactPage.steps.${step.num}.title`) }}
          </h3>
          <p class="font-dm-sans text-[#5A5D63] text-[16px] leading-[26px]">
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
