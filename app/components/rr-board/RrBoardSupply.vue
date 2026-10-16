<template>
  <section class="w-full p-[0_20px_64px] lg:p-[0_48px_96px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col items-center gap-5 p-[48px_20px_52px] lg:p-[64px_48px_68px] bg-[#E3DFD3] text-center"
    >
      <h2 class="max-w-[760px] font-dm-sans font-bold type-h2 text-navy">
        {{ t('rrSupply.heading') }}
      </h2>
      <p class="max-w-[620px] font-dm-sans type-body text-[#0C2244]">
        {{ t('rrSupply.body') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
        <a href="https://w4c.id/RepairForWorkshops" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] bg-blue-accent rounded-full">
          <span class="font-dm-sans type-cta font-semibold text-white whitespace-nowrap">{{ t('rrSupply.ctaPartner') }}</span>
          <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
        </a>
        <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#06142833] [outline-offset:-0.5px] rounded-full">
          <span class="font-dm-sans type-cta font-semibold text-navy whitespace-nowrap">{{ t('rrSupply.ctaBuy') }}</span>
          <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
