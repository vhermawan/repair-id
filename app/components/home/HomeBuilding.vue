<template>
  <section id="application" class="w-full bg-white px-5 py-16 lg:pl-[16.5vw] lg:pr-0 lg:pt-[3.83vw] lg:pb-[3.83vw]">
    <div class="flex flex-col gap-6 lg:relative lg:block lg:w-[75.58vw] lg:h-[48.6vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-4 max-w-[909px] font-dm-sans text-[30px] leading-[1.05] uppercase text-black whitespace-pre-line lg:absolute lg:left-0 lg:top-0 lg:mb-0 lg:max-w-none lg:text-[4.17vw] lg:leading-none"
    >
      {{ t('building.heading') }}
    </h2>

      <component
        :is="card.to ? NuxtLink : 'a'"
        v-for="card in cards" :key="card.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        :to="card.to"
        :href="card.href"
        :target="card.href ? '_blank' : undefined"
        :rel="card.href ? 'noopener noreferrer' : undefined"
        class="group relative flex flex-col border border-black bg-white text-black lg:absolute lg:hover:z-10 lg:focus-visible:z-10 lg:w-[27.59vw] lg:h-[16vw] lg:justify-between"
        :class="card.position"
      >
        <img
          :src="card.image" alt="" loading="lazy"
          class="w-full aspect-[4/3] object-cover lg:absolute lg:inset-0 lg:h-full lg:aspect-auto lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
        />
        <h3 class="px-5 pt-6 font-dm-sans font-light text-[34px] leading-[1.06] whitespace-pre-line lg:pr-[1.54vw] lg:pt-[1.12vw] lg:text-[3.39vw] lg:leading-none" :class="card.inset">
          {{ t(`${card.prefix}.title`) }}
        </h3>
        <p class="px-5 pt-3 font-dm-sans text-base lg:max-w-[24.1vw] lg:pr-[1.54vw] lg:pt-0 lg:pb-[1.19vw] lg:text-[clamp(14px,1.04vw,20px)] lg:leading-[1.3]" :class="card.inset">
          {{ t(`${card.prefix}.desc`) }}
        </p>
        <span class="mx-5 mt-5 mb-6 self-start inline-flex items-center gap-4 px-5 py-2.5 bg-white border border-black rounded-full font-dm-sans text-base whitespace-nowrap lg:absolute lg:left-[1.05vw] lg:bottom-[0.8vw] lg:m-0 lg:gap-[0.6vw] lg:px-[0.76vw] lg:py-[0.4vw] lg:text-[clamp(13px,0.83vw,16px)] lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
          {{ t(`${card.prefix}.cta`) }}
          <img src="/images/home/arrow-up-right.svg" alt="" />
        </span>
      </component>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

const { t } = useI18n()

const cards = [
  { prefix: 'building.card1', inset: 'lg:pl-[1.54vw]', image: '/images/home/events.webp', href: 'https://w4c.id/RepairForEvents', position: 'lg:left-[20.4vw] lg:top-[16.6vw]' },
  { prefix: 'building.card2', inset: 'lg:pl-[1.54vw]', image: '/images/home/workshop-cutting.webp', href: 'https://w4c.id/RepairForWorkshops', position: 'lg:left-[calc(47.99vw-1px)] lg:top-[4.17vw]' },
  { prefix: 'building.card3', inset: 'lg:pl-[2.06vw]', image: '/images/home/design-build.webp', to: '/rr-board', position: 'lg:left-[5.14vw] lg:top-[calc(32.6vw-1px)]' },
  { prefix: 'building.card4', inset: 'lg:pl-[1.54vw]', image: '/images/home/csr.webp', to: '/custom-project', position: 'lg:left-[40.94vw] lg:top-[calc(32.6vw-1px)]' },
]
</script>
