<template>
  <section class="w-full flex flex-col items-center gap-8 px-5 py-16 bg-white lg:gap-[3.8vw] lg:pl-[12.86vw] lg:pr-0 lg:pt-[8.2vw] lg:pb-[8.2vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="font-dm-sans text-[40px] leading-[1.05] uppercase text-black text-center lg:text-[4.17vw] lg:leading-[1.04]"
    >
      {{ t('clients.heading') }}
    </h2>

    <ul class="w-full grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[62.8vw] lg:gap-x-[1.73vw] lg:gap-y-[1.67vw]">
      <li
        v-for="(client, i) in clients"
        :key="client.file"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: waveDelay(i) } }"
        class="relative aspect-[276.5/112.67] overflow-hidden border border-[#B3B3B3]"
      >
        <img
          :src="`/images/clients/${client.file}`"
          :alt="client.name"
          loading="lazy"
          class="absolute left-1/2 top-1/2 aspect-square max-w-none -translate-x-1/2 -translate-y-1/2"
          :style="{ height: `${client.scale}%` }"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const clients = [
  { file: 'aloha.png', name: 'Aloha', scale: 141.55 },
  { file: 'arena.png', name: 'Arena Gourmet', scale: 169.04 },
  { file: 'manulife.png', name: 'Manulife', scale: 189.41 },
  { file: 'mayora.png', name: 'Mayora', scale: 184.59 },
  { file: 'thengono.png', name: 'K-Thengono Design Studio', scale: 196.16 },
  { file: 'nestle.png', name: 'Nestlé Milo', scale: 142.95 },
  { file: 'pertamina.png', name: 'Pertamina', scale: 179.36 },
  { file: 'tuku.png', name: 'Tuku', scale: 182.16 },
  { file: 'goodday.png', name: 'Good Day', scale: 141.55 },
  { file: 'indosat.png', name: 'Indosat', scale: 169.04 },
  { file: 'keppel.png', name: 'Keppel', scale: 189.41 },
  { file: 'pamerindo.png', name: 'Pamerindo', scale: 184.59 },
  { file: 'toyota.png', name: 'Kala Toyota', scale: 196.16 },
  { file: 'tuan.png', name: 'Tuan Sua', scale: 142.95 },
  { file: 'sana.png', name: 'Sana', scale: 179.36 },
  { file: 'pln.png', name: 'PLN', scale: 182.16 },
]

function waveDelay(i: number) {
  return ((i % 4) + Math.floor(i / 4)) * 70
}
</script>
