<template>
  <section class="w-full flex flex-col gap-8 px-5 py-16 bg-white lg:flex-row lg:gap-0 lg:pl-[18.18vw] lg:pr-0 lg:pt-[6.25vw] lg:pb-[6.6vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="font-dm-sans text-[40px] leading-[1.05] uppercase text-black lg:w-[35.15vw] lg:shrink-0 lg:text-[5vw] lg:leading-[1.04]"
    >
      {{ t('impact.heading') }}
    </h2>

    <ul class="w-full lg:w-[42.7vw]">
      <li
        v-for="(stat, i) in stats" :key="stat"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-3 py-6 border-b border-black last:border-b-0 first:pt-0 lg:gap-[1.15vw] lg:pt-[3.85vw] lg:pb-[1.8vw] lg:first:pt-0"
      >
        <span class="font-dm-sans font-light text-[48px] leading-[1.1] tracking-[-0.05em] text-black whitespace-nowrap lg:text-[4.17vw]">{{ t(`${stat}.value`) }}</span>
        <p class="font-dm-sans text-base leading-[1.1] text-black lg:text-[clamp(16px,1.04vw,20px)]">{{ t(`${stat}.desc`) }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = ['impact.stat1', 'impact.stat2', 'impact.stat3']
</script>
