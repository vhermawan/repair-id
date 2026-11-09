<template>
  <section class="relative w-full bg-white font-dm-sans text-black pb-14 lg:pb-[5.25vw]">
    <div class="relative w-full aspect-[1220/1080] lg:w-[63.58vw]">
      <RrBoardCrop src="/images/rr-board/redesign/apps-banner.webp" alt="" :crop="[108.71, 184.29, -8.71, -42.14]" />
      <h2 class="absolute left-5 bottom-5 text-[32px] leading-[1.15] uppercase tracking-[0.05em] text-white lg:left-[19.97vw] lg:bottom-auto lg:top-[42.37vw] lg:text-[4.69vw] lg:leading-[1.11]">
        <span
          v-for="(line, i) in headingLines" :key="i"
          class="block whitespace-nowrap"
          :style="{ paddingLeft: `${i === 1 ? 1.24 : 0}em` }"
        >{{ line }}</span>
      </h2>
    </div>
    <p class="px-5 pt-6 text-base leading-[1.3] lg:absolute lg:left-[67.9vw] lg:top-[51.07vw] lg:w-[25.8vw] lg:p-0 lg:text-[clamp(16px,1.04vw,20px)]">
      {{ t('rrPage.apps.sub') }}
    </p>

    <article class="mt-12 flex flex-col gap-6 px-5 lg:mt-[8.75vw] lg:flex-row lg:items-start lg:gap-0 lg:px-0">
      <div class="relative w-full aspect-[622/593] lg:w-[32.42vw] shrink-0">
        <RrBoardCrop src="/images/rr-board/redesign/facade-1.webp" :alt="t('rrPage.apps.a1.title')" :crop="[142.96, 100, -26.9, 0]" />
      </div>
      <div class="lg:ml-[12.27vw]">
        <h3 :class="titleClass">{{ t('rrPage.apps.a1.title') }}</h3>
        <div class="mt-4 flex flex-col gap-6 lg:mt-[1.8vw] lg:flex-row lg:gap-[3.53vw]">
          <div class="lg:w-[24.3vw]">
            <p :class="bodyClass">{{ t('rrPage.apps.a1.body') }}</p>
            <img src="/images/rr-board/redesign/facade-2.webp" :alt="t('rrPage.apps.a1.title')" loading="lazy" class="mt-6 w-full aspect-[363/458] object-cover lg:mt-[4.52vw] lg:w-[18.89vw]" />
          </div>
          <ul :class="[chipsClass, 'lg:w-[13vw]']">
            <li v-for="tag in tags" :key="tag" :class="chipClass">{{ t(`rrPage.apps.a1.${tag}`) }}</li>
          </ul>
        </div>
      </div>
    </article>

    <article class="mt-14 flex flex-col gap-6 px-5 lg:mt-[4.53vw] lg:flex-row lg:gap-0 lg:pl-[19.92vw] lg:pr-0">
      <div class="order-2 flex flex-col justify-between gap-6 lg:order-none lg:w-[22vw] lg:mt-[13.6vw] lg:gap-[2vw]">
        <div>
          <p :class="bodyClass">{{ t('rrPage.apps.a2.body') }}</p>
          <ul :class="[chipsClass, 'mt-5 lg:mt-[2.2vw]']">
            <li v-for="tag in tags" :key="tag" :class="chipClass">{{ t(`rrPage.apps.a2.${tag}`) }}</li>
          </ul>
        </div>
        <div :class="[clientClass, 'lg:w-[14.41vw]']">
          <span class="font-light tracking-[0.05em] text-[#B4B4B4]">{{ t('rrPage.apps.client') }}</span>
          <span class="text-[#787878]">{{ t('rrPage.apps.a2.client') }}</span>
        </div>
      </div>
      <div class="order-1 lg:order-none lg:ml-[2.84vw] lg:mt-[4.61vw] lg:w-[24.3vw]">
        <h3 :class="[titleClass, 'lg:max-w-[14vw]']">{{ t('rrPage.apps.a2.title') }}</h3>
        <div class="relative mt-5 w-full aspect-[467/484] lg:mt-[2.76vw]">
          <RrBoardCrop src="/images/rr-board/redesign/cubicle-2.webp" :alt="t('rrPage.apps.a2.title')" :crop="[100, 171.23, 0, -52.11]" />
        </div>
      </div>
      <div class="order-3 relative w-full aspect-[561/698] lg:order-none lg:ml-[1.7vw] lg:w-[29.23vw] shrink-0 lg:self-start">
        <RrBoardCrop src="/images/rr-board/redesign/benedictus.webp" :alt="t('rrPage.apps.a2.title')" :crop="[103.34, 110.84, -3.34, -5.42]" />
      </div>
    </article>

    <article class="mt-14 flex flex-col gap-6 px-5 lg:mt-[7.8vw] lg:flex-row lg:gap-[5.08vw] lg:px-0 lg:pl-[20.77vw] lg:pr-[4.88vw]">
      <div class="relative w-full aspect-[561/698] lg:w-[29.23vw] shrink-0">
        <RrBoardCrop src="/images/rr-board/redesign/furniture-1.webp" :alt="t('rrPage.apps.a3.title')" :crop="[188.96, 202.67, -53.36, -57.86]" />
      </div>
      <div class="flex-1 flex flex-col gap-6 lg:gap-0">
        <div class="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <ul :class="[chipsClass, 'lg:w-[14vw] lg:self-start']">
            <li v-for="tag in tags" :key="tag" :class="chipClass">{{ t(`rrPage.apps.a3.${tag}`) }}</li>
          </ul>
          <div class="relative w-full aspect-[346/359] lg:w-[18.03vw] shrink-0">
            <RrBoardCrop src="/images/rr-board/redesign/furniture-2.webp" :alt="t('rrPage.apps.a3.title')" :crop="[144.43, 247.32, -44.43, -115.31]" />
          </div>
        </div>
        <h3 :class="[titleClass, 'lg:mt-auto']">{{ t('rrPage.apps.a3.title') }}</h3>
        <div class="flex flex-col gap-6 lg:mt-[2vw] lg:flex-row lg:justify-between lg:items-end">
          <p :class="[bodyClass, 'lg:w-[22vw]']">{{ t('rrPage.apps.a3.body') }}</p>
          <div :class="[clientClass, 'lg:w-[7.9vw] shrink-0']">
            <span class="font-light tracking-[0.05em] text-[#B4B4B4]">{{ t('rrPage.apps.client') }}</span>
            <span class="text-[#787878]">{{ t('rrPage.apps.a3.client') }}</span>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const tags = ['tag1', 'tag2', 'tag3']
const headingLines = computed(() => t('rrPage.apps.headingLines').split('\n'))

const titleClass = 'font-light text-[44px] leading-none lg:text-[3.39vw]'
const bodyClass = 'text-base leading-[1.3] lg:text-[clamp(16px,1.04vw,20px)]'
const chipsClass = 'flex flex-wrap content-start items-start gap-2 lg:gap-x-[0.55vw] lg:gap-y-[0.9vw]'
const chipClass = 'px-4 py-1 border-[0.5px] border-[#B4B4B4] rounded-full text-base lg:px-[0.79vw] lg:py-[0.2vw] lg:text-[clamp(14px,1.04vw,20px)]'
const clientClass = 'flex flex-col gap-2 text-base leading-[1.3] lg:gap-[0.7vw] lg:text-[clamp(14px,1.04vw,20px)]'
</script>
