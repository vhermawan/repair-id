<template>
  <section class="w-full flex flex-col gap-8 px-5 py-16 bg-white lg:flex-row lg:gap-0 lg:pl-[18.18vw] lg:pr-0 lg:pt-[6.25vw] lg:pb-[6.6vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="font-dm-sans text-[40px] leading-[1.05] uppercase text-black whitespace-pre-line lg:w-[35.15vw] lg:shrink-0 lg:text-[5vw] lg:leading-[1.04]"
    >
      {{ t('impact.heading') }}
    </h2>

    <ul ref="list" class="w-full lg:w-[42.7vw]">
      <li
        v-for="(stat, i) in stats" :key="stat"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + i * 100 } }"
        class="flex flex-col gap-3 py-6 border-b border-black last:border-b-0 first:pt-0 lg:gap-[1.15vw] lg:pt-[3.85vw] lg:pb-[1.8vw] lg:first:pt-0"
      >
        <span class="font-dm-sans font-light text-[48px] leading-[1.1] tracking-[-0.05em] text-black whitespace-nowrap lg:text-[4.17vw]">{{ countUp(t(`${stat}.value`)) }}</span>
        <p class="font-dm-sans text-base leading-[1.1] text-black lg:text-[clamp(16px,1.04vw,20px)]">{{ t(`${stat}.desc`) }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = ['impact.stat1', 'impact.stat2', 'impact.stat3']
const list = ref<HTMLElement | null>(null)
const progress = ref(1)

function countUp(value: string) {
  const match = value.match(/^([\d.,]+)(.*)$/)
  if (!match || progress.value >= 1) return value
  const [, number, unit] = match
  const separator = number.match(/[.,]/)?.[0] ?? ','
  const current = Math.round(Number(number.replace(/\D/g, '')) * progress.value)
  return String(current).replace(/\B(?=(\d{3})+(?!\d))/g, separator) + unit
}

onMounted(() => {
  if (!list.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  progress.value = 0
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    observer.disconnect()
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / 2000, 1)
      progress.value = 1 - Math.pow(1 - p, 3)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, { threshold: 0.3 })
  observer.observe(list.value)
})
</script>
