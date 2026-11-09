<template>
  <span class="absolute inset-0 block overflow-hidden">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      class="absolute max-w-none"
      :style="{ width: `${crop[0]}%`, height: `${crop[1]}%`, left: `${crop[2]}%`, top: `${crop[3]}%` }"
    />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  crop: [number, number, number, number]
}>()
</script>
