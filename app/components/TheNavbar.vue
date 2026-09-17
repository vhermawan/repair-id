<template>
  <!-- Fixed wrapper -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="solid && !menuOpen
      ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.08)]'
      : menuOpen
        ? 'bg-[#005FE7]'
        : 'bg-transparent'"
  >
    <div class="w-full flex flex-row justify-between items-center px-5 lg:px-12 py-4 lg:py-5">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/logo.png"
          alt="Repair Material Studio"
          class="h-[28px] lg:h-[36px] w-auto"
          :class="solid && !menuOpen ? 'invert' : ''"
        />
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <div class="hidden lg:flex items-center gap-[34px]">
        <NuxtLink
          v-for="link in links" :key="link.label" :to="link.to"
          class="font-dm-sans text-[13px] whitespace-nowrap"
          :class="solid ? 'text-navy' : 'text-cream'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Right side controls -->
      <div class="flex items-center gap-2 lg:gap-3">
        <!-- Lang Switch -->
        <div
          class="flex items-center gap-[2px] p-[3px] rounded-full"
          :class="solid && !menuOpen
            ? '[outline:1px_solid_#06142833] [outline-offset:-0.5px]'
            : '[outline:1px_solid_#F4F1E966] [outline-offset:-0.5px]'"
        >
          <button
            class="font-mono text-[11px] font-semibold tracking-[0.5px] px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full whitespace-nowrap"
            :class="solid && !menuOpen ? 'bg-navy text-cream' : 'bg-cream text-navy'"
          >
            ID
          </button>
          <button
            class="font-mono text-[11px] font-semibold tracking-[0.5px] px-2.5 lg:px-3 py-1 lg:py-1.5 whitespace-nowrap bg-transparent"
            :class="solid && !menuOpen ? 'text-navy/40' : 'text-[#D8E5FF]'"
          >
            EN
          </button>
        </div>

        <!-- Desktop CTA -->
        <NuxtLink
          to="#contact"
          class="hidden lg:flex items-center gap-2 px-[18px] py-[11px]"
          :class="solid ? '[outline:1px_solid_#06142833] [outline-offset:-0.5px]' : 'bg-cream'"
        >
          <span class="font-dm-sans text-[13px] font-semibold text-navy whitespace-nowrap">
            Hubungi Kami
          </span>
          <Icon name="lucide:arrow-up-right" class="w-[15px] h-[15px] text-navy" />
        </NuxtLink>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
          :class="solid && !menuOpen ? 'bg-[#005FE7]' : menuOpen ? 'bg-navy' : 'bg-[#005FE7]'"
          @click="menuOpen = !menuOpen"
        >
          <Icon v-if="menuOpen" name="lucide:x" class="w-4 h-4 text-cream" />
          <Icon v-else name="lucide:menu" class="w-5 h-5 text-cream" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="menuOpen"
        class="lg:hidden fixed inset-0 top-0 bg-[#005FE7] z-[-1] flex flex-col justify-between px-5 pt-24 pb-8"
      >
        <!-- Menu links -->
        <div class="flex flex-col">
          <NuxtLink
            v-for="(link, i) in links" :key="link.label" :to="link.to"
            class="flex items-center justify-between py-5 border-t border-[#FFFFFF30]"
            @click="menuOpen = false"
          >
            <div class="flex items-center gap-3">
              <span class="font-mono text-[11px] tracking-[0.5px] text-[#A9C9FF]">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="font-dm-sans font-bold text-[28px] tracking-[-0.8px] text-cream">{{ link.label }}</span>
            </div>
            <Icon name="lucide:arrow-up-right" class="w-5 h-5 text-cream" />
          </NuxtLink>
        </div>

        <!-- Bottom CTA -->
        <div class="flex flex-col gap-4">
          <a href="#" class="flex items-center justify-center gap-2.5 px-5 py-[15px] bg-cream rounded-sm">
            <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
            <span class="font-dm-sans text-[13px] font-semibold text-navy whitespace-nowrap">Chat via WhatsApp</span>
          </a>
          <span class="font-mono text-[11px] tracking-[0.5px] text-[#A9C9FF] text-center">
            halo@repair.id · +62 812 0000 0000
          </span>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
const scrolled = ref(false)
const menuOpen = ref(false)
const solid = computed(() => !isHome.value || scrolled.value)

const links = [
  { label: 'RR Board', to: '/rr-board' },
  { label: 'Application', to: '/application' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 80
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>
