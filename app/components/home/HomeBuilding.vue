<template>
  <section id="application" class="w-full bg-cream p-[64px_20px] lg:p-[104px_48px]">
    <div class="w-full flex flex-col gap-8 lg:gap-[48px]">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-dm-sans font-bold type-h2 text-navy"
      >
        {{ t('building.heading') }}
      </h2>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-12 lg:gap-y-16">
        <div
          v-for="(card, i) in cards" :key="card.prefix"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + (i % 2) * 150 } }"
          class="flex flex-col gap-5 lg:gap-6"
        >
          <img :src="card.image" :alt="t(`${card.prefix}.title`)" loading="lazy" class="w-full aspect-[4/3] object-cover" />
          <div class="flex flex-col gap-3">
            <h3 class="font-dm-sans font-bold type-h4 text-navy">{{ t(`${card.prefix}.title`) }}</h3>
            <p class="font-dm-sans type-body text-[#0C2244]">{{ t(`${card.prefix}.desc`) }}</p>
          </div>
          <div>
            <NuxtLink
              v-if="card.to"
              :to="card.to"
              class="inline-flex items-center gap-2.5 px-6 py-[14px] lg:px-8 lg:py-[18px] bg-blue-accent rounded-full"
            >
              <span class="font-dm-sans type-cta font-semibold text-white whitespace-nowrap">{{ t(`${card.prefix}.cta`) }}</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </NuxtLink>
            <a
              v-else
              :href="card.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-6 py-[14px] lg:px-8 lg:py-[18px] bg-blue-accent rounded-full"
            >
              <span class="font-dm-sans type-cta font-semibold text-white whitespace-nowrap">{{ t(`${card.prefix}.cta`) }}</span>
              <Icon name="lucide:arrow-up-right" class="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const cards = [
  { prefix: 'building.card1', image: '/images/home/events.webp', href: 'https://w4c.id/RepairForEvents' },
  { prefix: 'building.card2', image: '/images/home/workshop.webp', href: 'https://w4c.id/RepairForWorkshops' },
  { prefix: 'building.card3', image: '/images/home/design-build.webp', to: '/rr-board' },
  { prefix: 'building.card4', image: '/images/home/csr.webp', to: '/custom-project' },
]
</script>
