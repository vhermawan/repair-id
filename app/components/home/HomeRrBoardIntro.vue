<template>
  <section id="rr-board" class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 p-[48px_20px] lg:p-[88px_48px] bg-[#EDF3FE]">
    <div
      v-motion
      :initial="{ opacity: 0, x: 40 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
      class="flex-1 flex flex-col gap-5 lg:gap-6"
    >
      <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">{{ t('rrBoardIntro.tag') }}</span>
      <h2 class="w-full font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[52px] lg:leading-[56px] tracking-[-1.5px] lg:tracking-[-2px] text-[#062A5C]">
        {{ t('rrBoardIntro.heading') }}
      </h2>
      <p class="w-full font-dm-sans text-[14px] leading-[22px] lg:text-base lg:leading-[26px] text-[#062A5CCC]">
        {{ t('rrBoardIntro.body') }}
      </p>

      <img src="/images/rr-board-terrazzo-blue.jpg" alt="RR Board terrazzo surface" class="lg:hidden w-full h-[240px] object-cover" />

      <div class="flex flex-col gap-0">
        <div v-for="spec in rrBoardSpecs" :key="spec.keyKey"
          class="flex justify-between items-center py-3 lg:py-[14px] border-t border-[#D6E4FD]">
          <span class="font-mono text-[10px] lg:text-[11px] tracking-[0.6px] text-[#0044A8]">{{ t(spec.keyKey) }}</span>
          <span class="font-dm-sans text-[13px] lg:text-sm font-medium text-[#062A5C]">{{ t(spec.valueKey) }}</span>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
      class="hidden lg:flex w-full lg:w-[55%] shrink-0 flex-col gap-2"
    >
      <img src="/images/rr-board-stack.jpg" alt="RR Board stacked panels" class="w-full h-[320px] object-cover rounded" />
      <div class="flex gap-2">
        <img src="/images/rr-board-terrazzo-colorful.jpg" alt="Terrazzo colorful" class="flex-1 h-[200px] object-cover rounded" />
        <img src="/images/rr-board-terrazzo-blue.jpg" alt="Terrazzo blue" class="flex-1 h-[200px] object-cover rounded" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const rrBoardSpecs = [
  { keyKey: 'rrBoardIntro.spec1.key', valueKey: 'rrBoardIntro.spec1.value' },
  { keyKey: 'rrBoardIntro.spec2.key', valueKey: 'rrBoardIntro.spec2.value' },
  { keyKey: 'rrBoardIntro.spec3.key', valueKey: 'rrBoardIntro.spec3.value' },
  { keyKey: 'rrBoardIntro.spec4.key', valueKey: 'rrBoardIntro.spec4.value' },
]
</script>
