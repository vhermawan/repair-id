<template>
  <section class="relative w-full xl:h-[760px] overflow-hidden flex flex-col items-center justify-center gap-10 lg:gap-12 px-5 pt-[176px] pb-[208px] lg:p-[200px_48px] xl:p-[140px_48px] bg-white">
    <div aria-hidden="true" class="xl:hidden absolute inset-0 pointer-events-none">
      <div
        v-for="(tile, i) in tiles" :key="tile.icon"
        class="absolute origin-top-left"
        :style="{ left: `${tile.m.x}%`, top: tile.m.top, bottom: tile.m.bottom, rotate: `${tile.rotate}deg` }"
      >
        <HomeImpactTile :icon="tile.icon" :color="tile.color" :badge="tile.badge" :label="tile.label" :delay="100 + i * 80" />
      </div>
    </div>

    <div aria-hidden="true" class="hidden xl:block absolute inset-0 pointer-events-none">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 760" preserveAspectRatio="none" fill="none">
        <path
          v-for="d in curves" :key="d"
          :d="d"
          stroke="#1113174d"
          stroke-linecap="round"
          vector-effect="non-scaling-stroke"
        />
      </svg>
      <div
        v-for="(tile, i) in tiles" :key="tile.icon"
        class="absolute origin-top-left"
        :style="{ left: `${tile.x / 14.4}%`, top: `${tile.y / 7.6}%`, rotate: `${tile.rotate}deg` }"
      >
        <HomeImpactTile :icon="tile.icon" :color="tile.color" :badge="tile.badge" :label="tile.label" :delay="200 + i * 80" />
      </div>
    </div>

    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="relative max-w-[820px] font-dm-sans font-normal text-center text-[#111317] text-[38px] leading-[42px] tracking-[-1px] md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[69px] lg:tracking-[-2px] md:whitespace-pre-line"
    >
      {{ t('impact.title') }}
    </h2>

    <div class="relative w-full max-w-[980px] grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
      <div
        v-for="(stat, i) in stats" :key="stat"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-4 text-center"
      >
        <span class="font-dm-sans text-[#111317] text-[32px] leading-[36px] lg:text-[36px] tracking-[-0.8px] whitespace-nowrap">{{ t(`${stat}.value`) }}</span>
        <span class="font-dm-mono text-[12px] leading-[14px] tracking-[1.3px] uppercase text-[#5A5D63]">{{ t(`${stat}.desc`) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = ['impact.stat1', 'impact.stat2', 'impact.stat3']

const tiles = [
  { icon: 'package', x: 90, y: 250, rotate: -6, color: '#0E2A5C', badge: '#0B5FFF', label: '2.1 t', m: { x: 6, top: '76px' } },
  { icon: 'cup-soda', x: 300, y: 70, rotate: 8, color: '#0B5FFF', badge: '#111317', label: '18k pcs', m: { x: 30, top: '28px' } },
  { icon: 'circle-dot', x: 250, y: 520, rotate: 5, color: '#111317', badge: '#0E2A5C', label: '9.4 t', m: { x: 8, bottom: '40px' } },
  { icon: 'recycle', x: 640, y: 95, rotate: -4, color: '#0B5FFF', badge: '#0E2A5C', label: '24/7', m: { x: 54, top: '72px' } },
  { icon: 'layers', x: 1060, y: 60, rotate: 6, color: '#0E2A5C', badge: '#0B5FFF', label: '180°C', m: { x: 74, top: '24px' } },
  { icon: 'square-stack', x: 1270, y: 300, rotate: -8, color: '#111317', badge: '#0B5FFF', label: '1.2k', m: { x: 74, bottom: '84px' } },
  { icon: 'armchair', x: 1120, y: 590, rotate: 7, color: '#0E2A5C', badge: '#111317', label: '2,500', m: { x: 52, bottom: '28px' } },
  { icon: 'shopping-bag', x: 600, y: 575, rotate: -5, color: '#0B5FFF', badge: '#0E2A5C', label: '6.8 t', m: { x: 30, bottom: '92px' } },
]

const curves = [
  'M306 152 Q208.5 163.06 163 250',
  'M1128 142 Q1241.73 186.57 1296 296',
  'M688 620 Q901.02 570 1112 628',
]
</script>
