<template>
  <section id="application" class="w-full bg-white px-5 py-16 lg:pl-[16.27vw] lg:pr-[4.5vw] lg:pt-[4.64vw] lg:pb-[14.31vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="max-w-[909px] font-dm-sans text-[30px] leading-[1.05] uppercase text-black whitespace-pre-line lg:text-[5vw] lg:leading-[1.04]"
      :class="locale === 'id' ? 'lg:max-w-none' : 'lg:max-w-[47.3vw]'"
    >
      {{ t('building.heading') }}
    </h2>

    <div class="mt-10 flex flex-col gap-6 lg:relative lg:mt-[3.33vw] lg:block lg:w-[78.52vw] lg:h-[54.51vw]">
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
        class="group relative flex flex-col border border-black bg-white text-black lg:absolute lg:hover:z-10 lg:focus-visible:z-10 lg:w-[37.02vw] lg:h-[21.47vw] lg:justify-between"
        :class="card.position"
      >
        <img
          :src="card.image" alt="" loading="lazy"
          class="w-full aspect-[4/3] object-cover lg:absolute lg:inset-0 lg:h-full lg:aspect-auto lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
        />
        <h3 class="px-5 pt-6 font-dm-sans font-light text-[40px] leading-[1.06] whitespace-pre-line lg:px-[2.07vw] lg:pt-[1.5vw] lg:text-[4.17vw]">
          {{ t(`${card.prefix}.title`) }}
        </h3>
        <p class="px-5 pt-3 font-dm-sans text-base lg:max-w-[28.2vw] lg:px-[2.07vw] lg:pt-0 lg:pb-[1.82vw] lg:text-[clamp(16px,1.04vw,20px)]">
          {{ t(`${card.prefix}.desc`) }}
        </p>
        <span class="mx-5 mt-5 mb-6 self-start inline-flex items-center gap-4 px-5 py-2.5 bg-white border border-black rounded-full font-dm-sans text-base whitespace-nowrap lg:absolute lg:left-[1.42vw] lg:bottom-[1.13vw] lg:m-0 lg:px-[21px] lg:text-[clamp(16px,1.04vw,20px)] lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
          {{ t(`${card.prefix}.cta`) }}
          <img src="/images/home/arrow-up-right.svg" alt="" />
        </span>
      </component>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

const { t, locale } = useI18n()

const cards = [
  { prefix: 'building.card1', image: '/images/home/events.webp', href: 'https://w4c.id/RepairForEvents', position: 'lg:left-[4.465vw] lg:top-[5.65vw]' },
  { prefix: 'building.card2', image: '/images/home/workshop-cutting.webp', href: 'https://w4c.id/RepairForWorkshops', position: 'lg:left-[calc(41.485vw-1px)] lg:top-0' },
  { prefix: 'building.card3', image: '/images/home/design-build.webp', to: '/rr-board', position: 'lg:left-0 lg:top-[33.044vw]' },
  { prefix: 'building.card4', image: '/images/home/csr.webp', to: '/custom-project', position: 'lg:left-[calc(37.02vw-1px)] lg:top-[calc(27.12vw-1px)]' },
]
</script>
