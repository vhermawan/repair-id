<template>
  <section class="w-full bg-white font-dm-sans pb-14 lg:pb-[3.77vw]">
    <h2 class="px-5 text-[40px] leading-[1.05] uppercase tracking-[0.05em] text-black lg:px-0 lg:ml-[17.68vw] lg:w-[34vw] lg:text-[4.17vw] lg:leading-none">
      {{ t('rrPage.tests.heading') }}
    </h2>

    <div
      ref="track"
      class="mt-8 flex gap-4 py-2 pl-5 pr-[calc(22vw-20px)] overflow-x-auto snap-x snap-mandatory scroll-pl-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:pr-[calc(55vw-20px)] lg:mt-[5.5vw] lg:gap-[2.26vw] lg:pl-[17.68vw] lg:pr-[59.68vw] lg:scroll-pl-[17.68vw]"
      @scroll.passive="sync"
      @pointerleave="hovered = null"
    >
      <div
        v-for="(test, i) in tests" :key="test.key"
        class="relative snap-start shrink-0 w-[78vw] aspect-[435/541] overflow-hidden bg-[#E6E2D8] shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-opacity duration-300 ease-out md:w-[45vw] lg:w-[22.64vw]"
        :class="focused === i ? 'opacity-100' : 'opacity-50'"
        @pointerenter="onPointerEnter($event, i)"
        @focusin="hovered = i"
      >
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
          <RrBoardCrop :src="test.poster" alt="" :crop="test.crop" />
          <span class="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
            <Icon name="lucide:play" class="w-5 h-5 translate-x-[1px]" />
          </span>
        </button>
      </div>
    </div>

    <div class="mt-6 flex justify-center gap-[1.35vw] lg:mt-[4.86vw] lg:pl-[12.86vw]">
      <button
        type="button"
        :aria-label="t('rrPage.tests.prev')"
        :disabled="active === 0"
        class="transition-opacity disabled:opacity-40"
        @click="go(-1)"
      >
        <img src="/images/rr-board/redesign/carousel-prev.svg" alt="" width="54" height="54" class="w-[54px] h-[54px] -scale-x-100 lg:w-[2.81vw] lg:h-[2.81vw]" />
      </button>
      <button
        type="button"
        :aria-label="t('rrPage.tests.next')"
        :disabled="active === tests.length - 1"
        class="transition-opacity disabled:opacity-40"
        @click="go(1)"
      >
        <img src="/images/rr-board/redesign/carousel-next.svg" alt="" width="54" height="54" class="w-[54px] h-[54px] lg:w-[2.81vw] lg:h-[2.81vw]" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const POSTER_CROP: [number, number, number, number] = [199.97, 100.42, -49.99, -0.21]

const tests: { key: string, youtubeId: string, poster: string, crop: [number, number, number, number] }[] = [
  { key: 'rrPage.tests.t5', youtubeId: '1mGeP-gur9s', poster: '/images/rr-board/redesign/test-1.webp', crop: POSTER_CROP },
  { key: 'rrPage.tests.t4', youtubeId: 'mzQPqyLXbm0', poster: '/images/rr-board/redesign/test-2.webp', crop: POSTER_CROP },
  { key: 'rrPage.tests.t2', youtubeId: 'id2dW-Vegg8', poster: '/images/rr-board/redesign/test-3.webp', crop: [200.19, 100.53, -49.99, -0.26] },
  { key: 'rrPage.tests.t3', youtubeId: 'IJq92vQhUGs', poster: '/images/rr-board/redesign/test-4.webp', crop: [203.35, 102.12, -52.14, -1.06] },
  { key: 'rrPage.tests.t1', youtubeId: 'yfqzOj6eI0I', poster: '/images/rr-board/redesign/test-5.webp', crop: POSTER_CROP },
]

const track = ref<HTMLElement | null>(null)
const playing = ref<number | null>(null)
const active = ref(0)
const hovered = ref<number | null>(null)
const focused = computed(() => hovered.value ?? active.value)

function onPointerEnter(e: PointerEvent, i: number) {
  if (e.pointerType === 'mouse') hovered.value = i
}

function cardStep() {
  const el = track.value
  const card = el?.firstElementChild as HTMLElement | null
  if (!el || !card) return 1
  return card.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0)
}

function sync() {
  const el = track.value
  if (!el) return
  active.value = Math.min(Math.round(el.scrollLeft / cardStep()), tests.length - 1)
}

function go(dir: number) {
  track.value?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' })
}
</script>
