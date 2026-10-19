<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 px-5 py-20 lg:p-[140px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col gap-4"
    >
      <HomeSectionLabel>{{ t('customProjectPage.order.eyebrow') }}</HomeSectionLabel>
      <h2 class="lg:w-[740px] font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('customProjectPage.order.heading') }}
      </h2>
    </div>

    <ol class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
      <li
        v-for="(num, i) in steps"
        :key="num"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-3 pt-6 pr-6 border-t border-[#E3DFD6]"
      >
        <span class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] text-[#5A5D63]">{{ num }}</span>
        <h3 class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] tracking-[-0.4px]">
          {{ t(`customProjectPage.order.${num}.title`) }}
        </h3>
        <p class="font-dm-sans text-[#5A5D63] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[29px]">
          {{ t(`customProjectPage.order.${num}.body`) }}
        </p>
      </li>
    </ol>

    <div class="flex flex-col sm:flex-row gap-3 pt-4">
      <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] bg-[#111317] hover:bg-[#0B5FFF] rounded-full transition-colors">
        <span class="font-dm-sans text-[16px] leading-[21px] text-white whitespace-nowrap">{{ t('customProjectPage.order.ctaDiscuss') }}</span>
        <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = ['01', '02', '03', '04']
</script>
