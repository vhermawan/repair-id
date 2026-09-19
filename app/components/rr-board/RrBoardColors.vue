<template>
  <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-[#EDF3FE]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end"
    >
      <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
          {{ t('rrPage.s3.tag') }}
        </span>
        <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
          {{ t('rrPage.s3.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
        {{ t('rrPage.s3.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="(swatch, i) in swatches" :key="swatch.code"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: i * 80 } }"
        class="flex flex-col gap-3"
      >
        <div class="w-full h-[140px] lg:h-[190px] rounded-sm" :style="{ backgroundColor: swatch.color }" />
        <div class="flex flex-col gap-1">
          <div class="flex justify-between items-center">
            <span class="font-dm-sans font-semibold text-[15px] lg:text-base tracking-[-0.4px] text-navy-deep">{{ swatch.name }}</span>
            <span class="font-mono text-[10px] tracking-[0.8px] text-blue-accent">{{ swatch.code }}</span>
          </div>
          <span class="font-dm-sans text-[12px] text-navy/65">{{ t(swatch.finishKey) }}</span>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
      class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[60px] lg:justify-between lg:items-center p-8 lg:p-10 bg-navy-deep"
    >
      <div class="flex-1 flex flex-col gap-2.5 max-w-[640px]">
        <h3 class="font-dm-sans font-bold text-[24px] leading-[28px] lg:text-[30px] lg:leading-[35px] tracking-[-1px] lg:tracking-[-1.2px] text-cream">
          {{ t('rrPage.s3.ctaHeading') }}
        </h3>
        <p class="font-dm-sans text-[13px] leading-[20px] lg:text-[14px] lg:leading-[22px] text-cream/65">
          {{ t('rrPage.s3.ctaBody') }}
        </p>
      </div>
      <div class="flex flex-col gap-2.5 lg:items-end">
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] bg-cream">
            <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('rrPage.s3.ctaDownloadColour') }}</span>
          </a>
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#F4F1E980] [outline-offset:-0.5px]">
            <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">{{ t('rrPage.s3.ctaDownloadCatalog') }}</span>
          </a>
        </div>
        <span class="font-mono text-[10px] tracking-[0.8px] text-[#A9C9FF99]">
          {{ t('rrPage.s3.ctaNote') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const swatches = [
  { name: 'Cloud', code: 'RR-01', color: '#E4E1D6', finishKey: 'swatch.cloud' },
  { name: 'Sand', code: 'RR-02', color: '#D6C4A0', finishKey: 'swatch.sand' },
  { name: 'Terracotta', code: 'RR-03', color: '#B4553C', finishKey: 'swatch.terracotta' },
  { name: 'Moss', code: 'RR-04', color: '#5A6B4C', finishKey: 'swatch.moss' },
  { name: 'Ocean', code: 'RR-05', color: '#2D5B7A', finishKey: 'swatch.ocean' },
  { name: 'Cobalt', code: 'RR-06', color: '#1F4FB0', finishKey: 'swatch.cobalt' },
  { name: 'Graphite', code: 'RR-07', color: '#3A3A3C', finishKey: 'swatch.graphite' },
  { name: 'Midnight', code: 'RR-08', color: '#14202E', finishKey: 'swatch.midnight' },
]
</script>
