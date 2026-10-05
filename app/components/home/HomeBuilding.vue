<template>
  <section id="application" class="w-full flex flex-col gap-8 lg:gap-[48px] p-[64px_20px] lg:p-[104px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-3 lg:gap-4"
    >
      <span class="font-mono text-[10px] tracking-[1.4px] text-[#005FE7]">{{ t('building.tag') }}</span>
      <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] tracking-[-1.2px] lg:text-[46px] lg:leading-[49px] lg:tracking-[-1.8px] text-navy">
        {{ t('building.heading') }}
      </h2>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 lg:gap-y-12">
      <div
        v-for="(app, i) in buildingApps" :key="app.titleKey"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + (i % 2) * 150 } }"
        class="flex flex-col gap-5"
      >
        <img :src="app.image" :alt="t(app.titleKey)" loading="lazy" class="w-full h-[240px] lg:h-[340px] object-cover" />
        <div class="flex flex-col gap-[10px]">
          <h3 class="font-dm-sans font-bold text-[20px] lg:text-[22px] tracking-[-0.6px] text-navy">{{ t(app.titleKey) }}</h3>
          <p class="font-dm-sans text-sm leading-[22px] text-[#0C2244]">{{ t(app.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const buildingApps = [
  { titleKey: 'building.app1.title', descKey: 'building.app1.desc', image: '/images/home/design-build.webp' },
  { titleKey: 'building.app2.title', descKey: 'building.app2.desc', image: '/images/home/events.webp' },
  { titleKey: 'building.app3.title', descKey: 'building.app3.desc', image: '/images/home/product.webp' },
  { titleKey: 'building.app4.title', descKey: 'building.app4.desc', image: '/images/home/csr.webp' },
]
</script>
