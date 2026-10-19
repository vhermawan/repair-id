<template>
  <section class="w-full flex flex-col lg:flex-row gap-10 lg:gap-[133px] lg:items-center px-5 py-20 lg:p-[140px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full lg:w-[628px] lg:max-w-[48%] shrink-0 aspect-[4/5] rounded-[4px] border border-[#E3DFD6] overflow-hidden"
    >
      <img src="/images/home/trash.webp" :alt="t('whyPlastic.imageAlt')" loading="lazy" class="w-full h-full object-cover" />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
      class="flex-1 flex flex-col gap-6"
    >
      <HomeSectionLabel>{{ t('whyPlastic.label') }}</HomeSectionLabel>
      <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('whyPlastic.heading') }}
      </h2>
      <p class="font-dm-sans text-[#5A5D63] text-[18px] leading-[29px]">
        {{ t('whyPlastic.body') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
