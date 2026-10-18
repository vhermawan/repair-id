<template>
  <section class="w-full p-[0_20px_64px] lg:p-[0_48px_96px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col items-center gap-5 p-[48px_20px_52px] lg:p-[64px_48px_68px] bg-[#F3F0E9] rounded-[4px] text-center"
    >
      <h2 class="max-w-[760px] font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('rrSupply.heading') }}
      </h2>
      <p class="max-w-[620px] font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('rrSupply.body') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
        <a href="https://w4c.id/RepairForWorkshops" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] bg-[#111317] hover:bg-[#0B5FFF] rounded-full transition-colors">
          <span class="font-dm-sans text-[16px] leading-[21px] text-white whitespace-nowrap">{{ t('rrSupply.ctaPartner') }}</span>
          <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
        </a>
        <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#E3DFD6] [outline-offset:-0.5px] rounded-full hover:bg-white transition-colors">
          <span class="font-dm-sans text-[16px] leading-[21px] text-[#111317] whitespace-nowrap">{{ t('rrSupply.ctaBuy') }}</span>
          <Icon name="lucide:message-circle" class="w-4 h-4 text-[#111317]" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
