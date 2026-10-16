<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <div class="lg:w-[780px] flex flex-col gap-3 lg:gap-[14px]">
        <h2 class="font-dm-sans font-bold type-h2 text-navy">
          {{ t('rrPage.specs.heading') }}
        </h2>
      </div>
      <p class="lg:w-[340px] shrink-0 font-dm-sans type-body text-[#0C2244]">
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
            <span class="absolute left-2.5 bottom-2.5 font-dm-sans font-medium type-micro tracking-[1.2px] text-cream">{{ t(finish.labelKey) }}</span>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
        class="flex-1 w-full flex flex-col border-t border-[#0614281A]"
      >
        <div
          v-for="spec in specs" :key="spec.prefix"
          class="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:justify-between sm:items-end py-5 lg:py-[22px] border-b border-[#0614281A]"
        >
          <div class="flex flex-col gap-1.5">
            <span class="font-dm-sans font-medium type-micro tracking-[1.2px] text-blue-accent">{{ t(`${spec.prefix}.key`) }}</span>
            <span class="font-dm-sans font-semibold type-h4 text-navy">{{ t(`${spec.prefix}.value`) }}</span>
          </div>
          <span class="sm:w-[200px] shrink-0 font-dm-sans type-caption text-navy/45 sm:text-right">{{ t(`${spec.prefix}.note`) }}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:justify-between sm:items-end py-5 lg:p-[24px_0_26px]">
          <div class="flex flex-col gap-1.5">
            <span class="font-dm-sans font-medium type-micro tracking-[1.2px] text-blue-accent">{{ t('rrPage.specs.price.key') }}</span>
            <span class="font-dm-sans font-semibold type-h4 text-navy">{{ t('rrPage.specs.price.value') }}</span>
          </div>
          <span class="sm:w-[200px] shrink-0 font-dm-sans type-caption text-navy/45 sm:text-right">{{ t('rrPage.specs.price.note') }}</span>
        </div>

        <div class="flex flex-col gap-3 pt-[22px]">
          <span class="font-dm-sans font-medium type-micro tracking-[1.2px] text-blue-accent">{{ t('rrPage.specs.color.key') }}</span>
          <p class="font-dm-sans font-semibold type-h5 text-navy">{{ t('rrPage.specs.color.body') }}</p>
          <p class="font-dm-sans type-body-sm text-[#0C2244]">{{ t('rrPage.specs.color.note') }}</p>
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

const specs = [
  { prefix: 'rrPage.specs.size' },
  { prefix: 'rrPage.specs.thickness' },
  { prefix: 'rrPage.specs.weight' },
]
</script>
