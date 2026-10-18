<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full lg:max-w-[900px] flex flex-col gap-3 lg:gap-4"
    >
      <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('rrPage.apps.heading') }}
      </h2>
      <p class="font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('rrPage.apps.sub') }}
      </p>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      <article
        v-for="(app, i) in applications" :key="app.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        class="flex flex-col gap-5 border-t border-[#E3DFD6]"
      >
        <img :src="app.image" :alt="t(`${app.prefix}.title`)" loading="lazy" class="w-full h-[260px] lg:h-[300px] rounded-[4px] object-cover" />
        <div class="flex flex-col gap-3.5">
          <h3 class="font-dm-sans font-normal text-[#111317] text-[30px] leading-[35px] tracking-[-1px] lg:text-[38px] lg:leading-[43px] lg:tracking-[-1.4px]">
            {{ t(`${app.prefix}.title`) }}
          </h3>
          <p class="font-dm-sans text-[16px] leading-[26px] text-[#5A5D63]">
            {{ t(`${app.prefix}.body`) }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in ['tag1', 'tag2', 'tag3']" :key="tag"
              class="px-[13px] py-[7px] [outline:1px_solid_#E3DFD6] [outline-offset:-0.5px] rounded-full font-dm-sans text-[15px] leading-[22px] tracking-[0.6px] text-[#5A5D63]"
            >{{ t(`${app.prefix}.${tag}`) }}</span>
          </div>
          <div v-if="app.client" class="flex flex-col gap-1 pt-[11px] border-t border-[#E3DFD6]">
            <span class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#5A5D63]">{{ t('rrPage.apps.client') }}</span>
            <span class="font-dm-sans text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px] text-[#111317]">{{ t(app.client) }}</span>
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
  { prefix: 'rrPage.apps.a3', image: '/images/rr-board/furniture.webp', client: null },
]
</script>
