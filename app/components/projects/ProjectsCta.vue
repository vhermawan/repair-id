<template>
  <section class="w-full p-[48px_20px] lg:p-[64px_48px_96px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[64px] p-[32px_24px] lg:p-[44px] justify-between items-start lg:items-center bg-blue-accent"
    >
      <div class="flex-1 flex flex-col gap-[10px]">
        <h2 class="font-dm-sans font-bold type-h2 text-cream">
          {{ t('projectsPage.cta.heading') }}
        </h2>
        <p class="font-inter type-body text-cream/70 max-w-[560px]">
          {{ t('projectsPage.cta.body') }}
        </p>
      </div>

      <div class="w-full lg:w-[300px] shrink-0 flex flex-col gap-[10px]">
        <a
          href="#"
          class="w-full flex items-center justify-center gap-[10px] p-[15px_24px] bg-cream font-inter font-semibold type-cta text-navy transition-opacity hover:opacity-80"
        >
          <span>{{ t('projectsPage.cta.whatsapp') }}</span>
          <Icon name="lucide:message-circle" size="16" />
        </a>
        <a
          href="#"
          class="w-full flex items-center justify-center gap-[10px] p-[15px_24px] outline outline-1 outline-cream/40 font-inter font-semibold type-cta text-cream transition-opacity hover:opacity-80"
        >
          <span>{{ t('projectsPage.cta.catalog') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
