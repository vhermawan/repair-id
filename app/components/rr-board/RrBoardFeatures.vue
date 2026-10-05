<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <p class="lg:w-[340px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[14.5px] lg:leading-[24px] text-[#0C2244]">
        {{ t('rrPage.features.sub') }}
      </p>
      <div class="lg:w-[780px] flex flex-col gap-3 lg:gap-[14px] lg:items-end">
        <span class="font-mono text-[10px] tracking-[1.4px] text-blue-accent">{{ t('rrPage.features.tag') }}</span>
        <h2 class="font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy lg:text-right">
          {{ t('rrPage.features.heading') }}
        </h2>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <article
        v-for="(feature, i) in features" :key="feature.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (i % 2) * 120 } }"
        class="flex flex-col gap-5 py-3 lg:p-[14px] border-t border-[#0614281A]"
      >
        <img :src="feature.image" :alt="t(`${feature.prefix}.title`)" loading="lazy" class="w-full h-[220px] lg:h-[260px] object-cover" />
        <div class="flex flex-col gap-3 p-[4px_8px_12px] lg:p-[4px_12px_14px]">
          <div class="flex items-center gap-3">
            <span class="font-mono text-[10.5px] tracking-[1.2px] text-blue-accent whitespace-nowrap">— {{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="flex-1 font-dm-sans font-semibold text-[20px] leading-[25px] lg:text-[24px] lg:leading-[29px] tracking-[-0.6px] lg:tracking-[-0.9px] text-navy">
              {{ t(`${feature.prefix}.title`) }}
            </h3>
          </div>
          <p class="font-dm-sans text-[14px] leading-[22px] lg:text-[14.5px] lg:leading-[23px] text-[#0C2244]">
            {{ t(`${feature.prefix}.body`) }}
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span
              v-for="tag in ['tag1', 'tag2']" :key="tag"
              class="px-[13px] py-[7px] [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full font-mono text-[9.5px] tracking-[0.8px] text-[#0C2244]"
            >{{ t(`${feature.prefix}.${tag}`) }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features = [
  { prefix: 'rrPage.features.f1', image: '/images/rr-board/commercial.webp' },
  { prefix: 'rrPage.features.f2', image: '/images/rr-board/bendable.webp' },
  { prefix: 'rrPage.features.f3', image: '/images/rr-board/suitable.webp' },
  { prefix: 'rrPage.features.f4', image: '/images/rr-board/plastic.webp' },
]
</script>
