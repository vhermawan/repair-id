<template>
  <section id="application" class="w-full flex flex-col gap-8 lg:gap-[48px] p-[48px_20px] lg:p-[96px_48px] bg-[#061428] [background-image:radial-gradient(ellipse_55%_50%_at_18%_0%,_#0b3269bf_0%,_#06142800_100%)] bg-no-repeat bg-[length:100%_100%]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-4 lg:flex-row lg:gap-20 lg:items-end"
    >
      <div class="flex-1 flex flex-col gap-[10px] lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#A9C9FF]">{{ t('building.tag') }}</span>
        <h2 class="w-full font-dm-sans font-bold text-[28px] leading-[32px] lg:text-[46px] lg:leading-[51px] tracking-[-1.2px] lg:tracking-[-1.8px] text-cream">
          {{ t('building.heading') }}
        </h2>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      <div
        v-for="(app, i) in buildingApps" :key="app.titleKey"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 150 } }"
        class="flex-1 flex flex-col bg-[#0C2244] [border:1px_solid_#A9C9FF24] rounded-[16px] overflow-hidden"
      >
        <div class="h-[200px] lg:h-[340px] overflow-hidden">
          <img :src="app.image" :alt="t(app.titleKey)" class="parallax-card-img w-full h-full object-cover" />
        </div>
        <div class="flex flex-col gap-3 p-5 lg:p-7 lg:h-[248px] justify-between">
          <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#A9C9FF]">{{ app.index }}</span>
          <h3 class="w-full font-dm-sans font-semibold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[32px] tracking-[-0.5px] lg:tracking-[-0.8px] text-cream">{{ t(app.titleKey) }}</h3>
          <p class="w-full font-dm-sans text-[13px] leading-[20px] lg:text-sm lg:leading-[22px] text-[#F3EFE4A6]">{{ t(app.descKey) }}</p>
          <div class="pt-[10px]" />
          <!-- <NuxtLink :to="app.link" class="flex items-center gap-2 pt-[10px]">
            <span class="font-dm-sans text-[13px] font-semibold text-[#A9C9FF]">{{ t('building.seeApp') }}</span>
            <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-[#A9C9FF]" />
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const buildingApps = [
  {
    index: '[ 01 ]',
    titleKey: 'building.app1.title',
    descKey: 'building.app1.desc',
    image: '/images/design.webp',
    link: '#',
  },
  {
    index: '[ 02 ]',
    titleKey: 'building.app2.title',
    descKey: 'building.app2.desc',
    image: '/images/events.webp',
    link: '#',
  },
  {
    index: '[ 03 ]',
    titleKey: 'building.app3.title',
    descKey: 'building.app3.desc',
    image: '/images/product.webp',
    link: '#',
  },
  {
    index: '[ 04 ]',
    titleKey: 'building.app4.title',
    descKey: 'building.app4.desc',
    image: '/images/csr.webp',
    link: '#',
  },
]
</script>
