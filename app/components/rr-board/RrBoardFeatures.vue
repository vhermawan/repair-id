<template>
  <section class="w-full bg-white font-dm-sans text-black pb-14 lg:pb-[12.5vw]">
    <div class="flex flex-col gap-5 px-5 pt-14 pb-8 lg:flex-row lg:gap-0 lg:pl-[18.17vw] lg:pr-0 lg:pt-[4.56vw] lg:pb-[4.76vw]">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-[40px] leading-[1.05] uppercase tracking-[0.05em] lg:w-[44.41vw] lg:text-[4.17vw] lg:leading-none">
        {{ t('rrPage.features.heading') }}
      </h2>
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
        class="flex flex-col items-start gap-5 lg:w-[19.59vw] lg:gap-[2.56vw] lg:pt-[0.8vw]">
        <p class="text-base leading-[1.3] lg:text-[clamp(16px,1.04vw,20px)]">{{ t('rrPage.features.sub') }}</p>
        <a
          href="https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-5 py-1.5 border border-black rounded-full text-base whitespace-nowrap transition-colors duration-200 hover:bg-black/5 lg:px-[1.03vw] lg:py-[0.25vw] lg:gap-[0.8vw] lg:text-[clamp(16px,1.04vw,20px)]"
        >
          {{ t('rrPage.features.ctaSpec') }}
          <img src="/images/rr-board/redesign/arrow-black.svg" alt="" width="12" height="12" />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[39.96vw_1fr]">
      <div class="relative w-full aspect-[767/828] lg:aspect-auto lg:sticky lg:top-0 lg:h-[43.15vw] lg:self-start">
        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="absolute inset-0">
          <div class="absolute inset-0 -scale-x-100">
            <RrBoardCrop src="/images/rr-board/redesign/feature-banner.webp" :alt="t('rrPage.features.heading')" :crop="[100, 138.86, 0, -19.43]" />
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <article
          v-for="(feature, i) in features" :key="feature.prefix"
          class="flex flex-col lg:flex-row lg:h-[18.56vw]"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="flex-1 flex flex-col justify-center gap-3 px-5 py-8 lg:gap-[2.2vw] lg:pl-[2.68vw] lg:pr-[3.3vw] lg:py-0 lg:relative">
            <span v-if="i > 0" class="hidden lg:block absolute top-0 left-[2.68vw] w-[29.83vw] h-px bg-[#B3B3B3]" aria-hidden="true" />
            <h3 class="text-[32px] leading-[1.1] lg:text-[2.08vw] lg:leading-[1.03] lg:max-w-[21vw]">{{ t(`${feature.prefix}.title`) }}</h3>
            <p class="text-base leading-[1.3] lg:text-[clamp(16px,1.04vw,20px)] lg:leading-[1.25]">{{ t(`${feature.prefix}.body`) }}</p>
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
            class="relative w-full aspect-[453/356] lg:w-[23.6vw] lg:h-full lg:aspect-auto shrink-0">
            <RrBoardCrop v-if="feature.crop" :src="feature.image" :alt="t(`${feature.prefix}.title`)" :crop="feature.crop" />
            <img v-else :src="feature.image" :alt="t(`${feature.prefix}.title`)" loading="lazy" class="absolute inset-0 w-full h-full object-cover object-bottom" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features: { prefix: string, image: string, crop?: [number, number, number, number] }[] = [
  { prefix: 'rrPage.features.f1', image: '/images/rr-board/redesign/feature-bigger.webp' },
  { prefix: 'rrPage.features.f2', image: '/images/rr-board/redesign/feature-water.webp' },
  { prefix: 'rrPage.features.f3', image: '/images/rr-board/redesign/feature-tools.webp', crop: [100, 190.74, 0, -45.37] },
  { prefix: 'rrPage.features.f4', image: '/images/rr-board/redesign/feature-curves.webp' },
]
</script>
