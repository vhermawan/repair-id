<template>
  <section id="application" class="w-full bg-[#F3F0E9] px-5 py-20 lg:p-[140px_48px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex flex-col gap-4"
    >
      <HomeSectionLabel>{{ t('building.label') }}</HomeSectionLabel>
      <h2 class="max-w-[860px] font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('building.heading') }}
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pt-10 lg:pt-12">
      <div
        v-for="(card, i) in cards" :key="card.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-6"
      >
        <div class="w-full aspect-[4/5] rounded-[4px] border border-[#E3DFD6] overflow-hidden">
          <img :src="card.image" :alt="t(`${card.prefix}.title`)" loading="lazy" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px]">{{ t(`${card.prefix}.title`) }}</h3>
          <p class="font-dm-sans text-[#5A5D63] text-[18px] leading-[29px]">{{ t(`${card.prefix}.desc`) }}</p>
        </div>
        <NuxtLink
          :to="card.to"
          :target="card.to.startsWith('http') ? '_blank' : undefined"
          class="group inline-flex w-fit items-center gap-2 font-dm-sans text-[16px] leading-[21px] text-[#111317] hover:text-[#0B5FFF] transition-colors"
        >
          <span>{{ t(`${card.prefix}.cta`) }}</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const cards = [
  { prefix: 'building.card1', image: '/images/home/events.webp', to: 'https://w4c.id/RepairForEvents' },
  { prefix: 'building.card2', image: '/images/home/workshop.webp', to: 'https://w4c.id/RepairForWorkshops' },
  { prefix: 'building.card3', image: '/images/home/design-build.webp', to: '/rr-board' },
  { prefix: 'building.card4', image: '/images/home/csr.webp', to: '/custom-project' },
]
</script>
