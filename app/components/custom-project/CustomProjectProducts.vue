<template>
  <section id="products" class="w-full flex flex-col gap-8 lg:gap-10 p-[0_20px_64px] lg:p-[0_48px_104px] scroll-mt-24">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="font-dm-sans font-bold text-[26px] lg:text-[30px] tracking-[-1px] text-navy"
    >
      {{ t('customProjectPage.products.heading') }}
    </h2>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(catalogue, i) in catalogues"
        :key="catalogue.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
        class="flex flex-col gap-6 p-4 lg:p-5 bg-cream"
      >
        <img
          :src="catalogue.image"
          :alt="t(`${catalogue.prefix}.cta`)"
          loading="lazy"
          class="w-full aspect-[4/3] object-cover"
        >
        <div class="flex flex-col gap-5 p-[0_4px_8px]">
          <p class="font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
            {{ t(`${catalogue.prefix}.body`) }}
          </p>
          <div>
            <a :href="catalogue.href" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-[26px] py-3.5 bg-blue-accent rounded-full">
              <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t(`${catalogue.prefix}.cta`) }}</span>
              <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
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
