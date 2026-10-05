<template>
  <section class="w-full flex flex-col gap-10 lg:gap-12 p-[64px_20px] lg:p-[96px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-5 lg:gap-[80px] lg:justify-between lg:items-end"
    >
      <div class="lg:w-[900px] flex flex-col gap-3 lg:gap-4">
        <span class="font-mono text-[10px] tracking-[1.4px] text-blue-accent">{{ t('rrPage.apps.tag') }}</span>
        <h2 class="font-dm-sans font-bold text-[34px] leading-[38px] lg:text-[52px] lg:leading-[54px] tracking-[-1.2px] lg:tracking-[-2.1px] text-navy">
          {{ t('rrPage.apps.heading') }}
        </h2>
        <p class="font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] text-[#0C2244]">
          {{ t('rrPage.apps.sub') }}
        </p>
      </div>
      <span class="hidden lg:block w-[200px] shrink-0 font-mono text-[10px] tracking-[1.2px] text-navy/45 text-right">
        {{ t('rrPage.apps.count') }}
      </span>
    </div>

    <div class="w-full flex flex-col gap-4">
      <article
        v-for="(app, i) in applications" :key="app.prefix"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="w-full flex flex-col lg:flex-row lg:items-center py-3 lg:p-[14px] border-t border-[#0614281A]"
      >
        <img :src="app.image" :alt="t(`${app.prefix}.title`)" loading="lazy" class="w-full lg:w-[520px] shrink-0 h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
        <div class="flex-1 flex flex-col gap-3.5 p-[20px_8px_8px] lg:p-[20px_32px_20px_40px]">
          <span class="font-mono text-[10.5px] tracking-[1.2px] text-blue-accent">
            — {{ String(i + 1).padStart(2, '0') }} · {{ t('rrPage.apps.label') }}
          </span>
          <h3 class="font-dm-sans font-semibold text-[24px] leading-[30px] lg:text-[30px] lg:leading-[35px] tracking-[-0.8px] lg:tracking-[-1.1px] text-navy">
            {{ t(`${app.prefix}.title`) }}
          </h3>
          <p class="font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] text-[#0C2244]">
            {{ t(`${app.prefix}.body`) }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in ['tag1', 'tag2', 'tag3']" :key="tag"
              class="px-[13px] py-[7px] [outline:1px_solid_#0614281A] [outline-offset:-0.5px] rounded-full font-mono text-[9.5px] tracking-[0.8px] text-[#0C2244]"
            >{{ t(`${app.prefix}.${tag}`) }}</span>
          </div>
          <div v-if="app.client" class="flex items-center gap-3 pt-2.5 border-t border-[#0614281A]">
            <span class="font-mono text-[9.5px] tracking-[1.2px] text-navy/45">{{ t('rrPage.apps.client') }}</span>
            <span class="flex-1 font-dm-sans text-[13.5px] leading-[20px] text-navy">{{ t(app.client) }}</span>
          </div>
        </div>
      </article>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col items-center gap-5 p-[40px_20px_44px] lg:p-[48px_48px_52px] bg-[#E3DFD3] text-center"
    >
      <h3 class="max-w-[700px] font-dm-sans font-bold text-[26px] leading-[31px] lg:text-[34px] lg:leading-[39px] tracking-[-0.9px] lg:tracking-[-1.3px] text-navy">
        {{ t('rrPage.apps.ctaHeading') }}
      </h3>
      <p class="max-w-[560px] font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] text-[#0C2244]">
        {{ t('rrPage.apps.ctaBody') }}
      </p>
      <NuxtLink to="/contact" class="flex items-center gap-2.5 px-6 py-[15px] bg-blue-accent rounded-full">
        <span class="font-dm-sans text-sm font-semibold text-white whitespace-nowrap">{{ t('rrPage.apps.ctaButton') }}</span>
        <Icon name="lucide:arrow-up-right" class="w-4 h-4 text-white" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Client logos from the design (Artboard3/4/5) are not in the repo yet; only text clients are rendered.
const applications = [
  { prefix: 'rrPage.apps.a1', image: '/images/rr-board/facade.webp', client: null },
  { prefix: 'rrPage.apps.a2', image: '/images/rr-board/cublices.webp', client: 'rrPage.apps.a2.client' },
  { prefix: 'rrPage.apps.a3', image: '/images/rr-board/school.webp', client: null },
]
</script>
