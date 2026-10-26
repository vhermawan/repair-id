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

    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-stretch"
    >
      <div class="relative w-full lg:w-[660px] lg:max-w-[50%] shrink-0 aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-[#E8E5DC] rounded-[8px] overflow-hidden">
        <img
          v-for="(app, i) in applications" :key="app.prefix"
          :src="app.image"
          :alt="t(`${app.prefix}.title`)"
          :aria-hidden="i !== active"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out"
          :class="i === active ? 'opacity-100' : 'opacity-0'"
        />
      </div>

      <div class="flex-1 flex flex-col justify-center">
        <article
          v-for="(app, i) in applications" :key="app.prefix"
          class="border-t border-[#E3DFD6] last:border-b"
        >
          <button
            type="button"
            :id="`rr-app-tab-${i}`"
            :aria-expanded="i === active"
            :aria-controls="`rr-app-panel-${i}`"
            class="w-full pt-[22px] text-left font-dm-sans font-normal text-[26px] leading-[32px] lg:text-[30px] lg:leading-[36px] tracking-[-0.8px] transition-[color,padding] duration-300 cursor-pointer"
            :class="i === active ? 'text-[#111317] pb-3' : 'text-[#B4B0A4] hover:text-[#5A5D63] pb-[22px]'"
            @click="active = i"
          >
            {{ t(`${app.prefix}.title`) }}
          </button>
          <div
            :id="`rr-app-panel-${i}`"
            role="region"
            :aria-labelledby="`rr-app-tab-${i}`"
            class="grid transition-[grid-template-rows] duration-500 ease-out"
            :class="i === active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <div class="flex flex-col gap-3 pb-[22px]">
                <p class="font-dm-sans text-[15px] leading-[24px] text-[#5A5D63]">
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
                  <span class="font-dm-sans text-[18px] leading-[28px] text-[#111317]">{{ t(app.client) }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const active = ref(0)

const applications = [
  { prefix: 'rrPage.apps.a1', image: '/images/rr-board/facade.webp', client: null },
  { prefix: 'rrPage.apps.a2', image: '/images/rr-board/cublices.webp', client: 'rrPage.apps.a2.client' },
  { prefix: 'rrPage.apps.a3', image: '/images/rr-board/furniture.webp', client: null },
]
</script>
