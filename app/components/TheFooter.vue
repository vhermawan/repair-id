<template>
  <footer id="contact" class="w-full flex flex-col gap-16 p-[96px_48px_48px_48px] bg-[#062A5C]">
    <!-- Footer Top -->
    <div class="w-full flex flex-row gap-20">
      <!-- Copy -->
      <div class="flex-1 flex flex-col gap-6">
        <h2 class="w-full text-cream font-archivo font-bold text-[54px] leading-[57px] tracking-[-2.2px]">
          Punya proyek? Kirim kebutuhan Anda, kami hitung bersama.
        </h2>
        <div class="flex items-center gap-3.5">
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] bg-cream">
            <span class="font-inter text-sm font-semibold text-navy whitespace-nowrap">Chat via WhatsApp</span>
            <IconMessageCircle class="w-4 h-4 text-navy" />
          </a>
          <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#F3EFE44D] [outline-offset:-0.5px]">
            <span class="font-inter text-sm font-semibold text-cream whitespace-nowrap">Unduh katalog RR Board</span>
          </a>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="w-80 shrink-0 flex flex-col gap-[18px]">
        <div v-for="item in contacts" :key="item.key" class="w-full flex flex-col gap-[5px]">
          <span class="font-mono text-[10px] tracking-[1.2px] text-[#A9C9FF] whitespace-nowrap">{{ item.key }}</span>
          <span class="w-full font-inter text-sm leading-[21px] text-cream">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="w-full flex flex-row justify-between items-end pt-7 border-t border-[#F3EFE42E]">
      <span class="font-archivo font-bold text-[96px] leading-[96px] tracking-[-4px] text-[#F3EFE41A] whitespace-nowrap">
        repair.
      </span>
      <span class="font-mono text-[10px] tracking-[0.8px] text-[#F3EFE480] whitespace-nowrap">
        &copy; 2026 Repair Material Studio
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const contacts = [
  { key: 'WORKSHOP', value: 'Jl. Raya Bogor KM 27, Jakarta Timur' },
  { key: 'EMAIL', value: 'halo@repair.id' },
  { key: 'WHATSAPP', value: '+62 812 0000 0000' },
]
</script>
