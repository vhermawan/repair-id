<template>
  <section class="relative w-full min-h-[560px] flex flex-col items-center justify-center gap-6 px-5 py-16 overflow-hidden text-center font-dm-sans lg:h-[56.25vw] lg:min-h-0 lg:gap-0 lg:pl-[12.86vw] lg:pr-0 lg:py-0">
    <img src="/images/rr-board/redesign/cta.webp" alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover lg:scale-[1.58]" />
    <div class="absolute inset-0 bg-black/25" aria-hidden="true" />

    <h2
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="relative text-[40px] leading-[1.05] uppercase tracking-[0.05em] text-[#FDFDFD] lg:w-[46.63vw] lg:text-[4.17vw] lg:leading-none"
    >
      {{ t('rrSupply.heading') }}
    </h2>
    <p
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
      class="relative max-w-[625px] text-base leading-[1.3] text-white lg:max-w-none lg:mt-[3.96vw] lg:w-[32.53vw] lg:text-[clamp(16px,1.04vw,20px)]">
      {{ t('rrSupply.body') }}
    </p>
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
      class="relative w-full flex flex-col gap-3 sm:w-auto sm:flex-row lg:mt-[2.03vw] lg:gap-[2.29vw]"
    >
      <a
        href="https://w4c.id/RepairForWorkshops"
        target="_blank"
        rel="noopener noreferrer"
        :class="[ctaClass, 'bg-[#2042EA] text-white']"
      >
        {{ t('rrSupply.ctaPartner') }}
        <img src="/images/rr-board/redesign/cta-arrow-white.svg" alt="" width="24" height="24" class="w-5 h-5 lg:w-[1.27vw] lg:h-[1.27vw]" />
      </a>
      <a
        href="https://wa.me/6282258044904"
        target="_blank"
        rel="noopener noreferrer"
        :class="[ctaClass, 'bg-white border border-black text-black']"
      >
        {{ t('rrSupply.ctaBuy') }}
        <img src="/images/rr-board/redesign/cta-arrow-black.svg" alt="" width="24" height="24" class="w-5 h-5 lg:w-[1.27vw] lg:h-[1.27vw]" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const ctaClass = 'inline-flex items-center justify-between gap-6 h-14 pl-6 pr-7 rounded-full text-2xl whitespace-nowrap transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] lg:w-[20.05vw] lg:h-[3.59vw] lg:gap-[1vw] lg:pl-[1.72vw] lg:pr-[2.08vw] lg:text-[clamp(20px,2.08vw,40px)]'
</script>
