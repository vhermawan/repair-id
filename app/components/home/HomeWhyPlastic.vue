<template>
  <section class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center p-[64px_20px] lg:p-[104px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex-1 flex flex-col gap-5 lg:gap-6"
    >
      <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] tracking-[-1.2px] lg:text-[46px] lg:leading-[49px] lg:tracking-[-1.8px] text-navy">
        {{ t('whyPlastic.heading') }}
      </h2>
      <p class="max-w-[580px] font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
        {{ t('whyPlastic.body') }}
      </p>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
      class="w-full lg:w-[600px] lg:max-w-[48%] shrink-0"
    >
      <img src="/images/home/trash.webp" :alt="t('whyPlastic.imageAlt')" loading="lazy" class="w-full aspect-[4/3] object-cover" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
