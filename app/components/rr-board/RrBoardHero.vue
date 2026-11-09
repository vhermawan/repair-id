<template>
  <section class="relative z-10 w-full bg-white">
    <div class="relative w-full h-svh min-h-[640px] lg:min-h-[560px] bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <img src="/images/rr-board/redesign/hero.webp" alt="" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div class="absolute inset-x-0 bottom-0 h-[62.6%] bg-[linear-gradient(to_bottom,rgba(0,0,0,0),#000_232%)]" aria-hidden="true" />
      </div>

      <HomeTopNav />

      <p class="hero-entrance hero-entrance-delay-1 absolute left-5 right-5 top-24 font-dm-sans text-base text-white lg:left-[77.57vw] lg:right-auto lg:top-[13.13vw] lg:w-[17.08vw] lg:text-[clamp(16px,1.04vw,20px)]">
        {{ t('rrPage.hero.since') }}
      </p>

      <div class="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 pb-10 lg:h-[21.35vw] lg:block lg:p-0 lg:border-t-2 lg:border-white">
        <h1 class="hero-entrance hero-entrance-delay-2 font-dm-sans font-semibold text-[64px] leading-none text-white lg:absolute lg:left-[18.17vw] lg:bottom-[22.81vw] lg:text-[6.77vw] lg:leading-[0.854]">
          {{ t('rrPage.hero.title') }}
        </h1>
        <p class="hero-entrance hero-entrance-delay-3 max-w-[560px] font-dm-sans text-base text-white lg:absolute lg:left-[28.67vw] lg:top-[1.81vw] lg:w-[29.39vw] lg:max-w-none lg:text-[clamp(16px,1.04vw,20px)]">
          {{ t('rrPage.hero.lede') }}
        </p>

        <div class="hidden lg:block lg:absolute lg:left-[67.95vw] lg:top-0">
          <RrBoardHeroCard />
        </div>
      </div>
    </div>

    <div class="lg:hidden">
      <RrBoardHeroCard />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
