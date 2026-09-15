<template>
  <nav class="w-full flex flex-row gap-5 justify-between items-center relative z-10">
    <!-- Brand -->
    <div class="flex flex-col gap-[-2px]">
      <NuxtLink to="/" class="flex flex-col">
        <span class="font-archivo font-bold text-[26px] tracking-[-1px] whitespace-nowrap"
          :class="light ? 'text-cream' : 'text-navy'">
          repair.
        </span>
        <span class="font-mono text-[9px] tracking-[1.6px] whitespace-nowrap"
          :class="light ? 'text-[#A9C9FF]' : 'text-navy/50'">
          MATERIAL STUDIO
        </span>
      </NuxtLink>
    </div>

    <!-- Nav Links -->
    <div class="flex items-center gap-[34px]">
      <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
        class="font-inter text-[13px] whitespace-nowrap"
        :class="light ? 'text-cream' : 'text-navy'"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <!-- Lang Switch -->
    <div class="flex items-center gap-[2px] p-[3px] [outline:1px_solid_#F4F1E966] [outline-offset:-0.5px]">
      <button class="font-mono text-[11px] font-semibold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap"
        :class="light ? 'bg-cream text-navy' : 'bg-navy text-cream'">
        ID
      </button>
      <button class="font-mono text-[11px] font-semibold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap"
        :class="light ? 'text-[#D8E5FF]' : 'text-navy/40'">
        EN
      </button>
    </div>

    <!-- CTA -->
    <NuxtLink to="#contact" class="flex items-center gap-2 px-[18px] py-[11px]"
      :class="light ? 'bg-cream' : 'bg-navy'">
      <span class="font-inter text-[13px] font-semibold whitespace-nowrap"
        :class="light ? 'text-navy' : 'text-cream'">
        Hubungi Kami
      </span>
      <IconArrowRight class="w-[15px] h-[15px]" :class="light ? 'text-navy' : 'text-cream'" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ light?: boolean }>()

const links = [
  { label: 'RR Board', to: '#rr-board' },
  { label: 'Application', to: '#application' },
  { label: 'Projects', to: '#projects' },
  { label: 'About', to: '#about' },
]
</script>
