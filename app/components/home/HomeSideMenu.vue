<template>
  <div>
    <aside class="hidden lg:block fixed inset-y-0 left-0 z-40 w-[12.86vw] bg-black/25">
      <NuxtLink to="/" class="absolute left-[2.74vw] top-[8.1vh] flex items-start gap-[9.6px]" aria-label="Repair Project">
        <img src="/images/home/logo-mark.svg" alt="" />
        <span class="flex flex-col gap-[6px]">
          <img src="/images/home/logo-repair.svg" alt="" />
          <img src="/images/home/logo-project.svg" alt="" />
        </span>
      </NuxtLink>

      <button
        class="absolute left-[5.96vw] top-[46.4vh] transition-opacity hover:opacity-70"
        :aria-label="t('hero.menu')"
        :aria-expanded="open"
        aria-controls="home-menu"
        @click="open = true"
      >
        <img src="/images/home/menu-lines.svg" alt="" />
      </button>

      <nav class="absolute left-[6.05vw] top-[69.6vh] flex flex-col items-center gap-[3.5vh]" :aria-label="t('hero.socialLabel')">
        <a
          v-for="item in contacts" :key="item.short"
          :href="item.href" target="_blank" rel="noopener noreferrer"
          class="[writing-mode:vertical-rl] rotate-180 font-dm-sans text-[clamp(16px,1.3vw,25px)] text-white transition-opacity hover:opacity-70"
        >
          {{ item.short }}
        </a>
      </nav>
    </aside>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/75 lg:cursor-none"
        aria-hidden="true"
        @click="open = false"
        @pointermove="pointer = { x: $event.clientX, y: $event.clientY }"
        @pointerleave="pointer = null"
      >
        <span
          v-if="pointer"
          class="hidden lg:flex absolute w-16 h-16 -ml-8 -mt-8 items-center justify-center rounded-full border border-white pointer-events-none"
          :style="{ left: `${pointer.x}px`, top: `${pointer.y}px` }"
        >
          <Icon name="lucide:x" class="w-7 h-7 text-white" />
        </span>
      </div>
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      leave-active-class="transition-transform duration-300 ease-in"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="open"
        id="home-menu"
        ref="panel"
        role="dialog"
        aria-modal="true"
        :aria-label="t('hero.menu')"
        class="fixed inset-y-0 left-0 z-50 w-full flex flex-col overflow-y-auto px-5 pt-5 pb-10 bg-[#2042EA] lg:w-[63.73vw] lg:px-0 lg:pt-0 lg:pb-0"
        @keydown.esc="open = false"
      >
        <div class="flex items-start justify-between lg:absolute lg:left-[6.82vw] lg:top-[8.1vh]">
          <NuxtLink to="/" class="flex items-start gap-[9.6px]" aria-label="Repair Project" @click="open = false">
            <img src="/images/home/logo-mark.svg" alt="" />
            <span class="flex flex-col gap-[6px]">
              <img src="/images/home/logo-repair.svg" alt="" />
              <img src="/images/home/logo-project.svg" alt="" />
            </span>
          </NuxtLink>
          <button class="lg:hidden flex items-center justify-center w-10 h-10" :aria-label="t('hero.close')" @click="open = false">
            <Icon name="lucide:x" class="w-7 h-7 text-white" />
          </button>
        </div>

        <nav class="mt-14 flex flex-col gap-4 lg:absolute lg:left-[6.82vw] lg:top-[22.4vh] lg:mt-0 lg:gap-[3.5vh]">
          <NuxtLink
            v-for="link in links" :key="link.to" :to="link.to"
            class="group self-start flex flex-col outline-none font-dm-sans text-[40px] leading-[1.05] uppercase text-white lg:text-[5vw] lg:leading-[1.04]"
            @click="open = false"
          >
            {{ t(link.labelKey) }}
            <span class="h-1.5 bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" aria-hidden="true" />
          </NuxtLink>
        </nav>

        <dl class="mt-auto pt-14 grid grid-cols-1 gap-5 font-dm-sans text-base text-white lg:absolute lg:left-[7.17vw] lg:top-[69.6vh] lg:mt-0 lg:pt-0 lg:grid-cols-[29.15vw_auto] lg:gap-x-0 lg:gap-y-[4.4vh] lg:text-[clamp(16px,1.3vw,25px)]">
          <div v-for="item in contacts" :key="item.short" class="contents">
            <dt class="uppercase">{{ item.label }}</dt>
            <dd class="-mt-4 lg:mt-0">
              <a :href="item.href" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ item.value }}</a>
            </dd>
          </div>
        </dl>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const open = useState('homeMenuOpen', () => false)
const panel = ref<HTMLElement | null>(null)
const pointer = ref<{ x: number, y: number } | null>(null)

const links = [
  { labelKey: 'nav.rrBoard', to: '/rr-board' },
  { labelKey: 'nav.customProject', to: '/custom-project' },
  { labelKey: 'nav.contactLink', to: '/contact' },
]

const contacts = [
  { short: 'WA', label: 'WhatsApp', value: '+62 822-5804-4904', href: 'https://wa.me/6282258044904' },
  { short: 'EMAIL', label: 'Email', value: 'carissa@repairproject.id', href: 'mailto:carissa@repairproject.id' },
  { short: 'IG', label: 'Instagram', value: '@repairproject.id', href: 'https://www.instagram.com/repairproject.id/' },
]

watch(open, async (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  pointer.value = null
  if (isOpen) {
    await nextTick()
    panel.value?.querySelector<HTMLElement>('nav a')?.focus()
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  open.value = false
})
</script>
