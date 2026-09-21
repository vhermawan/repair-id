<template>
  <section
    ref="heroContainer"
    class="parallax-container w-full min-h-[400px] lg:h-[620px] flex flex-col gap-0 p-[24px_20px_32px] lg:p-[36px_48px_48px] justify-between items-start overflow-hidden relative"
  >
    <img src="/images/projects-hero.jpg" alt="Projects" class="parallax-img z-0" />
    <div class="absolute inset-0 bg-[#005FE7C7] [background-image:linear-gradient(92deg,_#062A5CF2_1%,_#0044A8B3_55%,_#005FE733_99%)] z-[1]" style="mix-blend-mode: multiply" />

    <div class="h-0 relative z-[3]" />

    <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-16 lg:pt-[60px] items-start relative z-[3]">
      <span class="hero-entrance hero-entrance-delay-1 font-mono text-[10px] lg:text-[11px] tracking-[1.2px] text-[#A9C9FF] lg:w-[300px] shrink-0">
        {{ t('projectsPage.heroTag') }}
      </span>
      <div class="flex-1 flex flex-col gap-5 lg:gap-[28px]">
        <h1 class="hero-entrance hero-entrance-delay-2 font-dm-sans font-bold text-[36px] leading-[40px] lg:text-[58px] lg:leading-[61px] tracking-[-1.5px] lg:tracking-[-2.4px] text-cream">
          {{ t('projectsPage.heroTitle') }}
        </h1>
        <p class="hero-entrance hero-entrance-delay-3 font-inter text-[15px] leading-[24px] lg:text-[16px] lg:leading-[26px] text-cream/70 max-w-[680px]">
          {{ t('projectsPage.heroBody') }}
        </p>
      </div>
    </div>

    <div class="hero-entrance hero-entrance-delay-4 w-full flex justify-between items-center pt-[22px] border-t border-cream/20 relative z-[3]">
      <span class="font-mono text-[9px] lg:text-[10px] tracking-[1.2px] text-[#A9C9FF]">
        {{ t('projectsPage.heroStat') }}
      </span>
      <span class="font-inter text-[12px] lg:text-[13px] text-cream">
        {{ t('projectsPage.heroScroll') }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { target: heroContainer } = useParallax(0.3)
</script>
