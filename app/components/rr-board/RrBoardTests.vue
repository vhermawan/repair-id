<template>
  <section class="w-full flex flex-col gap-8 lg:gap-10 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-3 lg:gap-[14px] items-center text-center"
    >
      <span class="font-dm-sans font-bold text-[10px] tracking-[1.4px] text-blue-accent">{{ t('rrPage.tests.tag') }}</span>
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
      @scroll.passive="sync"
    >
      <div
        v-for="(test, i) in tests" :key="test.key"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        class="snap-center sm:snap-start shrink-0 w-full sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)] flex flex-col gap-3 py-3 lg:p-[14px] border-t border-[#0614281A]"
      >
        <div class="relative w-full h-[400px] overflow-hidden bg-[#E6E2D8]">
          <iframe
            v-if="playing === i"
            :src="`https://www.youtube-nocookie.com/embed/${test.youtubeId}?autoplay=1&rel=0&playsinline=1`"
            :title="t(test.key)"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
            class="absolute inset-0 w-full h-full border-0"
          />
          <button
            v-else
            type="button"
            :aria-label="`${t('rrPage.tests.play')}: ${t(test.key)}`"
            class="group absolute inset-0 w-full h-full flex items-center justify-center"
            @click="playing = i"
          >
            <img
              :src="`https://i.ytimg.com/vi/${test.youtubeId}/oar2.jpg`"
              alt=""
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover"
              @error="onThumbError($event, test.youtubeId)"
            >
            <span class="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-navy transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
              <Icon name="lucide:play" class="w-5 h-5 translate-x-[1px]" />
            </span>
          </button>
        </div>
        <div class="flex flex-col gap-1 px-1">
          <span class="font-dm-sans text-[14px] font-semibold text-navy">{{ t(test.key) }}</span>
          <span class="font-dm-sans text-[12.5px] text-navy/45">{{ t('rrPage.tests.pending') }}</span>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-center gap-4">
      <span class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244] tabular-nums">
        {{ String(active + 1).padStart(2, '0') }} / {{ String(positions).padStart(2, '0') }}
      </span>
      <div class="flex gap-2">
        <button
          type="button"
          :aria-label="t('rrPage.tests.prev')"
          :disabled="!scrollable || atStart"
          class="w-[38px] h-[38px] flex items-center justify-center [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full transition-opacity disabled:opacity-40"
          @click="go(-1)"
        >
          <Icon name="lucide:arrow-left" class="w-[15px] h-[15px] text-navy" />
        </button>
        <button
          type="button"
          :aria-label="t('rrPage.tests.next')"
          :disabled="!scrollable || atEnd"
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

const tests = [
  { key: 'rrPage.tests.t1', youtubeId: 'yfqzOj6eI0I' },
  { key: 'rrPage.tests.t2', youtubeId: 'id2dW-Vegg8' },
  { key: 'rrPage.tests.t3', youtubeId: 'IJq92vQhUGs' },
  { key: 'rrPage.tests.t4', youtubeId: 'mzQPqyLXbm0' },
  { key: 'rrPage.tests.t5', youtubeId: '1mGeP-gur9s' },
]

const playing = ref<number | null>(null)

function onThumbError(e: Event, id: string) {
  const img = e.target as HTMLImageElement
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
  if (img.src !== fallback) img.src = fallback
}

const track = ref<HTMLElement | null>(null)
const active = ref(0)
const scrollable = ref(false)
const atStart = ref(true)
const atEnd = ref(false)
const positions = ref(1)

function cardStep() {
  const el = track.value
  const card = el?.firstElementChild as HTMLElement | null
  return card ? card.offsetWidth + 16 : 1
}

function sync() {
  const el = track.value
  if (!el) return
  scrollable.value = el.scrollWidth > el.clientWidth + 2
  atStart.value = el.scrollLeft <= 2
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
  const step = cardStep()
  const maxScroll = el.scrollWidth - el.clientWidth
  positions.value = maxScroll > 2 ? Math.ceil((maxScroll - 2) / step) + 1 : 1
  active.value = atEnd.value ? positions.value - 1 : Math.min(Math.round(el.scrollLeft / step), positions.value - 1)
}

onMounted(() => {
  sync()
  window.addEventListener('resize', sync, { passive: true })
})
onUnmounted(() => window.removeEventListener('resize', sync))

function go(dir: number) {
  track.value?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' })
}
</script>
