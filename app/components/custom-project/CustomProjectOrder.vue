<template>
  <section
    ref="section"
    class="relative w-full px-5 pt-24 pb-24 lg:mt-[4.98vw] lg:p-0 lg:mb-[10.42vw]"
    :style="pinHeight ? { height: `${pinHeight}px` } : undefined"
  >
    <div class="flex flex-col gap-12 lg:sticky lg:top-0 lg:h-screen lg:flex-row lg:gap-0 lg:overflow-hidden lg:pl-[13vw] lg:pt-[4.17vw]">
      <div class="lg:w-[39.63vw] lg:flex lg:flex-col lg:min-h-0">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-dm-sans text-[36px] leading-[1.2] uppercase tracking-[0.05em] text-black lg:shrink-0 lg:text-[4.17vw]"
        >
          <span
            v-for="(line, i) in headingLines"
            :key="line"
            class="block lg:whitespace-nowrap"
            :style="{ paddingLeft: indents[i] }"
          >{{ line }}</span>
        </h2>

        <div ref="viewport" class="lg:flex-1 lg:min-h-0 lg:overflow-hidden">
          <div ref="list" class="lg:pb-[4.17vw] lg:will-change-transform">
            <ol class="mt-12 flex flex-col lg:mt-[9.95vw]">
              <li
                v-for="(num, i) in steps"
                :key="num"
                v-motion
                :initial="{ opacity: 0, y: 24 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
                class="border-b border-[#B3B3B3] pb-5 pt-8 first:pt-0 lg:pb-[1.13vw] lg:pt-[3.33vw]"
              >
                <h3 class="font-dm-sans text-[26px] leading-[1.3] text-black lg:text-[2.08vw]">
                  <span class="text-[#2042EA]">{{ num }}</span> | {{ t(`customProjectPage.order.${num}.title`) }}
                </h3>
                <p class="mt-3 max-w-[651px] font-dm-sans text-base leading-[1.25] text-black lg:mt-[1.63vw] lg:max-w-[33.93vw] lg:text-[clamp(14px,1.04vw,20px)]">
                  {{ t(`customProjectPage.order.${num}.body`) }}
                </p>
              </li>
            </ol>

            <a
              href="https://wa.me/6282258044904"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-10 inline-flex items-center gap-4 h-14 px-6 rounded-full bg-black font-dm-sans text-[24px] text-white transition-colors hover:bg-[#2042EA] lg:mt-[4.11vw] lg:h-[3.91vw] lg:gap-[2.4vw] lg:px-[1.7vw] lg:text-[2.08vw]"
            >
              {{ t('customProjectPage.order.ctaDiscuss') }}
              <img src="/images/custom-project/redesign/arrow-up-right-white-lg.svg" alt="" width="26" height="26" class="w-5 h-5 lg:w-[1.34vw] lg:h-[1.36vw]" />
            </a>
          </div>
        </div>
      </div>

      <figure
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="relative overflow-hidden aspect-[723/1031] lg:aspect-auto lg:ml-[4.47vw] lg:w-[37.65vw] lg:h-[min(53.69vw,calc(100vh-8.34vw))]"
      >
        <img
          src="/images/custom-project/redesign/process.webp"
          srcset="/images/custom-project/redesign/process-sm.webp 1000w, /images/custom-project/redesign/process.webp 1600w"
          sizes="(min-width: 1024px) 80vw, 214vw"
          alt=""
          loading="lazy"
          class="absolute top-0 left-[43.87%] h-full w-auto max-w-none -translate-x-1/2 -scale-x-100"
        />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const headingLines = computed(() => t('customProjectPage.order.headingLines').split('\n'))
const indents = ['0.65em', '0', '1.9em']
const steps = ['01', '02', '03', '04']

const section = ref<HTMLElement | null>(null)
const viewport = ref<HTMLElement | null>(null)
const list = ref<HTMLElement | null>(null)
const { pinHeight } = usePinnedScroll(section, viewport, list)
</script>
