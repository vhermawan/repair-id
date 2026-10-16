<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:w-[780px] font-dm-sans font-bold type-h2 text-navy whitespace-pre-line">
        {{ t('rrPage.colors.heading') }}
      </h2>
      <div class="lg:w-[420px] shrink-0 flex flex-col gap-3 font-dm-sans type-body text-[#0C2244]">
        <p>{{ t('rrPage.colors.body') }}</p>
        <p>{{ t('rrPage.colors.body2') }}</p>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4">
      <span class="font-dm-sans font-medium type-caption tracking-[1.2px] text-blue-accent">{{ t('rrPage.colors.label') }}</span>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
        <figure
          v-for="(photo, i) in photos" :key="photo.image"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (i % 4) * 80 } }"
          class="group relative w-full aspect-square overflow-hidden"
        >
          <button type="button" class="absolute inset-0 w-full h-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-accent" :aria-label="`${t('rrPage.colors.zoom')}: ${photo.project}`" @click="open(i)">
            <img :src="photo.image" :alt="photo.project" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
          </button>
          <figcaption class="pointer-events-none absolute left-2.5 bottom-2.5 px-2.5 py-1 bg-navy/70 rounded-full font-dm-sans font-medium type-eyebrow text-white">{{ photo.project }}</figcaption>
        </figure>
      </div>
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
const { t } = useI18n()

const photos = [
  { image: '/images/rr-board/manulife-1.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-5.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-2.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-8.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-3.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-6.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-9.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-4.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-10.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-7.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-11.webp', project: 'Manulife' },
  { image: '/images/rr-board/manulife-12.webp', project: 'Manulife' },
  { image: '/images/home/csr.webp', project: 'Manulife' },
  { image: '/images/rr-board/school.webp', project: 'Manulife' },
  { image: '/images/rr-board/aloha-1.webp', project: 'Aloha PIK 2' },
  { image: '/images/rr-board/benedictus-1.webp', project: 'St. Benedictus' },
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
