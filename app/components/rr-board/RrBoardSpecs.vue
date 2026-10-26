<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[64px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:flex-1 lg:max-w-[780px] font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('rrPage.specs.heading') }}
      </h2>
      <p class="lg:w-[480px] xl:w-[560px] shrink-0 font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('rrPage.specs.sub') }}
      </p>
    </div>

    <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-start">
      <div
        v-motion
        :initial="{ opacity: 0, x: 40 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 100 } }"
        class="w-full lg:w-[520px] shrink-0 flex flex-col gap-[2px]"
      >
        <img src="/images/rr-board/board-1.webp" :alt="t('rrPage.specs.imageAlt')" class="w-full h-[240px] sm:h-[300px] lg:h-[360px] object-cover" />
        <div class="w-full flex gap-[2px]">
          <div v-for="finish in finishes" :key="finish.labelKey" class="relative flex-1 h-[110px] lg:h-[130px] overflow-hidden">
            <img :src="finish.image" :alt="t(finish.labelKey)" class="absolute inset-0 w-full h-full object-cover" />
            <span class="absolute left-2.5 bottom-2.5 font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#F3F0E9]">{{ t(finish.labelKey) }}</span>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
        class="flex-1 w-full flex flex-col border-t border-[#E3DFD6]"
      >
        <div
          v-for="spec in rows" :key="spec.prefix"
          class="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:justify-between sm:items-end py-5 lg:py-[22px] border-b border-[#E3DFD6] last:border-b-0"
        >
          <div class="flex flex-col gap-1.5">
            <span class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#111317]">{{ t(`${spec.prefix}.key`) }}</span>
            <span class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px]">{{ t(`${spec.prefix}.value`) }}</span>
          </div>
          <span class="sm:w-[200px] shrink-0 font-dm-sans text-[15px] leading-[22px] text-[#5A5D63] sm:text-right">{{ t(`${spec.prefix}.note`) }}</span>
        </div>

        <div class="flex flex-col gap-3 pt-[22px] border-t border-[#E3DFD6]">
          <span class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#111317]">{{ t('rrPage.specs.color.key') }}</span>
          <p class="font-dm-sans font-normal text-[#111317] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">{{ t('rrPage.specs.color.body') }}</p>
          <p class="font-dm-sans text-[16px] leading-[26px] text-[#5A5D63]">{{ t('rrPage.specs.color.note') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const finishes = [
  { image: '/images/rr-board/board-2.webp', labelKey: 'rrPage.specs.finishMozaic' },
  { image: '/images/rr-board/board-3.webp', labelKey: 'rrPage.specs.finishDark' },
]

const rows = [
  { prefix: 'rrPage.specs.size' },
  { prefix: 'rrPage.specs.thickness' },
  { prefix: 'rrPage.specs.weight' },
  { prefix: 'rrPage.specs.price' },
]
</script>
