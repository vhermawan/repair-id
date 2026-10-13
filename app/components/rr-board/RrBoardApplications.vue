<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <div class="lg:w-[900px] flex flex-col gap-3 lg:gap-4">
        <h2 class="font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy">
          {{ t('rrPage.apps.heading') }}
        </h2>
        <p class="font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
          {{ t('rrPage.apps.sub') }}
        </p>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4">
      <article
        v-for="(app, i) in applications" :key="app.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 py-4 lg:py-6 border-t border-[#0614281A]"
      >
        <img :src="app.image" :alt="t(`${app.prefix}.title`)" loading="lazy" class="w-full lg:w-[58%] shrink-0 aspect-[3/2] object-cover" />
        <div class="flex-1 flex flex-col gap-3.5 p-[20px_8px_8px] lg:p-[20px_32px_20px_40px]">
          <span class="font-dm-sans font-medium text-[12px] tracking-[1.2px] text-blue-accent">
            — {{ String(i + 1).padStart(2, '0') }} · {{ t('rrPage.apps.label') }}
          </span>
          <h3 class="font-dm-sans font-semibold text-[24px] leading-[30px] lg:text-[30px] lg:leading-[35px] tracking-[-0.8px] lg:tracking-[-1.1px] text-navy">
            {{ t(`${app.prefix}.title`) }}
          </h3>
          <p class="font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
            {{ t(`${app.prefix}.body`) }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in ['tag1', 'tag2', 'tag3']" :key="tag"
              class="px-[13px] py-[7px] [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full font-dm-sans font-medium text-[12px] tracking-[0.6px] text-[#0C2244]"
            >{{ t(`${app.prefix}.${tag}`) }}</span>
          </div>
          <div v-if="app.client" class="flex items-center gap-3 pt-2.5 border-t border-[#0614281A]">
            <span class="font-dm-sans font-medium text-[11px] tracking-[1.2px] text-navy/45">{{ t('rrPage.apps.client') }}</span>
            <span class="flex-1 font-dm-sans text-[15px] leading-[22px] text-navy">{{ t(app.client) }}</span>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const applications = [
  { prefix: 'rrPage.apps.a1', image: '/images/rr-board/facade.webp', client: null },
  { prefix: 'rrPage.apps.a2', image: '/images/rr-board/cublices.webp', client: 'rrPage.apps.a2.client' },
  { prefix: 'rrPage.apps.a3', image: '/images/rr-board/school.webp', client: null },
]
</script>
