<template>
  <section class="w-full flex flex-col gap-8 lg:gap-[48px] p-[112px_20px_0] lg:p-[140px_48px_0]">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:justify-between lg:items-end">
      <div class="lg:w-[820px] flex flex-col gap-4 lg:gap-[20px]">
        <span class="hero-entrance hero-entrance-delay-1 font-dm-sans font-bold text-[10px] tracking-[1.4px] text-blue-accent whitespace-nowrap">
          {{ t('contactPage.heroTag') }}
        </span>
        <h1 class="hero-entrance hero-entrance-delay-2 font-dm-sans font-bold text-[44px] leading-[46px] lg:text-[86px] lg:leading-[84px] tracking-[-1.6px] lg:tracking-[-3.4px] text-navy whitespace-pre-line">
          {{ t('contactPage.heroTitle') }}
        </h1>
      </div>
      <p class="hero-entrance hero-entrance-delay-3 lg:w-[360px] shrink-0 lg:pb-4 font-dm-sans text-[15px] leading-[23px] text-[#0C2244]">
        {{ t('contactPage.heroBody') }}
      </p>
    </div>

    <img
      src="/images/contact.webp"
      :alt="t('contactPage.heroImageAlt')"
      class="hero-entrance hero-entrance-delay-4 w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
    />
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
