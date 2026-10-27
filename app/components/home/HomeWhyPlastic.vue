<template>
  <section class="w-full flex flex-col lg:flex-row lg:h-[56.25vw] bg-[#2042EA]">
    <img
      src="/images/home/sachet-flatlay.webp"
      :alt="t('whyPlastic.imageAlt')"
      loading="lazy"
      class="w-full aspect-[3/4] max-h-[560px] object-cover object-bottom lg:w-[52.09vw] lg:h-full lg:max-h-none lg:aspect-auto shrink-0"
    />

    <div class="flex-1 flex flex-col justify-between gap-10 px-5 py-14 lg:pl-[3.3vw] lg:pr-[4.5vw] lg:py-[5.17vw]">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="font-dm-sans text-[40px] leading-[1.05] uppercase text-white lg:text-[5vw] lg:leading-[1.04]"
      >
        <span
          v-for="(line, i) in headingLines" :key="i"
          class="block"
          :style="{ paddingLeft: `${indents[i] ?? 0}em` }"
        >
          {{ line }}
        </span>
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
        class="max-w-[676px] lg:max-w-[35.2vw] font-dm-sans text-base text-white lg:text-[clamp(16px,1.04vw,20px)]"
      >
        {{ t('whyPlastic.body') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const indents = [0, 0, 2.6, 1.45, 1.45]
const headingLines = computed(() => t('whyPlastic.headingLines').split('\n'))
</script>
