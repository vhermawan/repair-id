<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:w-[780px] font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy">
        {{ t('rrPage.features.heading') }}
      </h2>
      <p class="lg:w-[380px] shrink-0 font-dm-sans text-[16px] leading-[25px] lg:text-[17px] lg:leading-[27px] text-[#0C2244]">
        {{ t('rrPage.features.sub') }}
      </p>
    </div>

    <div class="w-full flex flex-col">
      <article
        v-for="(feature, i) in features" :key="feature.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="w-full flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-16 py-6 lg:py-8 border-t border-[#0614281A]"
      >
        <img :src="feature.image" :alt="t(`${feature.prefix}.title`)" loading="lazy" class="w-full md:w-1/2 shrink-0 aspect-[3/2] object-cover" />
        <div class="flex-1 flex flex-col gap-4">
          <span class="font-dm-sans font-medium text-[12px] tracking-[1.2px] text-blue-accent">— {{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="font-dm-sans font-semibold text-[26px] leading-[31px] lg:text-[34px] lg:leading-[39px] tracking-[-0.8px] lg:tracking-[-1.2px] text-navy">
            {{ t(`${feature.prefix}.title`) }}
          </h3>
          <p class="max-w-[520px] font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
            {{ t(`${feature.prefix}.body`) }}
          </p>
        </div>
      </article>
    </div>

    <div class="w-full flex justify-center">
      <a
        href="https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2.5 px-[26px] py-[15px] bg-blue-accent rounded-full"
      >
        <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('rrPage.features.ctaSpec') }}</span>
        <Icon name="lucide:download" class="w-4 h-4 text-white" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features = [
  { prefix: 'rrPage.features.f1', image: '/images/rr-board/commercial.webp' },
  { prefix: 'rrPage.features.f2', image: '/images/rr-board/suitable.webp' },
  { prefix: 'rrPage.features.f3', image: '/images/rr-board/plastic.webp' },
  { prefix: 'rrPage.features.f4', image: '/images/rr-board/bendable.webp' },
]
</script>
