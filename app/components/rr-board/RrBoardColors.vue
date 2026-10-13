<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <h2 class="lg:w-[780px] font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy whitespace-pre-line">
        {{ t('rrPage.colors.heading') }}
      </h2>
      <div class="lg:w-[420px] shrink-0 flex flex-col gap-3 font-dm-sans text-[16px] leading-[25px] lg:text-[17px] lg:leading-[27px] text-[#0C2244]">
        <p>{{ t('rrPage.colors.body') }}</p>
        <p>{{ t('rrPage.colors.body2') }}</p>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4">
      <span class="font-dm-sans font-medium text-[12px] tracking-[1.2px] text-blue-accent">{{ t('rrPage.colors.label') }}</span>
      <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
        <figure
          v-for="(photo, i) in photos" :key="photo.image"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (i % 4) * 80 } }"
          class="relative w-full aspect-square overflow-hidden"
        >
          <img :src="photo.image" :alt="photo.project" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          <figcaption class="absolute left-2.5 bottom-2.5 px-2.5 py-1 bg-navy/70 rounded-full font-dm-sans font-medium text-[11px] text-white">{{ photo.project }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const photos = [
  { image: '/images/custom-project/project-school-set.webp', project: 'Manulife' },
  { image: '/images/home/csr.webp', project: 'Manulife' },
  { image: '/images/rr-board/school.webp', project: 'Manulife' },
  { image: '/images/rr-board/board-2.webp', project: 'Aloha PIK 2' },
  { image: '/images/rr-board/board-3.webp', project: 'Aloha PIK 2' },
  { image: '/images/rr-board/facade.webp', project: 'Aloha PIK 2' },
  { image: '/images/rr-board/cublices.webp', project: 'St. Benedictus' },
  { image: '/images/rr-board/suitable.webp', project: 'St. Benedictus' },
]
</script>
