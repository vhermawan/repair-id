<template>
  <section class="w-full flex flex-col gap-8 lg:gap-12 p-[0_20px_64px] lg:p-[0_48px_104px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="lg:w-[740px] flex flex-col gap-4"
    >
      <span class="font-dm-sans font-bold text-[10px] tracking-[1.4px] text-blue-accent whitespace-nowrap">{{ t('customProjectPage.order.tag') }}</span>
      <h2 class="font-dm-sans font-bold text-[30px] leading-[34px] lg:text-[46px] lg:leading-[49px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
        {{ t('customProjectPage.order.heading') }}
      </h2>
    </div>

    <ol class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 border-t border-[#0614281A]">
      <li
        v-for="(num, i) in steps"
        :key="num"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-2.5 pt-6 lg:pt-7 pr-6"
      >
        <span class="font-dm-sans font-medium text-[11px] tracking-[1.2px] text-blue-accent">{{ num }}</span>
        <h3 class="font-dm-sans font-bold text-[20px] leading-[24px] tracking-[-0.6px] text-navy">
          {{ t(`customProjectPage.order.${num}.title`) }}
        </h3>
        <p class="font-dm-sans text-[13px] leading-[20px] text-[#0C2244]">
          {{ t(`customProjectPage.order.${num}.body`) }}
        </p>
      </li>
    </ol>

    <div class="flex flex-col sm:flex-row gap-3">
      <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-blue-accent rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('customProjectPage.order.ctaOrder') }}</span>
        <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
      </a>
      <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-[26px] py-3.5 [outline:1px_solid_#06142833] [outline-offset:-0.5px] rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('customProjectPage.order.ctaDiscuss') }}</span>
        <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = ['01', '02', '03', '04']
</script>
