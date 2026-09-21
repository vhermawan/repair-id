<template>
  <section class="w-full flex flex-col gap-6 lg:gap-[26px] p-[48px_20px] lg:p-[56px_48px] bg-[#E3DFD3]">
    <span
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="font-mono text-[11px] tracking-[1.2px] text-blue-accent"
    >
      {{ t('projectsPage.clients.tag') }}
    </span>

    <div class="w-full grid grid-cols-2 lg:flex lg:justify-between lg:items-center">
      <span
        v-for="(client, i) in clients"
        :key="client"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
        class="font-dm-sans font-semibold text-[15px] lg:text-[18px] tracking-[-0.4px] text-navy/56 py-3 lg:py-0"
      >
        {{ client }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const clients = [
  'Warung Kang Darka',
  'Milo Indonesia',
  'RBU Grants',
  'Sekolah Cikal',
  'Komunitas Bank Sampah',
]
</script>
