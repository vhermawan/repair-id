<template>
  <section class="relative w-full h-svh min-h-[640px] lg:min-h-[560px] overflow-hidden bg-black">
    <video
      ref="video"
      class="absolute inset-0 w-full h-full object-cover"
      poster="/images/home/hero-poster.webp"
      :aria-label="t('hero.imageAlt')"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="/videos/home/hero-720.mp4" type="video/mp4" media="(max-width: 1023px)" />
      <source src="/videos/home/hero-1080.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/20" aria-hidden="true" />
    <div class="lg:hidden absolute inset-0 bg-black/25" aria-hidden="true" />

    <HomeTopNav />

    <div class="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 pb-10 lg:static lg:contents">
      <p class="hero-entrance hero-entrance-delay-2 max-w-[420px] font-dm-sans text-lg leading-snug text-white lg:absolute lg:left-[69.84vw] lg:top-[13.1vw] lg:w-[25vw] lg:max-w-none lg:text-[clamp(20px,1.45vw,28px)]">
        {{ t('hero.body') }}
      </p>
      <h1 class="hero-entrance hero-entrance-delay-1 order-first lg:order-none font-dm-sans font-semibold text-[40px] leading-[1.1] text-white whitespace-pre-line lg:absolute lg:left-[16.46vw] lg:bottom-[4.6vw] lg:leading-[1.17]"
        :class="locale === 'id' ? 'lg:text-[5.95vw]' : 'lg:text-[6.77vw]'">
        {{ t('hero.label') }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const video = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.value?.pause()
})
</script>
