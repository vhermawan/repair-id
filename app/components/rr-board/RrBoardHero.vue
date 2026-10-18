<template>
  <section class="w-full flex flex-col items-center p-[112px_20px_0] lg:p-[156px_48px_0] bg-[#F3F0E9]">
    <div class="w-full flex flex-col gap-5 items-center pb-10 lg:pb-14 text-center">
      <span class="hero-entrance hero-entrance-delay-1 font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#5A5D63]">
        {{ t('rrPage.hero.since') }}
      </span>
      <h1 class="hero-entrance hero-entrance-delay-2 max-w-[900px] font-dm-sans font-normal text-[#111317] text-[44px] leading-[48px] tracking-[-1px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.2px]">
        {{ t('rrPage.hero.title') }}
      </h1>
      <div class="hero-entrance hero-entrance-delay-3 max-w-[760px] flex flex-col gap-3 font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        <p>{{ t('rrPage.hero.lede') }}</p>
        <p>{{ t('rrPage.hero.lede2') }}</p>
      </div>
      <div class="hero-entrance hero-entrance-delay-4 pt-3">
        <a
          href="https://drive.google.com/file/d/1l1lH4kcBTzydOxQBjxEUtHJs6iwUaUVX/view"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3.5 p-[8px_8px_8px_26px] bg-[#111317] hover:bg-[#0B5FFF] rounded-full transition-colors"
        >
          <span class="font-dm-sans text-[16px] leading-[21px] text-[#F3F0E9] whitespace-nowrap">{{ t('rrPage.hero.ctaSpec') }}</span>
          <span class="w-9 h-9 flex items-center justify-center bg-[#F3F0E9] rounded-full">
            <Icon name="lucide:arrow-up-right" class="w-[17px] h-[17px] text-[#111317]" />
          </span>
        </a>
      </div>
    </div>

    <div
      ref="heroContainer"
      class="hero-entrance hero-entrance-delay-4 parallax-container relative w-full h-[520px] lg:h-[640px] flex flex-col justify-between p-[24px_20px_0] lg:p-[40px_40px_0] rounded-[4px] overflow-hidden"
    >
      <img src="/images/rr-board/board-3.webp" alt="RR Board dark surface" class="parallax-img z-0" />
      <div class="absolute inset-0 z-[1] [background-image:linear-gradient(90deg,_#06142899_0%,_#06142833_45%,_#06142899_100%)]" />

      <div class="relative z-[2] flex flex-col gap-1.5">
        <span class="font-dm-sans font-normal text-white text-[40px] leading-[44px] lg:text-[48px] lg:leading-[50px] tracking-[-1.2px]">
          {{ t('rrPage.hero.statValue') }}
        </span>
        <span class="w-[200px] font-dm-sans text-[15px] leading-[22px] text-white/80">
          {{ t('rrPage.hero.statCaption') }}
        </span>
      </div>

      <div class="relative z-[2] w-full flex flex-col gap-7 items-end">
        <div class="w-full max-w-[300px] flex flex-col gap-2 text-right">
          <span class="font-dm-sans font-normal text-white text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px]">
            {{ t('rrPage.hero.noteTitle') }}
          </span>
          <span class="font-dm-sans text-[15px] leading-[22px] text-white/80">
            {{ t('rrPage.hero.noteBody') }}
          </span>
        </div>
        <div class="w-full flex justify-center">
          <ul class="grid grid-cols-2 lg:flex gap-x-5 gap-y-3 lg:gap-[34px] p-[14px_20px_16px] lg:p-[16px_34px_18px] bg-[#F3F0E9] rounded-t-[20px] lg:rounded-t-full">
            <li v-for="spec in specBar" :key="spec.labelKey" class="flex items-center gap-[9px]">
              <Icon :name="spec.icon" class="w-4 h-4 shrink-0 text-[#111317]" />
              <span class="font-dm-sans text-[14px] leading-[20px] lg:text-[15px] lg:leading-[22px] text-[#111317] whitespace-nowrap">{{ t(spec.labelKey) }}</span>
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
