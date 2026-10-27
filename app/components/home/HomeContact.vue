<template>
  <footer id="contact" class="w-full flex flex-col gap-12 px-5 pt-16 pb-14 bg-[#2042EA] lg:gap-[5.57vw] lg:pl-[18.7vw] lg:pr-[4.1vw] lg:pt-[3.96vw] lg:pb-[7.08vw]">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="max-w-[1040px] lg:max-w-[54.2vw] font-dm-sans text-[40px] leading-none text-white lg:text-[5vw]"
    >
      {{ t('footer.heading') }}
    </h2>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-6 font-dm-sans text-base uppercase text-white lg:text-[clamp(16px,1.04vw,20px)]">
      <NuxtLink to="/contact" class="group flex flex-col items-start gap-2.5">
        <span>{{ t('homeContact.getInTouch') }}</span>
        <img src="/images/home/arrow-long.svg" alt="" class="transition-transform duration-300 group-hover:translate-x-2" />
      </NuxtLink>

      <div v-for="item in contacts" :key="item.label" class="flex flex-col gap-2">
        <span>{{ item.label }}</span>
        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ item.value }}</a>
        <span v-else>{{ item.value }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const contacts = [
  { label: 'PRODUCTION SITE', value: 'Bandung' },
  { label: 'EMAIL', value: 'carissa@repairproject.id', href: 'mailto:carissa@repairproject.id' },
  { label: 'WHATSAPP', value: '+62 822-5804-4904', href: 'https://wa.me/6282258044904' },
]
</script>
