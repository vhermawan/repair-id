<template>
  <section id="application" class="w-full flex flex-col gap-8 lg:gap-[48px] p-[64px_20px] lg:p-[104px_48px] bg-cream">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="font-dm-sans font-bold text-[32px] leading-[36px] tracking-[-1.2px] lg:text-[46px] lg:leading-[49px] lg:tracking-[-1.8px] text-navy"
    >
      {{ t('building.heading') }}
    </h2>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 lg:gap-y-14">
      <div
        v-for="(card, i) in cards" :key="card.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + (i % 2) * 150 } }"
        class="flex flex-col gap-5"
      >
        <img :src="card.image" :alt="t(`${card.prefix}.title`)" loading="lazy" class="w-full aspect-[4/3] object-cover" />
        <div class="flex flex-col gap-3">
          <h3 class="font-dm-sans font-bold text-[24px] leading-[29px] lg:text-[28px] lg:leading-[33px] tracking-[-0.8px] text-navy">{{ t(`${card.prefix}.title`) }}</h3>
          <p class="font-dm-sans text-[16px] leading-[25px] lg:text-[17px] lg:leading-[27px] text-[#0C2244]">{{ t(`${card.prefix}.desc`) }}</p>
        </div>
        <div>
          <NuxtLink
            v-if="card.to"
            :to="card.to"
            class="inline-flex items-center gap-2.5 px-6 py-[14px] bg-blue-accent rounded-full"
          >
            <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t(`${card.prefix}.cta`) }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-white" />
          </NuxtLink>
          <a
            v-else
            :href="card.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-[14px] bg-blue-accent rounded-full"
          >
            <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t(`${card.prefix}.cta`) }}</span>
            <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const cards = [
  { prefix: 'building.card1', image: '/images/home/events.webp', href: 'https://w4c.id/RepairForEvents' },
  { prefix: 'building.card2', image: '/images/home/product.webp', href: 'https://w4c.id/RepairForWorkshops' },
  { prefix: 'building.card3', image: '/images/home/design-build.webp', to: '/rr-board' },
  { prefix: 'building.card4', image: '/images/home/csr.webp', to: '/custom-project' },
]
</script>
