<template>
  <section class="w-full flex flex-col gap-8 lg:gap-12 p-[64px_20px] lg:p-[104px_48px] bg-white">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="font-dm-sans font-bold text-[32px] leading-[36px] tracking-[-1.2px] lg:text-[46px] lg:leading-[49px] lg:tracking-[-1.8px] text-navy"
    >
      {{ t('clients.heading') }}
    </h2>

    <ul class="w-full grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[#0614281A]">
      <li
        v-for="(client, i) in clients"
        :key="client.file"
        class="group h-[110px] lg:h-[150px] flex items-center justify-center p-4 border-r border-b border-[#0614281A] transition-colors duration-300 hover:bg-cream"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 16, scale: 0.92 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, delay: waveDelay(i) } }"
          class="h-full w-full flex items-center justify-center"
        >
          <img
            :src="`/images/clients/${client.file}`"
            :alt="client.name"
            loading="lazy"
            class="max-h-full max-w-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
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

// Diagonal wave on the 4-column desktop grid: cells on the same diagonal appear together.
function waveDelay(i: number) {
  return ((i % 4) + Math.floor(i / 4)) * 70
}
</script>
