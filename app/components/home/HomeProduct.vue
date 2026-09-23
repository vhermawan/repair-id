<template>
  <section id="projects" class="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row lg:gap-x-[80px] p-[48px_20px] lg:p-[96px_48px] bg-white">
    <!-- Left column: heading + CTAs -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full lg:w-[400px] shrink-0 flex flex-col gap-6 lg:gap-7"
    >
      <div class="flex flex-col gap-[10px] lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">{{ t('product.tag') }}</span>
        <h2 class="w-full font-dm-sans font-bold text-[28px] leading-[32px] lg:text-[46px] lg:leading-[51px] tracking-[-1.2px] lg:tracking-[-1.8px] text-navy">
          {{ t('product.heading') }}
        </h2>
      </div>
      <p class="font-dm-sans text-[13px] leading-[20px] lg:text-[15px] lg:leading-6 text-[#061428CC]">
        {{ t('product.subtitle') }}
      </p>
      <div class="flex flex-col gap-3">
        <NuxtLink to="#projects" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-[#005FE7] rounded-xl">
          <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-white whitespace-nowrap">{{ t('product.ctaProject') }}</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 text-white" />
        </NuxtLink>
        <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] border border-[#0614281F] rounded-xl">
          <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">{{ t('product.ctaDiscuss') }}</span>
          <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
        </a>
      </div>
    </div>

    <!-- Right column: product cards -->
    <div class="flex-1 flex flex-col gap-4 lg:gap-6">
      <div
        v-for="(product, i) in products" :key="product.titleKey"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 150 } }"
        class="w-full flex flex-col sm:flex-row bg-white border border-[#06142814] rounded-2xl overflow-hidden"
      >
        <div class="h-[200px] sm:h-[260px] sm:w-[300px] shrink-0 overflow-hidden">
          <img :src="product.image" :alt="t(product.titleKey)" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 flex flex-col gap-3 p-5 lg:p-[32px_36px] justify-center">
          <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#005FE7]">{{ product.index }}</span>
          <h3 class="font-dm-sans font-semibold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[32px] tracking-[-0.5px] lg:tracking-[-0.8px] text-navy">{{ t(product.titleKey) }}</h3>
          <p class="font-dm-sans text-[13px] leading-[20px] lg:text-sm lg:leading-[22px] text-[#10201A99]">{{ t(product.descKey) }}</p>
          <div class="pt-1.5 lg:pt-2.5" />
          <!-- <NuxtLink :to="product.link" class="flex items-center gap-2 pt-1.5 lg:pt-2.5">
            <span class="font-dm-sans text-[13px] font-semibold text-[#005FE7]">{{ t('product.seeProduct') }}</span>
            <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-[#005FE7]" />
          </NuxtLink> -->
        </div>
      </div>
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
    image: '/images/wastebin.webp',
    link: '#',
  },
  {
    index: '[ 02 ]',
    titleKey: 'product.item2.title',
    descKey: 'product.item2.desc',
    image: '/images/school.webp',
    link: '#',
  },
]
</script>
