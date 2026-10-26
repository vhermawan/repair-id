<template>
  <section id="products" class="w-full flex flex-col gap-10 lg:gap-12 px-5 py-20 lg:p-[140px_48px] bg-white scroll-mt-24">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col gap-4"
    >
      <HomeSectionLabel>{{ t('customProjectPage.products.eyebrow') }}</HomeSectionLabel>
      <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('customProjectPage.products.heading') }}
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <a
        v-for="(catalogue, i) in catalogues"
        :key="catalogue.prefix"
        v-motion
        :href="catalogue.href"
        target="_blank"
        rel="noopener noreferrer"
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
        class="group relative h-[440px] lg:h-[560px] flex flex-col justify-end rounded-[8px] overflow-hidden"
      >
        <img
          :src="catalogue.image"
          :alt="t(`${catalogue.prefix}.title`)"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
        <div class="relative w-full flex flex-col gap-3 p-[120px_24px_24px] lg:p-[160px_32px_32px] [background-image:linear-gradient(180deg,_#11131700_0%,_#111317cc_100%)]">
          <h3 class="font-dm-sans font-normal text-white text-[24px] leading-[28px] lg:text-[28px] lg:leading-[32px] tracking-[-0.6px]">
            {{ t(`${catalogue.prefix}.title`) }}
          </h3>
          <p class="font-dm-sans text-white/70 text-[16px] leading-[25px] lg:text-[17px] lg:leading-[26px]">
            {{ t(`${catalogue.prefix}.body`) }}
          </p>
          <div class="w-full flex flex-wrap gap-x-4 gap-y-2 pt-2 justify-between items-center">
            <span class="inline-flex items-center gap-2 font-dm-sans text-[16px] leading-[21px] text-white">
              {{ t(`${catalogue.prefix}.cta`) }}
              <Icon name="lucide:arrow-up-right" class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span class="font-dm-mono text-[12px] leading-[15px] lg:text-[12.5px] tracking-[1px] uppercase text-white/70">
              {{ t(`${catalogue.prefix}.meta`) }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const catalogues = [
  { prefix: 'customProjectPage.explore.catalogue', image: '/images/custom-project/product-display-table.webp', href: 'https://w4c.id/RepairProjectCatalogue' },
  { prefix: 'customProjectPage.explore.events', image: '/images/custom-project/product-keychain.webp', href: 'https://w4c.id/RepairForEvents' },
]
</script>
