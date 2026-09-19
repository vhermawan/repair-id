<template>
  <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
      <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
          {{ t('rrPage.s4.tag') }}
        </span>
        <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
          {{ t('rrPage.s4.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
        {{ t('rrPage.s4.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
      <div
        v-for="app in applications" :key="app.index"
        class="flex flex-col bg-white overflow-hidden"
      >
        <div class="w-full h-[200px] lg:h-[300px] bg-navy/10" />
        <div class="flex flex-col gap-3 p-5 lg:p-7">
          <span class="font-mono text-[11px] tracking-[1px] text-blue-accent">{{ app.index }}</span>
          <h3 class="font-dm-sans font-semibold text-[22px] leading-[26px] lg:text-[28px] lg:leading-[32px] tracking-[-0.8px] text-navy">
            {{ t(app.titleKey) }}
          </h3>
          <p class="font-dm-sans text-[13px] leading-[20px] lg:text-[14px] lg:leading-[22px] text-navy/65">
            {{ t(app.descKey) }}
          </p>
          <a href="#" class="flex items-center gap-2 pt-2.5">
            <span class="font-dm-sans text-[13px] font-semibold text-blue-accent">{{ t('rrPage.s4.seeDetail') }}</span>
            <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5 text-blue-accent" />
          </a>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[60px] lg:justify-between lg:items-end pt-14 border-t border-navy/8">
      <div class="flex-1 flex flex-col gap-2.5 max-w-[680px]">
        <h3 class="font-dm-sans font-bold text-[26px] leading-[30px] lg:text-[34px] lg:leading-[39px] tracking-[-1px] lg:tracking-[-1.4px] text-navy">
          {{ t('rrPage.s4.ctaHeading') }}
        </h3>
        <p class="font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[26px] text-navy/65">
          {{ t('rrPage.s4.ctaBody') }}
        </p>
      </div>
      <div class="flex flex-col gap-2.5 lg:items-end">
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] bg-blue-accent">
            <Icon name="lucide:message-circle" class="w-4 h-4 text-cream" />
            <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">{{ t('rrPage.s4.ctaConsult') }}</span>
          </a>
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#06142833] [outline-offset:-0.5px]">
            <Icon name="lucide:download" class="w-4 h-4 text-navy" />
            <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">{{ t('rrPage.s4.ctaSpec') }}</span>
          </a>
        </div>
        <span class="font-mono text-[10px] tracking-[0.8px] text-navy/50">
          {{ t('rrPage.s4.ctaNote') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const applications = [
  { index: '[ 01 ]', titleKey: 'rrPage.s4.app1.title', descKey: 'rrPage.s4.app1.desc' },
  { index: '[ 02 ]', titleKey: 'rrPage.s4.app2.title', descKey: 'rrPage.s4.app2.desc' },
  { index: '[ 03 ]', titleKey: 'rrPage.s4.app3.title', descKey: 'rrPage.s4.app3.desc' },
  { index: '[ 04 ]', titleKey: 'rrPage.s4.app4.title', descKey: 'rrPage.s4.app4.desc' },
  { index: '[ 05 ]', titleKey: 'rrPage.s4.app5.title', descKey: 'rrPage.s4.app5.desc' },
  { index: '[ 06 ]', titleKey: 'rrPage.s4.app6.title', descKey: 'rrPage.s4.app6.desc' },
]
</script>
