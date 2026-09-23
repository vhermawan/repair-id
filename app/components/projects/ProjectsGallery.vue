<template>
  <section class="w-full flex flex-col bg-cream">
    <!-- Header -->
    <div class="w-full flex flex-col gap-[28px] p-[48px_20px_28px] lg:p-[96px_48px_28px]">
      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end"
      >
        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.2px] text-blue-accent">
            {{ t('projectsPage.s2.tag') }}
          </span>
          <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[49px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
            {{ t('projectsPage.s2.heading') }}
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-inter text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/56">
          {{ t('projectsPage.s2.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Gallery area -->
    <div class="w-full flex flex-col gap-0 px-5 lg:px-12 pb-10 lg:pb-14">
      <!-- Scrub bar -->
      <div class="w-full flex items-center gap-4 pb-7">
        <span class="font-mono text-[10px] tracking-[1px] text-navy/56">01.</span>
        <div class="flex-1 h-[10px] relative">
          <div class="absolute left-0 top-[5px] w-full h-px bg-navy/20" />
          <div class="absolute left-[14%] top-[1px] w-[9px] h-[9px] bg-navy rounded-full" />
        </div>
        <span class="font-mono text-[10px] tracking-[1px] text-navy/56">05.</span>
      </div>

      <!-- Project cards row -->
      <div class="w-full overflow-x-auto scrollbar-hide">
        <div class="flex gap-3 lg:gap-[14px] min-w-max lg:min-w-0">
          <div
            v-for="(card, i) in cards"
            :key="card.titleKey"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 120 } }"
            class="shrink-0 flex flex-col gap-3"
            :class="[`w-[240px] lg:w-[${card.desktopWidth}px]`]"
            :style="{ paddingTop: `${card.mobilePt}px` }"
          >
            <div
              class="w-full rounded-sm overflow-hidden"
              :style="{ height: `${card.mobileHeight}px` }"
            >
              <img :src="card.image" :alt="t(card.titleKey)" class="w-full h-full object-cover" />
            </div>
            <div class="w-full flex gap-[10px]">
              <span class="font-serif text-[24px] lg:text-[30px] leading-[27px] text-navy">
                {{ card.number }}
              </span>
              <div class="flex-1 flex flex-col gap-[2px] pt-[6px]">
                <span class="font-inter font-semibold text-[13px] leading-[16px] text-navy">
                  {{ t(card.titleKey) }}
                </span>
                <span class="font-inter text-[12px] leading-[16px] text-navy/56">
                  {{ t(card.locKey) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wordmark -->
      <div class="w-full flex justify-end pt-6">
        <span class="font-serif text-[64px] lg:text-[132px] leading-[1] tracking-[-2px] text-navy select-none">
          Use Case
        </span>
      </div>

      <!-- Bottom bar -->
      <div class="w-full flex flex-wrap items-center gap-6 lg:gap-[40px] pt-[18px] border-t border-navy/12">
        <div class="flex items-center gap-4 lg:gap-[22px]">
          <span
            v-for="filter in filters"
            :key="filter.key"
            class="font-inter text-[12px] cursor-pointer"
            :class="filter.active ? 'font-semibold text-navy' : 'text-navy/56'"
          >
            {{ t(filter.key) }}
          </span>
        </div>
        <span class="flex-1 font-mono text-[10px] tracking-[1.2px] text-navy/56 text-center hidden lg:block">
          01 — 05
        </span>
        <span class="font-mono text-[10px] tracking-[1.2px] text-navy/56">
          {{ t('projectsPage.s2.hint') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const cards = [
  { number: '01.', titleKey: 'projectsPage.s2.card1.title', locKey: 'projectsPage.s2.card1.loc', desktopWidth: 280, mobileHeight: 260, mobilePt: 40, image: '/images/project-card-01.webp' },
  { number: '02.', titleKey: 'projectsPage.s2.card2.title', locKey: 'projectsPage.s2.card2.loc', desktopWidth: 210, mobileHeight: 150, mobilePt: 112, image: '/images/project-card-02.webp' },
  { number: '03.', titleKey: 'projectsPage.s2.card3.title', locKey: 'projectsPage.s2.card3.loc', desktopWidth: 280, mobileHeight: 300, mobilePt: 0, image: '/images/project-card-03.webp' },
  { number: '04.', titleKey: 'projectsPage.s2.card4.title', locKey: 'projectsPage.s2.card4.loc', desktopWidth: 220, mobileHeight: 160, mobilePt: 120, image: '/images/project-card-04.webp' },
  { number: '05.', titleKey: 'projectsPage.s2.card5.title', locKey: 'projectsPage.s2.card5.loc', desktopWidth: 298, mobileHeight: 220, mobilePt: 64, image: '/images/project-card-05.webp' },
]

const filters = [
  { key: 'projectsPage.s2.filterAll', active: true },
  { key: 'projectsPage.s2.filterEnd', active: false },
  { key: 'projectsPage.s2.filterCustom', active: false },
  { key: 'projectsPage.s2.filterCsr', active: false },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
