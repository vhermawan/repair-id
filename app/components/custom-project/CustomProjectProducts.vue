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

    <div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 lg:gap-x-4 lg:gap-y-7">
      <div
        v-for="(product, i) in products"
        :key="product.labelKey"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (i % 3) * 100 } }"
        class="flex flex-col gap-3 lg:gap-3.5"
      >
        <img
          :src="product.image"
          :alt="t(product.labelKey)"
          loading="lazy"
          class="w-full h-[180px] sm:h-[240px] lg:h-[300px] object-cover"
        >
        <span class="font-dm-sans font-semibold text-[14px] lg:text-[15px] text-navy">
          {{ t(product.labelKey) }}
        </span>
      </div>
    </div>

    <div class="w-full flex justify-center pt-4">
      <NuxtLink to="/contact" class="flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-blue-accent rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('customProjectPage.products.cta') }}</span>
        <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const products = [
  { image: '/images/custom-project/product-display-table.webp', labelKey: 'customProjectPage.products.displayTable' },
  { image: '/images/custom-project/product-waste-bin.webp', labelKey: 'customProjectPage.products.wasteBin' },
  { image: '/images/custom-project/product-furniture.webp', labelKey: 'customProjectPage.products.furniture' },
  { image: '/images/custom-project/product-placard.webp', labelKey: 'customProjectPage.products.placard' },
  { image: '/images/custom-project/product-keychain.webp', labelKey: 'customProjectPage.products.keychain' },
  { image: '/images/custom-project/product-medals.webp', labelKey: 'customProjectPage.products.medals' },
  { image: '/images/custom-project/product-phone-holder.webp', labelKey: 'customProjectPage.products.phoneHolder' },
]
</script>
