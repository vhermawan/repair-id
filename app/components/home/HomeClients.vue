<template>
  <section class="w-full flex flex-col gap-6 lg:gap-10 p-[48px_20px] lg:p-[72px_48px] bg-white">
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

    <!-- Row 1: scroll left -->
    <div class="overflow-hidden">
      <div class="marquee">
        <div class="marquee-track">
          <div
            v-for="client in row1"
            :key="client"
            class="flex-shrink-0 w-[50vw] lg:w-[25vw] h-[120px] lg:h-[150px] flex items-center justify-center border-b border-[#e5e5e5]"
          >
            <img :src="`/images/clients/${client}`" :alt="client" class="max-h-[120px] lg:max-h-[170px] w-auto object-contain transition-transform duration-300 hover:scale-125" />
          </div>
          <div
            v-for="client in row1"
            :key="`dup-${client}`"
            class="flex-shrink-0 w-[50vw] lg:w-[25vw] h-[120px] lg:h-[150px] flex items-center justify-center border-b border-[#e5e5e5]"
          >
            <img :src="`/images/clients/${client}`" :alt="client" class="max-h-[120px] lg:max-h-[170px] w-auto object-contain transition-transform duration-300 hover:scale-125" />
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: scroll right -->
    <div class="overflow-hidden">
      <div class="marquee">
        <div class="marquee-track marquee-track--reverse">
          <div
            v-for="client in row2"
            :key="client"
            class="flex-shrink-0 w-[50vw] lg:w-[25vw] h-[120px] lg:h-[150px] flex items-center justify-center border-b border-[#e5e5e5]"
          >
            <img :src="`/images/clients/${client}`" :alt="client" class="max-h-[120px] lg:max-h-[170px] w-auto object-contain transition-transform duration-300 hover:scale-125" />
          </div>
          <div
            v-for="client in row2"
            :key="`dup-${client}`"
            class="flex-shrink-0 w-[50vw] lg:w-[25vw] h-[120px] lg:h-[150px] flex items-center justify-center border-b border-[#e5e5e5]"
          >
            <img :src="`/images/clients/${client}`" :alt="client" class="max-h-[120px] lg:max-h-[170px] w-auto object-contain transition-transform duration-300 hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const row1 = [
  'aloha.png',
  'arena.png',
  'goodday.png',
  'indosat.png',
  'keppel.png',
  'manulife.png',
  'mayora.png',
  'nestle.png',
]

const row2 = [
  'pamerindo.png',
  'pertamina.png',
  'pln.png',
  'sana.png',
  'thengono.png',
  'toyota.png',
  'tuan.png',
  'tuku.png',
]
</script>

<style scoped>
.marquee {
  width: 100%;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 25s linear infinite;
}

.marquee-track--reverse {
  animation: scroll-right 25s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}
</style>
