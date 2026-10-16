<template>
  <section class="w-full bg-cream flex flex-col gap-10 lg:gap-[56px] p-[64px_20px] lg:p-[104px_48px]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="font-dm-sans font-bold type-display text-navy"
    >
      {{ t('impact.heading') }}
    </h2>

    <div class="w-full flex flex-col sm:flex-row border-t border-[#0614281F]">
      <div
        v-for="(stat, i) in stats" :key="stat"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex-1 flex flex-col gap-3 pt-6 sm:pt-9 pr-8"
      >
        <span class="font-dm-sans font-bold type-display-sm text-navy whitespace-nowrap">{{ t(`${stat}.value`) }}</span>
        <p class="max-w-[260px] font-dm-sans type-body text-[#0C2244]">{{ t(`${stat}.desc`) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = ['impact.stat1', 'impact.stat2', 'impact.stat3']
</script>
