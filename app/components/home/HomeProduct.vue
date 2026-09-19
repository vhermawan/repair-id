<template>
  <section id="projects" class="w-full flex flex-col gap-8 lg:gap-12 p-[48px_20px] lg:p-[96px_48px] bg-cream">
    <div class="w-full flex flex-col gap-4 lg:flex-row lg:gap-20 lg:items-end">
      <div class="flex-1 flex flex-col gap-[10px] lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">{{ t('product.tag') }}</span>
        <h2 class="w-full font-dm-sans font-bold text-[28px] leading-[32px] lg:text-[46px] lg:leading-[51px] tracking-[-1.2px] lg:tracking-[-1.8px] text-navy">
          {{ t('product.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-dm-sans text-[13px] leading-[20px] lg:text-[15px] lg:leading-6 text-[#061428CC]">
        {{ t('product.subtitle') }}
      </p>
    </div>

    <div class="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div v-for="product in products" :key="product.titleKey" class="flex-1 flex flex-col bg-white overflow-hidden">
        <img :src="product.image" :alt="t(product.titleKey)" class="w-full h-[200px] lg:h-[340px] object-cover" />
        <div class="flex flex-col gap-2 lg:gap-3 p-5 lg:p-7">
          <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#005FE7]">{{ product.index }}</span>
          <h3 class="w-full font-dm-sans font-semibold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[32px] tracking-[-0.5px] lg:tracking-[-0.8px] text-navy">{{ t(product.titleKey) }}</h3>
          <p class="w-full font-dm-sans text-[13px] leading-[20px] lg:text-sm lg:leading-[22px] text-[#10201A99]">{{ t(product.descKey) }}</p>
          <NuxtLink :to="product.link" class="flex items-center gap-2 pt-1.5 lg:pt-2.5">
            <span class="font-dm-sans text-[13px] font-semibold text-[#005FE7]">{{ t('product.seeProduct') }}</span>
            <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-[#005FE7]" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-3.5">
      <NuxtLink to="#projects" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-[#005FE7]">
        <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-cream whitespace-nowrap">{{ t('product.ctaProject') }}</span>
        <Icon name="lucide:arrow-right" class="w-4 h-4 text-cream" />
      </NuxtLink>
      <a href="#" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] [outline:1px_solid_#06142833] [outline-offset:-0.5px]">
        <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
        <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">{{ t('product.ctaDiscuss') }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const products = [
  {
    index: '[ 01 ]',
    titleKey: 'product.item1.title',
    descKey: 'product.item1.desc',
    image: '/images/product-waste-bin.jpg',
    link: '#',
  },
  {
    index: '[ 02 ]',
    titleKey: 'product.item2.title',
    descKey: 'product.item2.desc',
    image: '/images/product-school-set.jpg',
    link: '#',
  },
]
</script>
