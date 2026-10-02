<template>
  <section class="w-full pt-[64px] lg:pt-[76px] bg-white">
    <div
      ref="heroContainer"
      class="parallax-container w-full min-h-[520px] lg:h-[520px] flex flex-col p-[32px_20px_96px] lg:p-[40px_48px_150px] justify-between lg:justify-end items-start overflow-hidden relative"
    >
      <img src="/images/rr-board-terrazzo-blue.webp" alt="RR Board surface" class="parallax-img z-0" />
      <div class="absolute inset-0 bg-[#00000050] mix-blend-multiply z-[1]" />
      <div class="absolute inset-0 [background-image:linear-gradient(95.456deg,_#00000070_2.755%,_#00000035_50%,_#00000010_97.245%)] z-[1]" />
      <div class="absolute left-0 right-0 bottom-0 h-[96px] lg:h-[120px] [background-image:linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFFB3_45%,_#FFFFFF_80%,_#FFFFFF_100%)] z-[3]" />

      <span class="hero-entrance hero-entrance-delay-1 lg:absolute lg:left-12 lg:top-10 relative z-[2] font-mono text-[10px] tracking-[1.2px] text-cream/50">
        {{ t('rrPage.hero.since') }}
      </span>

      <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[72px] pt-12 lg:pt-0 items-start lg:items-end relative z-[2]">
        <div class="flex-1 flex flex-col gap-3 lg:gap-[18px]">
          <h1 class="hero-entrance hero-entrance-delay-2 font-dm-sans font-bold text-[56px] leading-[52px] lg:text-[88px] lg:leading-[79px] tracking-[-2px] lg:tracking-[-3.8px] text-cream">
            {{ t('rrPage.hero.title') }}
          </h1>
          <p class="hero-entrance hero-entrance-delay-3 font-dm-sans font-medium text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28px] tracking-[-0.6px] lg:tracking-[-0.9px] text-cream/80">
            {{ t('rrPage.hero.lede') }}
          </p>
        </div>

        <div class="hero-entrance hero-entrance-delay-4 w-full lg:w-[460px] shrink-0 flex flex-col gap-6">
          <p class="font-dm-sans text-[14px] leading-[24px] lg:text-[15px] lg:leading-[26px] text-cream/85">
            {{ t('rrPage.hero.body') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="https://w4c.id/LVPGoodsCatalogue" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] bg-cream rounded-xl">
              <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('rrPage.hero.ctaSpec') }}</span>
              <Icon name="lucide:download" class="w-4 h-4 text-navy" />
            </a>
            <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-[9px] px-[22px] py-[15px] [outline:1px_solid_#F4F1E966] [outline-offset:-0.5px] rounded-xl">
              <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">{{ t('rrPage.hero.ctaAsk') }}</span>
              <Icon name="lucide:message-circle" class="w-[15px] h-[15px] text-cream" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { target: heroContainer } = useParallax(0.3)
</script>
