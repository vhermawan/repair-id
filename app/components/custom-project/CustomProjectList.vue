<template>
  <section class="w-full flex flex-col gap-10 lg:gap-16 px-5 py-20 lg:p-[120px_48px_140px] bg-white overflow-hidden">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-20"
    >
      <div class="flex-1 flex flex-col items-start gap-5 lg:gap-6">
        <span class="px-3.5 py-2 bg-white [outline:1px_solid_#E3DFD6] [outline-offset:-0.5px] rounded-full font-dm-sans text-[13px] leading-[16px] text-[#5A5D63]">
          {{ t('customProjectPage.projects.eyebrow') }}
        </span>
        <h2 class="font-dm-sans font-normal text-[#111317] text-[40px] leading-[44px] tracking-[-1.2px] lg:text-[56px] lg:leading-[58px] xl:text-[64px] xl:leading-[65px] lg:tracking-[-2px]">
          {{ t('customProjectPage.projects.heading') }}
        </h2>
      </div>
      <p class="lg:w-[400px] xl:w-[460px] lg:pt-[18px] font-dm-sans text-[#5A5D63] text-[16px] leading-[26px] lg:text-[17px] lg:leading-[27px]">
        {{ t('customProjectPage.projects.subtitle') }}
      </p>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      class="w-full flex flex-col lg:flex-row gap-8 lg:h-[540px]"
    >
      <div class="lg:w-[260px] xl:w-[300px] shrink-0 flex flex-row lg:flex-col justify-between items-end lg:items-start gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex items-end gap-0.5" aria-live="polite">
            <span class="font-dm-sans font-normal text-[#111317] text-[56px] leading-[56px] lg:text-[72px] lg:leading-[72px] tracking-[-2px] tabular-nums">{{ pad(active + 1) }}</span>
            <span class="pb-2 lg:pb-3 font-dm-sans text-[#5A5D63] text-[22px] leading-[22px] lg:text-[26px] lg:leading-[26px] tabular-nums">/{{ pad(projects.length) }}</span>
          </div>
          <p class="hidden lg:block font-dm-sans text-[#5A5D63] text-[16px] leading-[26px]">
            {{ t(`customProjectPage.projects.${projects[active]!.key}.desc`) }}
          </p>
        </div>
        <div class="flex gap-3">
          <button
            type="button"
            :aria-label="t('customProjectPage.projects.prev')"
            :disabled="active === 0"
            class="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white [outline:1px_solid_#E3DFD6] [outline-offset:-0.5px] rounded-[4px] text-[#111317] transition-colors hover:[outline-color:#111317] disabled:opacity-40 disabled:pointer-events-none"
            @click="goTo(active - 1)"
          >
            <Icon name="lucide:arrow-left" class="w-[18px] h-[18px]" />
          </button>
          <button
            type="button"
            :aria-label="t('customProjectPage.projects.next')"
            :disabled="active === projects.length - 1"
            class="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#111317] hover:bg-[#0B5FFF] rounded-[4px] text-white transition-colors disabled:opacity-40 disabled:pointer-events-none"
            @click="goTo(active + 1)"
          >
            <Icon name="lucide:arrow-right" class="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      <div
        ref="track"
        class="-mx-5 lg:mx-0 lg:flex-1 min-w-0 h-[520px] sm:h-[580px] lg:h-full flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        @scroll.passive="onScroll"
      >
        <!-- Leading space so the first card sits centered on mobile -->
        <div aria-hidden="true" class="shrink-0 w-[calc(10%-16px)] lg:hidden" />
        <article
          v-for="project in projects"
          :key="project.key"
          class="group relative w-[80%] lg:w-[calc((100%-24px)/2)] h-full shrink-0 snap-center lg:snap-start rounded-[16px] overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="t(`customProjectPage.projects.${project.key}.title`)"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          >
          <div class="relative h-full flex flex-col justify-between p-5 lg:p-6 [background-image:linear-gradient(180deg,_#11131700_35%,_#111317e6_100%)]">
            <span class="w-fit px-3 py-1.5 bg-white rounded-full font-dm-sans text-[12px] leading-[14px] text-[#111317] whitespace-nowrap">
              {{ t(`customProjectPage.projects.${project.key}.tag`) }}
            </span>
            <div class="flex flex-col gap-2">
              <h3 class="font-dm-sans font-normal text-white text-[24px] leading-[28px] lg:text-[28px] lg:leading-[32px] tracking-[-0.6px]">
                {{ t(`customProjectPage.projects.${project.key}.title`) }}
              </h3>
              <p class="font-dm-sans text-white/70 text-[15px] leading-[23px]">
                {{ t(`customProjectPage.projects.${project.key}.desc`) }}
              </p>
              <p class="font-dm-mono text-[12.5px] leading-[18px] tracking-[0.6px] text-white/70">
                {{ t(`customProjectPage.projects.${project.key}.items`) }} • {{ t(`customProjectPage.projects.${project.key}.waste`) }}
              </p>
            </div>
          </div>
        </article>
        <!-- Trailing space so the last card can center (mobile) or snap to the start (desktop) -->
        <div aria-hidden="true" class="shrink-0 w-[calc(10%-16px)] lg:w-[calc((100%-24px)/2)]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const projects = [
  { key: 'schoolSet', image: '/images/custom-project/project-school-set.webp' },
  { key: 'miloBin', image: '/images/custom-project/project-milo-bin.webp' },
  { key: 'ecoRunfest', image: '/images/custom-project/project-eco-runfest.webp' },
]

const track = ref<HTMLElement | null>(null)
const active = ref(0)

const pad = (n: number) => String(n).padStart(2, '0')

const cardStep = () => {
  const el = track.value
  const card = el?.querySelector('article')
  if (!el || !card) return 0
  return card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0')
}

const goTo = (index: number) => {
  const i = Math.min(Math.max(index, 0), projects.length - 1)
  active.value = i
  track.value?.scrollTo({ left: i * cardStep(), behavior: 'smooth' })
}

const onScroll = () => {
  const step = cardStep()
  if (!step || !track.value) return
  active.value = Math.min(Math.round(track.value.scrollLeft / step), projects.length - 1)
}
</script>
