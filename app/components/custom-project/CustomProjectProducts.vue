<template>
  <section id="products" class="w-full flex flex-col gap-8 px-5 pt-20 scroll-mt-6 lg:flex-row lg:gap-0 lg:pl-[13vw] lg:pr-0 lg:pt-[8.44vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="font-dm-sans text-[40px] leading-[1.2] uppercase tracking-[0.05em] text-black lg:w-[24.87vw] lg:-mt-[0.29vw] lg:text-[4.17vw]"
    >
      {{ t('customProjectPage.products.heading') }}
    </h2>

    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-4 lg:gap-[1.0vw]">
      <a
        v-for="(item, i) in catalogues"
        :key="item.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col lg:w-[29.19vw]"
        :class="i === 0 && 'z-10'"
      >
        <span class="relative block">
          <span class="relative block w-full aspect-[560/708] overflow-hidden rounded-[10px]">
            <img
              :src="item.image"
              :alt="t(`${item.prefix}.cta`)"
              loading="lazy"
              class="absolute max-w-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              :class="item.crop ? '' : 'inset-0 w-full h-full object-cover'"
              :style="item.crop"
            />
          </span>
          <span
            v-if="i === 0"
            class="hidden sm:block absolute top-1/2 right-[-0.5rem] w-12 h-12 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2042EA] lg:right-[-0.5vw] lg:w-[3.93vw] lg:h-[3.93vw]"
            aria-hidden="true"
          />
        </span>
        <span class="mt-4 font-dm-sans text-base text-black lg:mt-[1.31vw] lg:w-[23.27vw] lg:text-[clamp(14px,1.04vw,20px)]">
          {{ t(`${item.prefix}.body`) }}
        </span>
        <span class="mt-4 self-start inline-flex items-center gap-3 h-9 px-4 rounded-full border border-black font-dm-sans text-base text-black transition-colors group-hover:bg-black group-hover:text-white lg:mt-[1.3vw] lg:h-[1.8vw] lg:gap-[0.9vw] lg:px-[0.8vw] lg:text-[clamp(14px,1.04vw,20px)]">
          {{ t(`${item.prefix}.cta`) }}
          <img src="/images/home/arrow-up-right.svg" alt="" width="13" height="14" class="w-3 h-3 lg:w-[0.63vw] lg:h-[0.63vw] group-hover:invert" />
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const catalogues = [
  {
    prefix: 'customProjectPage.explore.catalogue',
    image: '/images/custom-project/redesign/product-catalogue.webp',
    href: 'https://w4c.id/RepairProjectCatalogue',
    crop: { width: '229.39%', height: '120.96%', left: '-28.49%', top: '-20.96%' },
  },
  {
    prefix: 'customProjectPage.explore.events',
    image: '/images/custom-project/redesign/product-events.webp',
    href: 'https://w4c.id/RepairForEvents',
  },
]
</script>
