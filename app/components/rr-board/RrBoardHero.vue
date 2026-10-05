<template>
  <section class="w-full flex flex-col items-center p-[112px_20px_0] lg:p-[156px_48px_0] bg-cream">
    <div class="w-full flex flex-col gap-5 items-center pb-10 lg:pb-14 text-center">
      <span class="hero-entrance hero-entrance-delay-1 font-dm-sans font-bold text-[10px] lg:text-[11px] tracking-[1.2px] text-[#0C2244]">
        {{ t('rrPage.hero.since') }}
      </span>
      <h1 class="hero-entrance hero-entrance-delay-2 max-w-[900px] font-dm-sans font-bold text-[44px] leading-[46px] lg:text-[76px] lg:leading-[76px] tracking-[-1.6px] lg:tracking-[-3px] text-navy">
        {{ t('rrPage.hero.title') }}
      </h1>
      <div class="hero-entrance hero-entrance-delay-3 max-w-[640px] flex flex-col gap-3 font-dm-sans text-[15px] leading-[23px] lg:text-[16px] lg:leading-[25px] text-[#0C2244]">
        <p>{{ t('rrPage.hero.lede') }}</p>
        <p>{{ t('rrPage.hero.lede2') }}</p>
      </div>
      <div class="hero-entrance hero-entrance-delay-4 pt-3">
        <a
          href="https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 p-[8px_8px_8px_26px] bg-navy rounded-full"
        >
          <span class="font-dm-sans text-[15px] font-semibold text-cream whitespace-nowrap">{{ t('rrPage.hero.ctaSpec') }}</span>
          <span class="w-9 h-9 flex items-center justify-center bg-cream rounded-full">
            <Icon name="lucide:arrow-up-right" class="w-[17px] h-[17px] text-navy" />
          </span>
        </a>
      </div>
    </div>

    <div
      ref="heroContainer"
      class="hero-entrance hero-entrance-delay-4 parallax-container relative w-full h-[520px] lg:h-[640px] flex flex-col justify-between p-[24px_20px_0] lg:p-[40px_40px_0] rounded-[20px] lg:rounded-[28px] overflow-hidden"
    >
      <img src="/images/rr-board/board-3.webp" alt="RR Board dark surface" class="parallax-img z-0" />
      <div class="absolute inset-0 z-[1] [background-image:linear-gradient(90deg,_#06142899_0%,_#06142833_45%,_#06142899_100%)]" />

      <div class="relative z-[2] flex flex-col gap-1.5">
        <span class="font-dm-sans font-bold text-[48px] leading-[48px] lg:text-[64px] lg:leading-[64px] tracking-[-1.8px] lg:tracking-[-2.4px] text-white">
          {{ t('rrPage.hero.statValue') }}
        </span>
        <span class="w-[200px] font-dm-sans text-[13px] leading-[18px] text-white/80">
          {{ t('rrPage.hero.statCaption') }}
        </span>
      </div>

      <div class="relative z-[2] w-full flex flex-col gap-7 items-end">
        <div class="w-full max-w-[300px] flex flex-col gap-2 text-right">
          <span class="font-dm-sans font-bold text-[22px] leading-[24px] lg:text-[28px] lg:leading-[29px] tracking-[-1px] text-white">
            {{ t('rrPage.hero.noteTitle') }}
          </span>
          <span class="font-dm-sans text-[13px] leading-[19px] text-white/80">
            {{ t('rrPage.hero.noteBody') }}
          </span>
        </div>
        <div class="w-full flex justify-center">
          <ul class="grid grid-cols-2 lg:flex gap-x-5 gap-y-3 lg:gap-[34px] p-[14px_20px_16px] lg:p-[16px_34px_18px] bg-cream rounded-t-[20px] lg:rounded-t-full">
            <li v-for="spec in specBar" :key="spec.labelKey" class="flex items-center gap-[9px]">
              <Icon :name="spec.icon" class="w-4 h-4 shrink-0 text-navy" />
              <span class="font-dm-sans text-[13px] lg:text-[14px] font-semibold text-navy whitespace-nowrap">{{ t(spec.labelKey) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { target: heroContainer } = useParallax(0.3)

const specBar = [
  { icon: 'lucide:ruler', labelKey: 'rrPage.specs.size.value' },
  { icon: 'lucide:layers', labelKey: 'rrPage.specs.thickness.value' },
  { icon: 'lucide:weight', labelKey: 'rrPage.specs.weight.value' },
  { icon: 'lucide:droplets', labelKey: 'rrPage.hero.waterResistant' },
]
</script>
