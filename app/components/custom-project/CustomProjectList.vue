<template>
  <section class="w-full flex flex-col gap-10 lg:gap-14 px-5 py-20 lg:p-[140px_48px] bg-[#F3F0E9]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col gap-4"
    >
      <HomeSectionLabel>{{ t('customProjectPage.projects.eyebrow') }}</HomeSectionLabel>
      <h2 class="font-dm-sans font-normal text-[#111317] text-[32px] leading-[36px] tracking-[-0.6px] lg:text-[40px] lg:leading-[44px]">
        {{ t('customProjectPage.projects.heading') }}
      </h2>
      <p class="max-w-[720px] font-dm-sans text-[#5A5D63] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[31px]">
        {{ t('customProjectPage.projects.subtitle') }}
      </p>
    </div>

    <div class="w-full flex flex-col">
      <article
        v-for="(project, i) in projects"
        :key="project.key"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="w-full flex flex-col gap-6 lg:gap-16 py-8 lg:py-14 border-t border-[#E3DFD6]"
        :class="i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'"
      >
        <img
          :src="project.image"
          :alt="t(`customProjectPage.projects.${project.key}.title`)"
          loading="lazy"
          class="w-full lg:w-[520px] xl:w-[620px] shrink-0 aspect-[31/23] object-cover rounded-[4px]"
        >
        <div class="flex-1 min-w-0 flex flex-col gap-5">
          <h3 class="font-dm-sans font-normal text-[#111317] text-[24px] leading-[28px] lg:text-[28px] lg:leading-[32px] tracking-[-0.6px]">
            {{ t(`customProjectPage.projects.${project.key}.title`) }}
          </h3>
          <p class="font-dm-sans text-[#5A5D63] text-[18px] leading-[29px]">
            {{ t(`customProjectPage.projects.${project.key}.desc`) }}
          </p>
          <dl class="w-full flex flex-col pt-3">
            <div class="flex flex-col gap-1.5 py-5 border-t border-[#E3DFD6]">
              <dt class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#5A5D63]">{{ t('customProjectPage.projects.totalItem') }}</dt>
              <dd class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] tracking-[-0.4px]">{{ t(`customProjectPage.projects.${project.key}.items`) }}</dd>
            </div>
            <div class="flex flex-col gap-1.5 py-5 border-t border-[#E3DFD6]">
              <dt class="font-dm-mono text-[12px] leading-[16px] lg:text-[13px] tracking-[1.3px] uppercase text-[#5A5D63]">{{ t('customProjectPage.projects.totalWaste') }}</dt>
              <dd class="font-dm-sans font-normal text-[#111317] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] tracking-[-0.4px]">{{ t(`customProjectPage.projects.${project.key}.waste`) }}</dd>
            </div>
          </dl>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const projects = [
  { key: 'schoolSet', image: '/images/custom-project/project-school-set.webp' },
  { key: 'miloBin', image: '/images/custom-project/project-milo-bin.webp' },
  { key: 'ecoRunfest', image: '/images/custom-project/project-eco-runfest.webp' },
]
</script>
