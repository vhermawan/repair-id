<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:w-[780px] font-dm-sans font-bold type-h2 text-navy">
        {{ t('rrPage.features.heading') }}
      </h2>
      <p class="lg:w-[380px] shrink-0 font-dm-sans type-body text-[#0C2244]">
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
        <img :src="feature.image" :alt="t(`${feature.prefix}.title`)" loading="lazy" :style="feature.position ? { objectPosition: feature.position } : undefined" class="w-full md:w-1/2 shrink-0 aspect-[4/3] object-cover" />
        <div class="flex-1 flex flex-col gap-4">
          <span class="font-dm-sans font-medium type-caption tracking-[1.2px] text-blue-accent">— {{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="font-dm-sans font-semibold type-h3 text-navy">
            {{ t(`${feature.prefix}.title`) }}
          </h3>
          <p class="max-w-[520px] font-dm-sans type-body text-[#0C2244]">
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
        <span class="font-dm-sans type-cta font-semibold text-white whitespace-nowrap">{{ t('rrPage.features.ctaSpec') }}</span>
        <Icon name="lucide:download" class="w-4 h-4 text-white" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features: { prefix: string, image: string, position?: string }[] = [
  { prefix: 'rrPage.features.f1', image: '/images/rr-board/commercial.webp' },
  { prefix: 'rrPage.features.f2', image: '/images/rr-board/suitable.webp' },
  { prefix: 'rrPage.features.f3', image: '/images/home/workshop.webp', position: '50% 55%' },
  { prefix: 'rrPage.features.f4', image: '/images/rr-board/bendable.webp' },
]
</script>
