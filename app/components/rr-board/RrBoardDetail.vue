<template>
  <section class="w-full flex flex-col gap-12 lg:gap-[72px] p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
      <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
          {{ t('rrPage.s1.tag') }}
        </span>
        <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
          {{ t('rrPage.s1.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
        {{ t('rrPage.s1.subtitle') }}
      </p>
    </div>

    <div class="w-full flex flex-col lg:flex-row gap-10 lg:gap-[64px]">
      <div class="w-full lg:w-[640px] shrink-0 flex flex-col gap-7">
        <p class="font-dm-sans text-[15px] leading-[26px] lg:text-base lg:leading-[27px] text-navy">
          {{ t('rrPage.s1.body1') }}
        </p>
        <p class="font-dm-sans text-[15px] leading-[26px] lg:text-base lg:leading-[27px] text-navy/65">
          {{ t('rrPage.s1.body2') }}
        </p>

        <div class="flex flex-col">
          <div
            v-for="spec in detailSpecs" :key="spec.keyKey"
            class="flex justify-between items-center py-[14px] border-t border-[#D6E4FD]"
          >
            <span class="font-mono text-[11px] tracking-[0.6px] text-[#0044A8]">{{ t(spec.keyKey) }}</span>
            <span class="font-dm-sans text-[14px] font-medium text-navy-deep">{{ t(spec.valueKey) }}</span>
          </div>
        </div>
      </div>

      <div class="flex-1 flex flex-col gap-3">
        <div class="w-full h-[280px] lg:h-[420px] bg-navy/10 rounded-sm" />
        <div class="flex gap-3">
          <div class="flex-1 h-[120px] lg:h-[150px] bg-navy/10 rounded-sm" />
          <div class="flex-1 h-[120px] lg:h-[150px] bg-navy/10 rounded-sm" />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-7 pt-14 border-t border-navy/8">
      <div class="w-full flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end">
        <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
          {{ t('rrPage.process.tag') }}
        </span>
        <p class="lg:w-[494px] shrink-0 font-dm-sans text-[13px] leading-[21px] text-navy/65">
          {{ t('rrPage.process.subtitle') }}
        </p>
      </div>

      <div class="w-full grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div v-for="step in processSteps" :key="step.index" class="flex flex-col gap-3.5">
          <div class="w-full h-[160px] lg:h-[200px] bg-navy/10 rounded" />
          <div class="flex flex-col gap-[5px]">
            <div class="flex items-center gap-2.5">
              <span class="font-mono text-[11px] tracking-[1px] text-blue-accent">{{ step.index }}</span>
              <span class="font-dm-sans font-bold text-[16px] lg:text-[18px] tracking-[-0.5px] text-navy">{{ t(step.titleKey) }}</span>
            </div>
            <p class="font-dm-sans text-[13px] leading-[20px] text-navy/60">{{ t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const detailSpecs = [
  { keyKey: 'rrPage.s1.spec1.key', valueKey: 'rrPage.s1.spec1.value' },
  { keyKey: 'rrPage.s1.spec2.key', valueKey: 'rrPage.s1.spec2.value' },
  { keyKey: 'rrPage.s1.spec3.key', valueKey: 'rrPage.s1.spec3.value' },
  { keyKey: 'rrPage.s1.spec4.key', valueKey: 'rrPage.s1.spec4.value' },
  { keyKey: 'rrPage.s1.spec5.key', valueKey: 'rrPage.s1.spec5.value' },
]

const processSteps = [
  { index: '01', titleKey: 'rrPage.process.step1.title', descKey: 'rrPage.process.step1.desc' },
  { index: '02', titleKey: 'rrPage.process.step2.title', descKey: 'rrPage.process.step2.desc' },
  { index: '03', titleKey: 'rrPage.process.step3.title', descKey: 'rrPage.process.step3.desc' },
  { index: '04', titleKey: 'rrPage.process.step4.title', descKey: 'rrPage.process.step4.desc' },
  { index: '05', titleKey: 'rrPage.process.step5.title', descKey: 'rrPage.process.step5.desc' },
]
</script>
