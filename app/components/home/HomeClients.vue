<template>
  <section class="w-full flex flex-col gap-4 px-5 py-20 lg:p-[140px_48px] bg-white">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex flex-col gap-4"
    >
      <HomeSectionLabel>{{ t('clients.label') }}</HomeSectionLabel>
      <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('clients.heading') }}
      </h2>
    </div>

    <ul class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 lg:gap-x-6 pt-8 lg:pt-12">
      <li
        v-for="(client, i) in clients"
        :key="client.file"
        class="aspect-[4/3] sm:aspect-square flex items-center justify-center"
      >
        <img
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: waveDelay(i) } }"
          :src="`/images/clients/${client.file}`"
          :alt="client.name"
          loading="lazy"
          class="w-full h-full object-contain"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const clients = [
  { file: 'manulife.png', name: 'Manulife' },
  { file: 'pertamina.png', name: 'Pertamina' },
  { file: 'thengono.png', name: 'K-Thengono Design Studio' },
  { file: 'arena.png', name: 'Arena Gourmet' },
  { file: 'tuku.png', name: 'Tuku' },
  { file: 'mayora.png', name: 'Mayora' },
  { file: 'nestle.png', name: 'Nestlé Milo' },
  { file: 'aloha.png', name: 'Aloha' },
  { file: 'toyota.png', name: 'Kala Toyota' },
  { file: 'keppel.png', name: 'Keppel' },
  { file: 'pln.png', name: 'PLN' },
  { file: 'goodday.png', name: 'Good Day' },
  { file: 'pamerindo.png', name: 'Pamerindo' },
  { file: 'indosat.png', name: 'Indosat' },
  { file: 'sana.png', name: 'Sana' },
  { file: 'tuan.png', name: 'Tuan Sua' },
]

function waveDelay(i: number) {
  return ((i % 8) + Math.floor(i / 8)) * 60
}
</script>
