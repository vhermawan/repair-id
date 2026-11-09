<template>
  <section class="w-full bg-white px-5 py-14 lg:pl-[12.86vw] lg:pr-[5.12vw] lg:pt-[2.6vw] lg:pb-[2.6vw]">
    <h2 class="pb-4 border-b border-[#787878] font-dm-sans text-[32px] leading-tight uppercase tracking-[0.05em] text-black lg:pl-[5.3vw] lg:pb-[1.04vw] lg:text-[40px] lg:leading-[80px]">
      {{ t('rrPage.specs.heading') }}
    </h2>

    <div class="mt-8 flex flex-col gap-10 font-dm-sans text-base text-black lg:mt-[2.97vw] lg:flex-row lg:gap-[3.57vw] lg:pl-[3.74vw] lg:text-[clamp(16px,1.04vw,20px)]">
      <img
        src="/images/rr-board/redesign/board.webp"
        :alt="t('rrPage.specs.imageAlt')"
        loading="lazy"
        class="w-full aspect-[613/735] object-cover object-bottom lg:w-[31.94vw] shrink-0"
      />

      <div class="flex-1 min-w-0 lg:pt-[1.3vw]">
        <p class="max-w-[528px] leading-[1.3] lg:max-w-[27.52vw]">{{ t('rrPage.specs.sub') }}</p>

        <dl class="mt-6 border-t border-[#787878] lg:mt-[2.2vw]">
          <div
            v-for="spec in specs" :key="spec"
            class="grid grid-cols-[110px_1fr] gap-x-3 py-3 border-b border-[#787878] items-center lg:grid-cols-[12.45vw_14.3vw_1fr] lg:gap-x-0 lg:py-0 lg:h-[3.97vw]"
          >
            <dt class="text-[#787878]">{{ t(`rrPage.specs.${spec}.key`) }}</dt>
            <dd>{{ t(`rrPage.specs.${spec}.value`) }}</dd>
            <dd class="col-start-2 mt-1 text-sm text-[#A1A1A1] lg:col-start-3 lg:mt-0 lg:text-right lg:text-[clamp(13px,0.78vw,15px)]">{{ t(`rrPage.specs.${spec}.note`) }}</dd>
          </div>

          <div class="grid grid-cols-[110px_1fr] gap-x-3 py-3 lg:grid-cols-[12.45vw_1fr] lg:gap-x-0 lg:py-0 lg:pt-[1.4vw]">
            <dt class="text-[#787878]">{{ t('rrPage.specs.color.key') }}</dt>
            <dd class="leading-[1.3] lg:max-w-[25.53vw]">{{ t('rrPage.specs.color.body') }}</dd>
          </div>
        </dl>

        <ul class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-[2.2vw] lg:flex lg:justify-between lg:gap-0">
          <li v-for="finish in finishes" :key="finish.labelKey" class="flex flex-col gap-3 lg:w-[7.81vw] lg:gap-[1vw]">
            <img :src="finish.image" :alt="t(finish.labelKey)" loading="lazy" class="w-full aspect-square object-cover" />
            <span>{{ t(finish.labelKey) }}</span>
          </li>
        </ul>

        <p class="mt-6 text-sm leading-[22px] text-[#A1A1A1] lg:mt-[2.2vw] lg:ml-[12.45vw] lg:text-[clamp(13px,0.78vw,15px)] lg:leading-[1.47]">
          {{ t('rrPage.specs.color.note') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const specs = ['size', 'thickness', 'weight', 'price']

const finishes = [
  { image: '/images/rr-board/redesign/finish-mozaic.webp', labelKey: 'rrPage.specs.finishMozaic' },
  { image: '/images/rr-board/redesign/finish-dark.webp', labelKey: 'rrPage.specs.finishDark' },
  { image: '/images/rr-board/redesign/finish-red.webp', labelKey: 'rrPage.specs.finishRed' },
  { image: '/images/rr-board/redesign/finish-terra.webp', labelKey: 'rrPage.specs.finishTerra' },
]
</script>
