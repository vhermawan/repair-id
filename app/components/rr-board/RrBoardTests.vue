<template>
  <section class="w-full flex flex-col gap-8 lg:gap-10 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-3 lg:gap-[14px] items-center text-center"
    >
      <span class="font-mono text-[10px] tracking-[1.4px] text-blue-accent">{{ t('rrPage.tests.tag') }}</span>
      <h2 class="max-w-[820px] font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy">
        {{ t('rrPage.tests.heading') }}
      </h2>
      <p class="max-w-[600px] font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] text-[#0C2244]">
        {{ t('rrPage.tests.sub') }}
      </p>
    </div>

    <div
      ref="track"
      class="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      @scroll.passive="onScroll"
    >
      <div
        v-for="(test, i) in tests" :key="test"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        class="snap-start shrink-0 w-[80%] sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)] flex flex-col gap-[14px] p-3 lg:p-[14px] bg-cream [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-[20px]"
      >
        <div class="w-full h-[200px] lg:h-[240px] flex items-center justify-center bg-[#E6E2D8] rounded-xl">
          <Icon name="lucide:image" class="w-5 h-5 text-navy/35" />
        </div>
        <div class="flex flex-col gap-1 p-[0_10px_10px]">
          <span class="font-dm-sans text-[14px] font-semibold text-navy">{{ t(test) }}</span>
          <span class="font-dm-sans text-[12.5px] text-navy/45">{{ t('rrPage.tests.pending') }}</span>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-center gap-4">
      <span class="font-mono text-[10px] tracking-[1.2px] text-[#0C2244] tabular-nums">
        {{ String(active + 1).padStart(2, '0') }} / {{ String(tests.length).padStart(2, '0') }}
      </span>
      <div class="flex gap-2">
        <button
          type="button"
          :aria-label="t('rrPage.tests.prev')"
          :disabled="!scrollable || active === 0"
          class="w-[38px] h-[38px] flex items-center justify-center [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full transition-opacity disabled:opacity-40"
          @click="go(-1)"
        >
          <Icon name="lucide:arrow-left" class="w-[15px] h-[15px] text-navy" />
        </button>
        <button
          type="button"
          :aria-label="t('rrPage.tests.next')"
          :disabled="!scrollable || active === tests.length - 1"
          class="w-[38px] h-[38px] flex items-center justify-center [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full transition-opacity disabled:opacity-40"
          @click="go(1)"
        >
          <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-navy" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const tests = ['rrPage.tests.t1', 'rrPage.tests.t2', 'rrPage.tests.t3', 'rrPage.tests.t4']

const track = ref<HTMLElement | null>(null)
const active = ref(0)
const scrollable = ref(false)

function measure() {
  const el = track.value
  scrollable.value = !!el && el.scrollWidth > el.clientWidth + 2
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure, { passive: true })
})
onUnmounted(() => window.removeEventListener('resize', measure))

function cardStep() {
  const el = track.value
  const card = el?.firstElementChild as HTMLElement | null
  return card ? card.offsetWidth + 16 : 1
}

function onScroll() {
  const el = track.value
  if (!el) return
  const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
  active.value = atEnd ? tests.length - 1 : Math.round(el.scrollLeft / cardStep())
}

function go(dir: number) {
  const next = Math.min(Math.max(active.value + dir, 0), tests.length - 1)
  active.value = next
  track.value?.scrollTo({ left: next * cardStep(), behavior: 'smooth' })
}
</script>
