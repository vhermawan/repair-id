<template>
  <section class="relative w-full min-h-[560px] flex flex-col items-center justify-center gap-6 px-5 py-16 overflow-hidden text-center font-dm-sans lg:h-[56.25vw] lg:min-h-0 lg:gap-[3.3vw] lg:pl-[12.86vw] lg:pr-0 lg:py-0">
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
    <p class="relative max-w-[625px] text-base leading-[1.3] text-white lg:max-w-none lg:w-[32.53vw] lg:text-[clamp(16px,1.04vw,20px)]">
      {{ t('rrSupply.body') }}
    </p>
    <div class="relative flex flex-col gap-3 sm:flex-row lg:gap-[1.1vw]">
      <a
        href="https://w4c.id/RepairForWorkshops"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-3 px-5 py-1.5 bg-[#2042EA] rounded-full text-base text-white whitespace-nowrap transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] lg:px-[0.86vw] lg:py-[0.25vw] lg:gap-[1.6vw] lg:text-[clamp(16px,1.04vw,20px)]"
      >
        {{ t('rrSupply.ctaPartner') }}
        <img src="/images/rr-board/redesign/arrow-white.svg" alt="" width="12" height="12" />
      </a>
      <a
        href="https://wa.me/6282258044904"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-3 px-5 py-1.5 bg-white border border-black rounded-full text-base text-black whitespace-nowrap transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] lg:px-[0.86vw] lg:py-[0.25vw] lg:gap-[1.6vw] lg:text-[clamp(16px,1.04vw,20px)]"
      >
        {{ t('rrSupply.ctaBuy') }}
        <img src="/images/rr-board/redesign/arrow-black.svg" alt="" width="12" height="12" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
