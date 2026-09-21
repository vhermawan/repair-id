<template>
  <section class="w-full flex flex-col gap-12 lg:gap-[56px] p-[48px_20px] lg:p-[96px_48px] bg-cream">
    <div
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end"
    >
      <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
        <span class="font-mono text-[11px] tracking-[1.2px] text-blue-accent">
          {{ t('projectsPage.s1.tag') }}
        </span>
        <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[49px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
          {{ t('projectsPage.s1.heading') }}
        </h2>
      </div>
      <p class="lg:w-[420px] shrink-0 font-inter text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/56">
        {{ t('projectsPage.s1.subtitle') }}
      </p>
    </div>

    <div class="w-full flex flex-col">
      <div
        v-for="(service, i) in services"
        :key="service.index"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 150 } }"
        class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[48px] py-8 lg:py-9 border-t border-navy/12"
      >
        <span class="font-dm-sans font-bold text-[32px] lg:text-[44px] leading-[44px] tracking-[-1.5px] lg:tracking-[-2px] text-blue-accent lg:w-[96px] shrink-0">
          {{ service.index }}
        </span>

        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <h3 class="font-dm-sans font-semibold text-[24px] lg:text-[30px] leading-[33px] tracking-[-0.5px] lg:tracking-[-1px] text-navy">
            {{ t(service.titleKey) }}
          </h3>
          <p class="font-inter text-[14px] lg:text-[15px] leading-[24px] text-navy/65 max-w-[560px]">
            {{ t(service.descKey) }}
          </p>
          <span class="font-mono text-[10px] tracking-[1.1px] text-blue-accent">
            {{ t(service.metaKey) }}
          </span>
        </div>

        <div class="w-full lg:w-[320px] shrink-0 flex flex-col gap-[10px]">
          <a
            v-for="cta in service.ctas"
            :key="cta.labelKey"
            href="#"
            class="w-full flex items-center justify-between gap-[10px] p-[14px_18px] font-inter font-semibold text-[14px] transition-opacity hover:opacity-80"
            :class="cta.primary ? 'bg-blue-accent text-cream' : 'outline outline-1 outline-navy/20 text-navy'"
          >
            <span class="flex items-center gap-[10px]">
              <Icon :name="cta.icon" size="16" />
              <span>{{ t(cta.labelKey) }}</span>
            </span>
            <Icon name="lucide:arrow-up-right" size="15" :class="cta.primary ? 'text-cream' : 'text-navy/65'" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const services = [
  {
    index: 'A',
    titleKey: 'projectsPage.s1.a.title',
    descKey: 'projectsPage.s1.a.desc',
    metaKey: 'projectsPage.s1.a.meta',
    ctas: [
      { labelKey: 'projectsPage.s1.a.cta1', icon: 'lucide:shopping-bag', primary: true },
      { labelKey: 'projectsPage.s1.a.cta2', icon: 'lucide:message-circle', primary: false },
    ],
  },
  {
    index: 'B',
    titleKey: 'projectsPage.s1.b.title',
    descKey: 'projectsPage.s1.b.desc',
    metaKey: 'projectsPage.s1.b.meta',
    ctas: [
      { labelKey: 'projectsPage.s1.b.cta1', icon: 'lucide:message-circle', primary: true },
    ],
  },
  {
    index: 'C',
    titleKey: 'projectsPage.s1.c.title',
    descKey: 'projectsPage.s1.c.desc',
    metaKey: 'projectsPage.s1.c.meta',
    ctas: [
      { labelKey: 'projectsPage.s1.c.cta1', icon: 'lucide:message-circle', primary: true },
    ],
  },
]
</script>
