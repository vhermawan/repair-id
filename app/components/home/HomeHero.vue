<template>
  <section ref="heroContainer" class="parallax-container w-full min-h-[600px] lg:h-[780px] flex flex-col gap-0 p-[24px_20px] lg:p-[36px_48px] justify-between items-start overflow-hidden relative">
    <img src="/images/hero-bg.webp" alt="Repair workshop" class="parallax-img z-0" />

    <div class="absolute inset-0 bg-[#00000050] mix-blend-multiply z-[1]" />
    <div class="absolute inset-0 [background-image:linear-gradient(95.456deg,_#00000070_2.755%,_#00000035_50%,_#00000010_97.245%)] z-[2]" />

    <div class="h-0 relative z-[3]" />

    <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-[72px] items-start relative z-[3]">
      <div class="hero-entrance hero-entrance-delay-1 font-dm-sans font-medium text-[24px] leading-[32px] lg:text-[34px] lg:leading-[44px] tracking-[-1px] text-cream lg:w-[300px] shrink-0">
        {{ t('hero.label') }}
      </div>

      <div class="flex-1 flex flex-col gap-[38px]">
        <p class="hero-entrance hero-entrance-delay-2 font-dm-sans font-medium text-[24px] leading-[32px] lg:text-[34px] lg:leading-[44px] tracking-[-1px] text-cream">
          {{ t('hero.body') }}
        </p>

        <div class="hero-entrance hero-entrance-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-[14px]">
          <NuxtLink to="/rr-board" class="flex items-center gap-[10px] px-6 py-[15px] bg-cream">
            <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('hero.ctaBoard') }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-navy" />
          </NuxtLink>
          <a href="#" class="flex items-center gap-[10px] px-6 py-[15px] [outline:1px_solid_#F4F1E980] [outline-offset:-0.5px]">
            <Icon name="lucide:message-circle" class="w-4 h-4 text-cream" />
            <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">{{ t('hero.ctaDiscuss') }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="hero-entrance hero-entrance-delay-4 w-full flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center pt-5 lg:pt-[26px] border-t border-[#F4F1E933] relative z-[3]" style="gap: 80px">
      <span class="font-mono text-[8px] lg:text-[10px] tracking-[1.2px] text-[#A9C9FF] hidden lg:block">
        {{ t('hero.since') }}
      </span>
      <div class="flex items-end gap-4 lg:gap-[44px]">
        <div v-for="metric in heroMetrics" :key="metric.labelKey" class="flex flex-col items-start lg:flex-row lg:items-end gap-0.5 lg:gap-2">
          <span class="font-dm-sans font-bold text-[12px] lg:text-[18px] tracking-[-0.3px] lg:tracking-[-0.5px] text-cream whitespace-nowrap">{{ t(metric.valueKey) }}</span>
          <span class="font-dm-sans text-[8px] lg:text-[12px] text-[#BFD8FF] whitespace-nowrap">{{ t(metric.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { target: heroContainer } = useParallax(0.3)

const heroMetrics = [
  { valueKey: 'hero.metric1.value', labelKey: 'hero.metric1.label' },
  { valueKey: 'hero.metric2.value', labelKey: 'hero.metric2.label' },
  { valueKey: 'hero.metric3.value', labelKey: 'hero.metric3.label' },
]
</script>
