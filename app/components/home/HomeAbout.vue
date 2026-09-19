<template>
  <section id="about" class="w-full flex flex-col gap-8 lg:gap-14 p-[48px_20px] lg:p-[80px_48px_64px_48px] bg-[#005FE7]">
    <div class="w-full flex flex-col gap-6 lg:flex-row lg:gap-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="lg:w-[300px] shrink-0 flex flex-col gap-2 lg:gap-[14px]"
      >
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#CFE0FF]">{{ t('about.tag') }}</span>
        <span class="font-dm-sans text-[13px] leading-[20px] text-[#F3EFE4B3]">
          {{ t('about.subtitle') }}
        </span>
      </div>

      <div class="flex-1 flex flex-col gap-6 lg:gap-7">
        <p
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
          class="w-full font-dm-sans font-medium text-[22px] leading-[30px] lg:text-[30px] lg:leading-[41px] tracking-[-0.6px] text-cream"
        >
          {{ t('about.body') }}
        </p>

        <div class="flex flex-col gap-4 lg:flex-row lg:gap-12">
          <div
            v-for="(stat, i) in aboutStats" :key="stat.labelKey"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 + i * 120 } }"
            class="flex-1 flex flex-row lg:flex-col items-baseline lg:items-start gap-2 lg:gap-1.5"
          >
            <span class="font-dm-sans font-semibold text-[28px] lg:text-[38px] tracking-[-1.2px] text-cream whitespace-nowrap">{{ t(stat.valueKey) }}</span>
            <span class="font-dm-sans text-[12px] lg:text-[13px] leading-[18px] text-[#F3EFE4CC]">{{ t(stat.labelKey) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const aboutStats = [
  { valueKey: 'about.stat1.value', labelKey: 'about.stat1.label' },
  { valueKey: 'about.stat2.value', labelKey: 'about.stat2.label' },
  { valueKey: 'about.stat3.value', labelKey: 'about.stat3.label' },
]
</script>
