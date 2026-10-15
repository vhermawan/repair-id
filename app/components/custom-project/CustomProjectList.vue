<template>
  <section class="w-full flex flex-col gap-6 lg:gap-10 p-[0_20px_64px] lg:p-[0_48px_104px]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex flex-col gap-4 lg:gap-10"
    >
      <h2 class="font-dm-sans font-bold text-[26px] lg:text-[30px] tracking-[-1px] text-navy">
        {{ t('customProjectPage.projects.heading') }}
      </h2>
      <p class="max-w-[720px] font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
        {{ t('customProjectPage.projects.subtitle') }}
      </p>
    </div>

    <div class="w-full flex flex-col">
      <article
        v-for="project in projects"
        :key="project.key"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 py-8 lg:py-10 border-t border-[#0614281A]"
      >
        <img
          :src="project.image"
          :alt="t(`customProjectPage.projects.${project.key}.title`)"
          loading="lazy"
          class="w-full lg:w-[560px] xl:w-[640px] shrink-0 aspect-[4/3] object-cover"
        >
        <div class="flex-1 min-w-0 flex flex-col gap-5">
          <h3 class="font-dm-sans font-bold text-[24px] leading-[30px] lg:text-[30px] lg:leading-[36px] tracking-[-1px] text-navy">
            {{ t(`customProjectPage.projects.${project.key}.title`) }}
          </h3>
          <p class="font-dm-sans text-[16px] leading-[25px] lg:text-[18px] lg:leading-[29px] text-[#0C2244]">
            {{ t(`customProjectPage.projects.${project.key}.desc`) }}
          </p>
          <dl class="w-full flex flex-col gap-4 pt-1">
            <div class="flex flex-col gap-1 pt-4 border-t border-[#0614281A]">
              <dt class="font-dm-sans font-medium text-[12px] lg:text-[13px] tracking-[1.2px] text-[#06142873]">{{ t('customProjectPage.projects.totalItem') }}</dt>
              <dd class="font-dm-sans font-semibold text-[18px] lg:text-[20px] text-navy">{{ t(`customProjectPage.projects.${project.key}.items`) }}</dd>
            </div>
            <div class="flex flex-col gap-1 pt-4 border-t border-[#0614281A]">
              <dt class="font-dm-sans font-medium text-[12px] lg:text-[13px] tracking-[1.2px] text-[#06142873]">{{ t('customProjectPage.projects.totalWaste') }}</dt>
              <dd class="font-dm-sans font-semibold text-[18px] lg:text-[20px] text-navy">{{ t(`customProjectPage.projects.${project.key}.waste`) }}</dd>
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
