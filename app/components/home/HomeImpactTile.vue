<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 16, scale: 0.9 }"
    :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, delay } }"
    class="relative w-[60px] h-[60px] xl:w-[76px] xl:h-[76px] flex items-center justify-center rounded-[16px] xl:rounded-[20px] bg-white shadow-[0_10px_24px_0_#0f172a24,0_1px_3px_0_#0f172a1f]"
  >
    <Icon :name="`lucide:${icon}`" class="w-7 h-7 xl:w-9 xl:h-9" :style="{ color }" />
    <span
      class="absolute left-[36px] xl:left-[46px] -top-3 px-2 xl:px-[9px] py-1 rounded-full font-dm-mono text-[10px] xl:text-[11px] leading-[14px] text-white whitespace-nowrap shadow-[0_8px_20px_0_#0000001f]"
      :style="{ backgroundColor: badge }"
    >{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  color: string
  badge: string
  label: string
  delay: number
}>()
</script>
