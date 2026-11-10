<template>
  <section class="relative w-full bg-[#2042EA]">
    <div class="flex flex-col justify-between gap-10 px-5 py-14 text-white font-dm-sans lg:sticky lg:top-0 lg:h-screen lg:gap-[2vw] lg:px-0 lg:pl-[18.17vw] lg:pt-[4.56vw] lg:pb-[5.36vw]">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-[40px] leading-[1.1] uppercase tracking-[0.05em] lg:text-[4.69vw] lg:leading-[1.11]">
        <span
          v-for="(line, i) in headingLines" :key="i"
          class="block whitespace-nowrap"
          :style="{ paddingLeft: `${indents[i] ?? 0}em` }"
        >{{ line || ' ' }}</span>
      </h2>
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
        class="flex flex-col gap-6 text-base lg:w-[34.12vw] lg:gap-[1.3vw] lg:text-[clamp(16px,1.04vw,20px)]">
        <p>{{ t('rrPage.colors.body') }}</p>
        <p>{{ t('rrPage.colors.body2') }}</p>
      </div>
    </div>

    <div class="relative z-10 flex flex-col gap-2 px-5 pb-14 lg:-mt-[100vh] lg:ml-[62.58vw] lg:w-[32.53vw] lg:gap-0 lg:p-0">
      <figure
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        v-for="(photo, i) in photos" :key="photo.image"
        class="group relative w-full aspect-[625/1080] overflow-hidden bg-[#D9D9D9]"
      >
        <button
          type="button"
          class="absolute inset-0 w-full h-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
          :aria-label="`${t('rrPage.colors.zoom')}: ${photo.project}`"
          @click="open(i)"
        >
          <RrBoardCrop v-if="photo.crop" :src="photo.image" :alt="photo.project" :crop="photo.crop" />
          <img v-else :src="photo.image" :alt="photo.project" loading="lazy" class="absolute inset-0 w-full h-full object-cover object-bottom" />
        </button>
        <figcaption class="pointer-events-none absolute left-4 bottom-4 font-dm-sans text-[22px] leading-none uppercase tracking-[0.05em] text-white lg:left-[3.41vw] lg:bottom-[2.4vw] lg:text-[1.56vw]">
          {{ photo.project }}
        </figcaption>
      </figure>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        leave-active-class="transition-opacity duration-150 ease-in"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-if="active !== null"
          role="dialog"
          aria-modal="true"
          :aria-label="photos[active].project"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 lg:p-12"
          @click.self="close"
        >
          <img
            :key="photos[active].image"
            :src="photos[active].image"
            :alt="photos[active].project"
            class="max-w-full max-h-[calc(100vh-128px)] object-contain"
          />
          <span class="absolute left-1/2 -translate-x-1/2 bottom-5 lg:bottom-6 px-3 py-1.5 bg-white/10 rounded-full font-dm-sans font-medium type-caption text-white tabular-nums">
            {{ photos[active].project }} · {{ active + 1 }}/{{ photos.length }}
          </span>
          <button type="button" class="absolute top-4 right-4 lg:top-6 lg:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white" :aria-label="t('rrPage.colors.close')" @click="close">
            <Icon name="lucide:x" class="w-5 h-5" />
          </button>
          <button type="button" class="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white" :aria-label="t('rrPage.colors.prev')" @click="step(-1)">
            <Icon name="lucide:chevron-left" class="w-5 h-5" />
          </button>
          <button type="button" class="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white" :aria-label="t('rrPage.colors.next')" @click="step(1)">
            <Icon name="lucide:chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const indents = computed(() => locale.value === 'en' ? [1.55, 0, 0, 0, 0.93] : [])
const headingLines = computed(() => t('rrPage.colors.headingLines').split('\n'))

const photos: { image: string, project: string, crop?: [number, number, number, number] }[] = [
  { image: '/images/rr-board/redesign/manulife.webp', project: 'Manulife' },
  { image: '/images/rr-board/redesign/aloha.webp', project: 'Aloha', crop: [158.33, 122.25, -29.16, -22.25] },
  { image: '/images/rr-board/redesign/benedictus.webp', project: 'St. Benedictus', crop: [136.91, 105.72, -18.46, -5.72] },
]

const active = ref<number | null>(null)

function open(i: number) {
  active.value = i
}

function close() {
  active.value = null
}

function step(dir: number) {
  if (active.value === null) return
  active.value = (active.value + dir + photos.length) % photos.length
}

function onKeydown(e: KeyboardEvent) {
  if (active.value === null) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') step(-1)
  else if (e.key === 'ArrowRight') step(1)
}

watch(active, (val) => {
  document.body.style.overflow = val === null ? '' : 'hidden'
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
