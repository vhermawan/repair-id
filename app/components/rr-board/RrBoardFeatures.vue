<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[64px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:flex-1 lg:max-w-[780px] font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('rrPage.features.heading') }}
      </h2>
      <p class="lg:w-[480px] xl:w-[560px] shrink-0 font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('rrPage.features.sub') }}
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8">
      <article
        v-for="(feature, i) in features" :key="feature.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        tabindex="0"
        class="group flex flex-col gap-3 border-t border-[#E3DFD6] outline-none"
      >
        <div class="relative w-full h-[400px] lg:h-[430px] rounded-[4px] overflow-hidden">
          <img
            :src="feature.image"
            :alt="t(`${feature.prefix}.title`)"
            loading="lazy"
            :style="feature.position ? { objectPosition: feature.position } : undefined"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
          />
          <div class="absolute inset-0 flex flex-col justify-end gap-2 p-[20px_18px_18px] [background-image:linear-gradient(180deg,_#00000000_25%,_#000000_100%)] transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
            <h3 class="font-dm-sans font-normal text-white text-[22px] leading-[27px] tracking-[-0.4px]">
              {{ t(`${feature.prefix}.title`) }}
            </h3>
            <p class="font-dm-sans text-[14px] leading-[22px] text-white/80">
              {{ t(`${feature.prefix}.body`) }}
            </p>
          </div>
        </div>
        <div class="flex gap-2.5 pt-2.5 border-t border-[#E3DFD6]">
          <span class="font-dm-mono text-[12px] leading-[15px] tracking-[1.3px] text-[#5A5D63] whitespace-nowrap">( {{ String(i + 1).padStart(2, '0') }} )</span>
          <span aria-hidden="true" class="flex-1 font-dm-mono text-[12px] leading-[15px] tracking-[1.3px] uppercase text-[#111317]">{{ t(`${feature.prefix}.title`) }}</span>
        </div>
      </article>
    </div>

    <div class="w-full flex justify-center">
      <a
        href="https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2.5 px-[26px] py-[15px] bg-[#111317] hover:bg-[#0B5FFF] rounded-full transition-colors"
      >
        <span class="font-dm-sans text-[16px] leading-[21px] text-white whitespace-nowrap">{{ t('rrPage.features.ctaSpec') }}</span>
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
