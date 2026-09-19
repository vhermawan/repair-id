<template>
  <div class="min-h-screen pt-24 px-5 lg:px-12">
    <h1 class="font-dm-sans font-bold text-[36px] lg:text-[56px] tracking-[-1.5px] text-navy">
      {{ t('page.application') }}
    </h1>
    <p class="font-inter text-[15px] text-navy/60 mt-4">
      {{ t('page.comingSoon') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
