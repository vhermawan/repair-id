<template>
  <footer id="contact" class="w-full flex flex-col gap-10 lg:gap-16 p-[48px_20px_32px_20px] lg:p-[96px_48px_48px_48px] bg-[#062A5C]">
    <!-- Footer Top -->
    <div class="w-full flex flex-col gap-8 lg:flex-row lg:gap-20">
      <!-- Copy -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex-1 flex flex-col gap-5 lg:gap-6"
      >
        <h2 class="w-full text-cream font-dm-sans font-bold text-[28px] leading-[32px] lg:text-[54px] lg:leading-[57px] tracking-[-1.2px] lg:tracking-[-2.2px]">
          {{ t('footer.heading') }}
        </h2>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-3.5">
          <a href="https://wa.me/6282258044904" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-cream rounded-xl">
            <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">{{ t('footer.ctaWhatsapp') }}</span>
            <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
          </a>
          <a href="https://tr.ee/K4G-EzRrb1" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] [outline:1px_solid_#F3EFE44D] [outline-offset:-0.5px] rounded-xl">
            <span class="font-dm-sans text-[13px] lg:text-sm font-semibold text-cream whitespace-nowrap">{{ t('footer.ctaCatalog') }}</span>
          </a>
        </div>
      </div>

      <!-- Contact Info -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
        class="lg:w-80 shrink-0 flex flex-col gap-4 lg:gap-[18px]"
      >
        <div v-for="item in contacts" :key="item.key" class="w-full flex flex-col gap-[4px] lg:gap-[5px]">
          <span class="font-mono text-[10px] tracking-[1.2px] text-[#A9C9FF] whitespace-nowrap">{{ item.key }}</span>
          <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="w-full font-dm-sans text-[13px] lg:text-sm leading-[21px] text-cream hover:underline">{{ item.value }}</a>
          <span v-else class="w-full font-dm-sans text-[13px] lg:text-sm leading-[21px] text-cream">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="w-full flex flex-col items-start gap-4 lg:flex-row lg:justify-between lg:items-end pt-6 lg:pt-7 border-t border-[#F3EFE42E]">
      <img
        src="/logo.png"
        alt="Repair Material Studio"
        class="h-[48px] lg:h-[96px] max-w-full w-auto object-contain opacity-10"
      />
      <span class="font-mono text-[9px] lg:text-[10px] tracking-[0.8px] text-[#F3EFE480] whitespace-nowrap">
        {{ t('footer.copyright') }}
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const contacts = [
  { key: 'PRODUCTION SITE', value: 'Bandung' },
  { key: 'EMAIL', value: 'carissa@repairproject.id', href: 'mailto:carissa@repairproject.id' },
  { key: 'WHATSAPP', value: '+62 822-5804-4904', href: 'https://wa.me/6282258044904' },
]
</script>
