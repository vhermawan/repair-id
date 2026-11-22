<template>
  <section
    ref="section"
    class="relative w-full px-5 pt-24 lg:px-0 lg:pt-0 lg:mt-[4.41vw]"
    :style="pinHeight ? { height: `${pinHeight}px` } : undefined"
  >
    <div class="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:overflow-hidden">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex flex-col gap-6 lg:shrink-0 lg:flex-row lg:items-start lg:gap-0 lg:pl-[13vw] lg:pt-[3.56vw] lg:pb-[3.13vw]"
      >
        <h2 class="font-dm-sans text-[40px] leading-[1.2] uppercase tracking-[0.05em] text-black lg:w-[52.52vw] lg:text-[4.17vw] lg:leading-[1.2]">
          <span v-for="line in headingLines" :key="line" class="block">{{ line }}</span>
        </h2>
        <p class="font-dm-sans text-base text-black lg:w-[29.36vw] lg:mt-[5.16vw] lg:text-[clamp(14px,1.04vw,20px)]">
          {{ t('customProjectPage.projects.subtitle') }}
        </p>
      </div>

      <div ref="viewport" class="lg:flex-1 lg:min-h-0 lg:overflow-hidden">
        <div ref="list" class="lg:pb-[4.17vw] lg:will-change-transform">
          <article
            v-for="project in projects"
            :key="project.key"
            class="relative mt-20 flex flex-col gap-6 lg:block lg:w-full"
            :class="project.article"
          >
            <figure
              v-for="(image, i) in project.images"
              :key="image.src"
              v-motion
              :initial="{ opacity: 0, y: 32 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: i * 120 } }"
              class="relative overflow-hidden lg:absolute"
              :class="image.box"
              :style="{ aspectRatio: image.ratio }"
            >
              <img
                :src="image.src"
          :srcset="image.srcset"
          :sizes="image.sizes"
                :alt="i === 0 ? t(`customProjectPage.projects.${project.key}.title`) : ''"
                loading="lazy"
                class="absolute max-w-none"
                :class="image.crop ? '' : ['inset-0 w-full h-full', image.fill ? 'object-fill' : 'object-cover object-bottom']"
                :style="image.crop && { width: `${image.crop[0]}%`, height: `${image.crop[1]}%`, left: `${image.crop[2]}%`, top: `${image.crop[3]}%` }"
              />
            </figure>

            <h3
              v-motion
              :initial="{ opacity: 0, y: 24 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
              class="font-dm-sans font-light text-[36px] leading-none text-black lg:absolute lg:text-[3.39vw]"
              :class="project.title"
            >
              {{ t(`customProjectPage.projects.${project.key}.title`) }}
            </h3>

            <p
              class="font-dm-sans text-base leading-[1.3] text-black lg:absolute lg:text-[clamp(14px,1.04vw,20px)]"
              :class="project.desc"
            >
              {{ t(`customProjectPage.projects.${project.key}.desc`) }}
            </p>

            <dl class="flex flex-col gap-5 lg:absolute lg:gap-[2.49vw]" :class="project.stats">
              <div v-for="stat in stats" :key="stat" class="flex flex-col items-start gap-2 lg:gap-[0.91vw]">
                <dt class="font-dm-sans font-light text-sm leading-none uppercase tracking-[0.05em] text-[#B4B4B4] lg:text-[clamp(14px,1.04vw,20px)]">
                  {{ t(`customProjectPage.projects.${stat === 'items' ? 'totalItem' : 'totalWaste'}`) }}
                </dt>
                <dd class="inline-flex items-center h-8 px-3.5 rounded-full border-[0.5px] border-[#B4B4B4] font-dm-sans text-base text-black lg:h-[1.8vw] lg:px-[0.79vw] lg:text-[clamp(14px,1.04vw,20px)]">
                  {{ t(`customProjectPage.projects.${project.key}.${stat}`) }}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const section = ref<HTMLElement | null>(null)
const viewport = ref<HTMLElement | null>(null)
const list = ref<HTMLElement | null>(null)
const { pinHeight } = usePinnedScroll(section, viewport, list)

const headingLines = computed(() => t('customProjectPage.projects.heading').split(' '))

const stats = ['items', 'waste'] as const

const projects = [
  {
    key: 'schoolSet',
    article: 'lg:mt-0 lg:h-[33vw]',
    images: [
      { src: '/images/custom-project/redesign/manulife-1.webp', srcset: '/images/custom-project/redesign/manulife-1-sm.webp 700w, /images/custom-project/redesign/manulife-1.webp 1050w', sizes: '(min-width: 1024px) 28vw, 84vw', ratio: '622 / 593', box: 'lg:left-0 lg:top-0 lg:w-[32.42vw]', crop: [83.94, 117.43, 19.98, -2.65] },
      { src: '/images/custom-project/redesign/manulife-2.webp', ratio: '363 / 424', box: 'w-2/3 self-end lg:left-[72.05vw] lg:top-[10.92vw] lg:w-[18.89vw]' },
    ],
    title: '-order-1 lg:order-none lg:left-[44.69vw] lg:top-0 lg:w-[30.5vw]',
    desc: 'lg:left-[44.69vw] lg:top-[6.11vw] lg:w-[24.3vw]',
    stats: 'lg:left-[44.69vw] lg:top-[10.92vw]',
  },
  {
    key: 'miloBin',
    article: 'lg:mt-[9.86vw] lg:h-[36.34vw]',
    images: [
      { src: '/images/custom-project/redesign/milo-1.webp', ratio: '561 / 698', box: 'lg:left-[70.7vw] lg:top-0 lg:w-[29.23vw]' },
      { src: '/images/custom-project/redesign/milo-2.webp', ratio: '467 / 484', fill: true, box: 'w-2/3 lg:left-[44.69vw] lg:top-[13.6vw] lg:w-[24.3vw]' },
    ],
    title: '-order-1 lg:order-none lg:left-[44.69vw] lg:top-[4.62vw] lg:w-[16.75vw]',
    desc: 'lg:left-[13vw] lg:top-[13.6vw] lg:w-[24.3vw]',
    stats: 'lg:left-[13vw] lg:top-[18.41vw]',
  },
  {
    key: 'ecoRunfest',
    article: 'lg:mt-[10.71vw] lg:h-[36.34vw]',
    images: [
      { src: '/images/custom-project/redesign/pertamina-1.webp', srcset: '/images/custom-project/redesign/pertamina-1-sm.webp 800w, /images/custom-project/redesign/pertamina-1.webp 1260w', sizes: '(min-width: 1024px) 33vw, 112vw', ratio: '561 / 698', box: 'lg:left-[13vw] lg:top-0 lg:w-[29.23vw]', crop: [112.28, 113.96, -6.14, -11.62] },
      { src: '/images/custom-project/redesign/pertamina-2.webp', ratio: '346 / 359', box: 'w-2/3 self-end lg:left-[76.72vw] lg:top-0 lg:w-[18.03vw]', crop: [126.65, 162.74, -10.65, -35.49] },
    ],
    title: '-order-1 lg:order-none lg:left-[45.44vw] lg:top-[19.55vw] lg:w-[22.25vw]',
    desc: 'lg:left-[45.44vw] lg:top-[31.51vw] lg:w-[22vw]',
    stats: 'lg:left-[45.44vw] lg:top-0',
  },
]
</script>
