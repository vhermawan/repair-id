<template>
  <section class="relative w-full bg-white pt-28 lg:pt-[7.21vw]">
    <HomeTopNav dark />

    <div class="flex flex-col gap-6 px-5 lg:flex-row lg:gap-0 lg:pl-[13vw] lg:pr-0">
      <h1 class="hero-entrance hero-entrance-delay-1 font-dm-sans font-semibold text-[48px] leading-[1.04] text-black lg:w-[52.52vw] lg:text-[4.79vw]">
        <span class="block">{{ titleLines[0] }}</span>
        <span class="block pl-[2.23em]">{{ titleLines[1] }}</span>
      </h1>

      <div class="hero-entrance hero-entrance-delay-2 flex flex-col gap-5 lg:w-[29.36vw] lg:mt-[1.83vw] lg:gap-[1.43vw]">
        <p class="font-dm-sans text-base text-black lg:text-[clamp(14px,1.04vw,20px)]">
          {{ t('customProjectPage.hero.body') }}
        </p>
        <div class="flex flex-wrap gap-2.5 lg:gap-[0.5vw]">
          <a
            href="#products"
            class="inline-flex items-center gap-3 h-9 px-4 rounded-full bg-black font-dm-sans text-base text-white transition-colors hover:bg-[#2042EA] lg:h-[1.77vw] lg:gap-[0.9vw] lg:px-[0.8vw] lg:text-[clamp(14px,1.04vw,20px)]"
            @click.prevent="scrollToProducts"
          >
            {{ t('customProjectPage.hero.ctaProducts') }}
            <img src="/images/custom-project/redesign/arrow-up-right-white.svg" alt="" width="12" height="12" class="w-3 h-3 lg:w-[0.64vw] lg:h-[0.62vw]" />
          </a>
          <a
            href="https://wa.me/6282258044904"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 h-9 px-4 rounded-full border border-black font-dm-sans text-base text-black transition-colors hover:bg-black hover:text-white lg:h-[1.8vw] lg:gap-[0.9vw] lg:px-[0.8vw] lg:text-[clamp(14px,1.04vw,20px)] group"
          >
            {{ t('customProjectPage.hero.ctaDiscuss') }}
            <img src="/images/home/arrow-up-right.svg" alt="" width="13" height="14" class="w-3 h-3 lg:w-[0.63vw] lg:h-[0.63vw] group-hover:invert" />
          </a>
        </div>
      </div>
    </div>

    <div ref="stripEl" class="cp-marquee-wrap mt-12 w-full overflow-hidden [--u:2.6vw] sm:[--u:1.6vw] lg:mt-[4.45vw] lg:[--u:1vw]">
      <ul class="cp-marquee flex w-max" :aria-label="t('customProjectPage.products.heading')">
        <li
          v-for="(item, i) in [...strip, ...strip]"
          :key="i"
          class="relative shrink-0"
          :style="{ width: u(15.49), height: u(21.5) }"
          :aria-hidden="i >= strip.length ? 'true' : undefined"
        >
          <div class="absolute inset-y-0 left-0 overflow-hidden" :style="{ width: u(13.9) }">
            <div
              class="cp-emerge absolute inset-0"
              :class="revealed && 'is-out'"
              :style="{ transitionDelay: `${(i % strip.length) * 140}ms` }"
            >
              <img
                :src="item.src"
                :alt="i < strip.length ? t(item.labelKey) : ''"
                loading="lazy"
                class="absolute max-w-none"
                :class="item.fit"
                :style="{ left: u(item.left), top: u(item.top), width: u(item.w), height: u(item.h), rotate: item.rotate ? `${item.rotate}deg` : undefined }"
              />
            </div>
          </div>
          <span class="absolute bottom-0 h-[calc(100%-var(--u)*1.46)] w-px bg-black" :style="{ left: u(13.9) }" aria-hidden="true" />
          <span class="absolute bottom-0 left-[calc(var(--u)*0.2)] bg-white pr-1 font-dm-sans text-sm text-[#787878] lg:text-[clamp(14px,1.04vw,20px)]">
            {{ t(item.labelKey) }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const titleLines = computed(() => {
  const title = t('customProjectPage.hero.title')
  const [first, ...rest] = title.split('& ')
  return rest.length ? [`${first}&`, rest.join('& ')] : [title, '']
})

const stripEl = ref<HTMLElement | null>(null)
const revealed = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!stripEl.value) return
  observer = new IntersectionObserver((entries) => {
    if (!entries.some(entry => entry.isIntersecting)) return
    revealed.value = true
    observer?.disconnect()
  }, { rootMargin: '0px 0px -10% 0px' })
  observer.observe(stripEl.value)
})

onBeforeUnmount(() => observer?.disconnect())

const u = (n: number) => `calc(var(--u) * ${n})`

const strip = [
  { src: '/images/custom-project/redesign/strip-medals.webp', labelKey: 'customProjectPage.products.medals', left: 2.19, top: 0.93, w: 12.18, h: 24.6, rotate: 10.81, fit: 'object-cover object-left-bottom' },
  { src: '/images/custom-project/redesign/strip-placard.webp', labelKey: 'customProjectPage.products.placard', left: 0, top: 0.88, w: 17.52, h: 20.46, fit: 'object-cover object-bottom' },
  { src: '/images/custom-project/redesign/strip-phone-holder.webp', labelKey: 'customProjectPage.products.phoneHolder', left: 0, top: 1.56, w: 17.64, h: 20.6, fit: 'object-cover object-bottom' },
  { src: '/images/custom-project/redesign/strip-furniture.webp', labelKey: 'customProjectPage.products.furniture', left: 1.56, top: 3.96, w: 12.18, h: 16.17, fit: 'object-cover object-bottom' },
  { src: '/images/custom-project/redesign/strip-waste-bin.webp', labelKey: 'customProjectPage.products.wasteBin', left: 2.19, top: 0.93, w: 15.33, h: 20.6, fit: 'object-contain object-bottom' },
  { src: '/images/custom-project/redesign/strip-keychain.webp', labelKey: 'customProjectPage.products.keychain', left: 0, top: 1.35, w: 17.64, h: 20.6, fit: 'object-cover' },
]

function scrollToProducts() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('products')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}
</script>
