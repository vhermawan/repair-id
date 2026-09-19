<template>
  <section class="w-full flex flex-col gap-6 lg:gap-10 p-[48px_20px] lg:p-[72px_48px] bg-[#E3DFD3]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end"
    >
      <span class="font-mono text-[11px] tracking-[1.2px] text-[#06142899] whitespace-nowrap">{{ t('clients.tag') }}</span>
      <span class="font-dm-sans text-[12px] lg:text-sm text-[#061428CC]">
        {{ t('clients.subtitle') }}
      </span>
    </div>

    <div
      v-for="(row, ri) in clientRows" :key="ri"
      class="w-full grid grid-cols-2 lg:flex"
    >
      <div
        v-for="(client, ci) in row" :key="client"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: ri * 150 + ci * 80 } }"
        class="flex-1 h-[60px] lg:h-[87px] flex items-center justify-center border-y border-[#0614281F]"
      >
        <span class="font-dm-sans font-bold text-[16px] lg:text-[22px] tracking-[-0.5px] text-[#06142880] whitespace-nowrap">{{ client }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const clientRows = [
  ['ARCHIVE', 'KOPI TUKU', 'SIG', 'UNILEVER'],
  ['GOJEK', 'DANONE', 'AQUA', 'BINUS'],
]
</script>
