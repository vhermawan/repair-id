<template>
  <div>
    <!-- Hero -->
    <section class="w-full min-h-[600px] lg:h-[780px] flex flex-col gap-0 p-[24px_20px] lg:p-[36px_48px] justify-between items-start overflow-hidden relative">
      <!-- Hero BG -->
      <img src="/images/hero-bg.jpg" alt="Repair workshop" class="absolute inset-0 w-full h-full object-cover z-0" />

      <!-- Hero Scrim -->
      <div class="absolute inset-0 bg-[#005FE7C7] mix-blend-multiply z-[1]" />
      <div class="absolute inset-0 [background-image:linear-gradient(95.456deg,_#062A5CE6_2.755%,_#0044A87A_50%,_#005FE71F_97.245%)] z-[2]" />

      <!-- Nav spacer (navbar is now fixed) -->
      <div class="h-0 relative z-[3]" />

      <!-- Hero Content -->
      <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[64px] pt-7 lg:items-center relative z-[3]">
        <!-- Hero Copy -->
        <div class="flex-1 flex flex-col gap-5 lg:gap-[26px]">
          <!-- Headline -->
          <div class="flex flex-col gap-[8px] lg:gap-[10px]">
            <!-- Eyebrow -->
            <div class="flex items-center gap-[8px] lg:gap-[10px] pb-[10px] lg:pb-[14px]">
              <span class="w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-cream shrink-0" />
              <span class="font-mono text-[8px] lg:text-[10px] tracking-[1.2px] lg:tracking-[1.4px] text-[#D8E5FF]">
                SACHET &amp; KANTONG PLASTIK — DIOLAH, BUKAN DIBUANG
              </span>
            </div>
            <!-- Line 1 -->
            <h1 class="font-archivo font-bold text-[36px] leading-[38px] lg:text-[76px] lg:leading-[74px] tracking-[-1.5px] lg:tracking-[-3.2px] text-cream">
              Material permukaan
            </h1>
            <!-- Line 2 -->
            <div class="flex flex-wrap items-end gap-[6px] lg:gap-[14px]">
              <span class="font-serif italic text-[36px] leading-[38px] lg:text-[76px] lg:leading-[74px] tracking-[-0.8px] lg:tracking-[-1.5px] text-[#BFD8FF]">
                dari sampah
              </span>
              <span class="font-archivo font-bold text-[36px] leading-[38px] lg:text-[76px] lg:leading-[74px] tracking-[-1.5px] lg:tracking-[-3.2px] text-cream">
                yang ditolak.
              </span>
            </div>
          </div>

          <!-- Sub -->
          <p class="w-full font-inter text-[13px] leading-[21px] lg:text-base lg:leading-[26px] text-[#E6EEFF]">
            Repair mengubah sachet dan kantong plastik yang ditolak daur ulang menjadi RR Board —
            lembaran material permukaan untuk bangunan dan produk jadi.
          </p>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 lg:pt-2">
            <NuxtLink to="#rr-board" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-cream">
              <span class="font-inter text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">Lihat RR Board</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 text-navy" />
            </NuxtLink>
            <a href="#" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] [outline:1px_solid_#F4F1E980] [outline-offset:-0.5px]">
              <Icon name="lucide:message-circle" class="w-4 h-4 text-cream" />
              <span class="font-inter text-[13px] lg:text-sm font-semibold text-cream whitespace-nowrap">Diskusi kebutuhan Anda</span>
            </a>
          </div>
        </div>

        <!-- Hero Spec Card (desktop only) -->
        <div class="hidden lg:flex w-[400px] shrink-0 [backdrop-filter:blur(12px)] flex-col bg-[#0614283D] [outline:1px_solid_#F4F1E94D] [outline-offset:-0.5px] rounded-lg overflow-hidden">
          <div class="p-[24px_24px_18px_24px] flex flex-col gap-1.5">
            <span class="font-mono text-[10px] tracking-[1.2px] text-[#A9C9FF]">[ SPESIFIKASI PANEL ]</span>
            <span class="font-archivo font-bold text-[32px] tracking-[-1.2px] text-cream">RR Board&trade;</span>
          </div>
          <div v-for="spec in heroSpecs" :key="spec.key"
            class="flex justify-between items-center px-6 py-[14px] border-t border-[#F4F1E926]">
            <span class="font-mono text-[10px] tracking-[0.8px] text-[#BFD8FF]">{{ spec.key }}</span>
            <span class="font-inter text-[13px] font-medium text-cream">{{ spec.value }}</span>
          </div>
          <div class="flex justify-between items-center px-6 py-4 bg-[#F4F1E914] border-t border-[#F4F1E926]">
            <span class="font-inter text-[13px] font-semibold text-cream">Unduh technical datasheet</span>
            <Icon name="lucide:download" class="w-[15px] h-[15px] text-cream" />
          </div>
        </div>
      </div>

      <!-- Hero Bottom -->
      <div class="w-full flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center pt-5 lg:pt-[26px] border-t border-[#F4F1E933] relative z-[3]" style="gap: 80px">
        <span class="font-mono text-[8px] lg:text-[10px] tracking-[1.2px] text-[#A9C9FF] hidden lg:block">
          [ SEJAK 2019 &middot; JAKARTA, INDONESIA ]
        </span>
        <div class="flex items-end gap-4 lg:gap-[44px]">
          <div v-for="metric in heroMetrics" :key="metric.label" class="flex flex-col items-start lg:flex-row lg:items-end gap-0.5 lg:gap-2">
            <span class="font-archivo font-bold text-[12px] lg:text-[18px] tracking-[-0.3px] lg:tracking-[-0.5px] text-cream whitespace-nowrap">{{ metric.value }}</span>
            <span class="font-inter text-[8px] lg:text-[12px] text-[#BFD8FF] whitespace-nowrap">{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- S0b — Proses Produksi -->
    <section class="w-full flex flex-col gap-5 lg:gap-7 p-[40px_20px] lg:p-[64px_48px_72px_48px] bg-cream">
      <!-- Header -->
      <div class="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end lg:gap-[60px]">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7] whitespace-nowrap">[ PROSES ]</span>
        <span class="font-inter text-[13px] lg:text-sm text-[#061428A6]">
          Dari sampah sachet sampai panel siap pasang — semua di satu workshop.
        </span>
      </div>

      <!-- Process Strip -->
      <div class="w-full grid grid-cols-2 lg:flex gap-3 lg:gap-4">
        <div v-for="step in processSteps" :key="step.index" class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <div class="w-full h-[140px] lg:h-[230px] bg-cover bg-center rounded overflow-hidden"
            :style="{ backgroundImage: `url(${step.image})` }" />
          <div class="flex flex-col gap-[4px] lg:gap-[5px]">
            <div class="flex items-center gap-2 lg:gap-[10px]">
              <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#005FE7]">{{ step.index }}</span>
              <span class="font-archivo font-bold text-[14px] lg:text-[18px] tracking-[-0.5px] text-navy">{{ step.title }}</span>
            </div>
            <p class="font-inter text-[11px] lg:text-[13px] leading-[17px] lg:leading-[20px] text-[#06142899]">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- S1 — What is Repair -->
    <section id="about" class="w-full flex flex-col gap-8 lg:gap-14 p-[48px_20px] lg:p-[80px_48px_64px_48px] bg-[#005FE7]">
      <div class="w-full flex flex-col gap-6 lg:flex-row lg:gap-20">
        <!-- Left label -->
        <div class="lg:w-[300px] shrink-0 flex flex-col gap-2 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.2px] text-[#CFE0FF]">[ TENTANG REPAIR ]</span>
          <span class="font-inter text-[13px] leading-[20px] text-[#F3EFE4B3]">
            Sejak 2019, mengolah sampah plastik bernilai rendah menjadi material bernilai guna.
          </span>
        </div>

        <!-- Right copy -->
        <div class="flex-1 flex flex-col gap-6 lg:gap-7">
          <p class="w-full font-archivo font-medium text-[22px] leading-[30px] lg:text-[30px] lg:leading-[41px] tracking-[-0.6px] text-cream">
            Repair mengumpulkan sachet dan kantong plastik yang ditolak daur ulang, lalu
            menekannya menjadi RR Board: lembaran material permukaan alternatif pengganti kayu
            olahan dan panel sintetis.
          </p>

          <!-- Stats -->
          <div class="flex flex-col gap-4 lg:flex-row lg:gap-12">
            <div v-for="stat in aboutStats" :key="stat.label"
              class="flex-1 flex flex-row lg:flex-col items-baseline lg:items-start gap-2 lg:gap-1.5">
              <span class="font-archivo font-semibold text-[28px] lg:text-[38px] tracking-[-1.2px] text-cream whitespace-nowrap">{{ stat.value }}</span>
              <span class="font-inter text-[12px] lg:text-[13px] leading-[18px] text-[#F3EFE4CC]">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- S1b — What is RR Board -->
    <section id="rr-board" class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 p-[48px_20px] lg:p-[88px_48px] bg-[#EDF3FE]">
      <!-- Left copy -->
      <div class="flex-1 flex flex-col gap-5 lg:gap-6">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">[ APA ITU RR BOARD ]</span>
        <h2 class="w-full font-archivo font-bold text-[32px] leading-[36px] lg:text-[52px] lg:leading-[56px] tracking-[-1.5px] lg:tracking-[-2px] text-[#062A5C]">
          Papan permukaan dari sachet dan kantong plastik.
        </h2>
        <p class="w-full font-inter text-[14px] leading-[22px] lg:text-base lg:leading-[26px] text-[#062A5CCC]">
          Tanpa resin tambahan. Permukaan bermotif terazo
          plastik, tiap panel unik, bisa dipotong dan dibor
          seperti panel kayu.
        </p>

        <!-- Single image on mobile -->
        <img src="/images/rr-board-terrazzo-blue.jpg" alt="RR Board terrazzo surface" class="lg:hidden w-full h-[240px] object-cover" />

        <!-- Specs -->
        <div class="flex flex-col gap-0">
          <div v-for="spec in rrBoardSpecs" :key="spec.key"
            class="flex justify-between items-center py-3 lg:py-[14px] border-t border-[#D6E4FD]">
            <span class="font-mono text-[10px] lg:text-[11px] tracking-[0.6px] text-[#0044A8]">{{ spec.key }}</span>
            <span class="font-inter text-[13px] lg:text-sm font-medium text-[#062A5C]">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!-- Right media (desktop only) -->
      <div class="hidden lg:flex w-full lg:w-[55%] shrink-0 flex-col gap-2">
        <img src="/images/rr-board-stack.jpg" alt="RR Board stacked panels" class="w-full h-[320px] object-cover rounded" />
        <div class="flex gap-2">
          <img src="/images/rr-board-terrazzo-colorful.jpg" alt="Terrazzo colorful" class="flex-1 h-[200px] object-cover rounded" />
          <img src="/images/rr-board-terrazzo-blue.jpg" alt="Terrazzo blue" class="flex-1 h-[200px] object-cover rounded" />
        </div>
      </div>
    </section>

    <!-- S2 — Building Application -->
    <section id="application" class="w-full flex flex-col gap-8 lg:gap-12 p-[48px_20px] lg:p-[96px_48px] bg-[#062A5C]">
      <!-- Header -->
      <div class="w-full flex flex-col gap-4 lg:flex-row lg:gap-20 lg:items-end">
        <div class="flex-1 flex flex-col gap-[10px] lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.2px] text-[#A9C9FF]">[ RR BOARD DALAM BANGUNAN ]</span>
          <h2 class="w-full font-archivo font-bold text-[28px] leading-[32px] lg:text-[46px] lg:leading-[51px] tracking-[-1.2px] lg:tracking-[-1.8px] text-cream">
            RR Board sebagai material bangunan.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-inter text-[13px] leading-[20px] lg:text-[15px] lg:leading-6 text-[#F3EFE4A6]">
          Panel siap pakai untuk kebutuhan arsitektural: kuat, tahan lembap, dan tidak memerlukan finishing tambahan.
        </p>
      </div>

      <!-- Application Grid -->
      <div class="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div v-for="app in buildingApps" :key="app.title" class="flex-1 flex flex-col bg-[#0B3269] overflow-hidden">
          <img :src="app.image" :alt="app.title" class="w-full h-[200px] lg:h-[340px] object-cover" />
          <div class="flex flex-col gap-2 lg:gap-3 p-5 lg:p-7">
            <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#A9C9FF]">{{ app.index }}</span>
            <h3 class="w-full font-archivo font-semibold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[32px] tracking-[-0.5px] lg:tracking-[-0.8px] text-cream">{{ app.title }}</h3>
            <p class="w-full font-inter text-[13px] leading-[20px] lg:text-sm lg:leading-[22px] text-[#F3EFE4A6]">{{ app.desc }}</p>
            <NuxtLink :to="app.link" class="flex items-center gap-2 pt-1.5 lg:pt-2.5">
              <span class="font-inter text-[13px] font-semibold text-[#A9C9FF]">Lihat aplikasi</span>
              <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-[#A9C9FF]" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Row -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-3.5">
        <a href="#" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-cream">
          <span class="font-inter text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">Go to RR Board page</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 text-navy" />
        </a>
        <a href="#" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] [outline:1px_solid_#F3EFE44D] [outline-offset:-0.5px]">
          <Icon name="lucide:message-circle" class="w-4 h-4 text-cream" />
          <span class="font-inter text-[13px] lg:text-sm font-semibold text-cream whitespace-nowrap">Diskusikan kebutuhan Anda</span>
        </a>
      </div>
    </section>

    <!-- S3 — End Product -->
    <section id="projects" class="w-full flex flex-col gap-8 lg:gap-12 p-[48px_20px] lg:p-[96px_48px] bg-cream">
      <!-- Header -->
      <div class="w-full flex flex-col gap-4 lg:flex-row lg:gap-20 lg:items-end">
        <div class="flex-1 flex flex-col gap-[10px] lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.2px] text-[#005FE7]">[ RR BOARD SEBAGAI PRODUK ]</span>
          <h2 class="w-full font-archivo font-bold text-[28px] leading-[32px] lg:text-[46px] lg:leading-[51px] tracking-[-1.2px] lg:tracking-[-1.8px] text-navy">
            Bukan hanya lembaran — juga produk jadi.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-inter text-[13px] leading-[20px] lg:text-[15px] lg:leading-6 text-[#061428CC]">
          Kami merakit RR Board menjadi furnitur dan perabot siap pakai untuk sekolah, kantor, dan ruang publik.
        </p>
      </div>

      <!-- Product Grid -->
      <div class="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div v-for="product in products" :key="product.title" class="flex-1 flex flex-col bg-white overflow-hidden">
          <img :src="product.image" :alt="product.title" class="w-full h-[200px] lg:h-[340px] object-cover" />
          <div class="flex flex-col gap-2 lg:gap-3 p-5 lg:p-7">
            <span class="font-mono text-[10px] lg:text-[11px] tracking-[1px] text-[#005FE7]">{{ product.index }}</span>
            <h3 class="w-full font-archivo font-semibold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[32px] tracking-[-0.5px] lg:tracking-[-0.8px] text-navy">{{ product.title }}</h3>
            <p class="w-full font-inter text-[13px] leading-[20px] lg:text-sm lg:leading-[22px] text-[#10201A99]">{{ product.desc }}</p>
            <NuxtLink :to="product.link" class="flex items-center gap-2 pt-1.5 lg:pt-2.5">
              <span class="font-inter text-[13px] font-semibold text-[#005FE7]">Lihat produk</span>
              <Icon name="lucide:arrow-right" class="w-[15px] h-[15px] text-[#005FE7]" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Row -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-3.5">
        <NuxtLink to="#projects" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] bg-[#005FE7]">
          <span class="font-inter text-[13px] lg:text-sm font-semibold text-cream whitespace-nowrap">Go to Customer Project</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 text-cream" />
        </NuxtLink>
        <a href="#" class="flex items-center justify-center gap-2.5 px-5 lg:px-6 py-[13px] lg:py-[15px] [outline:1px_solid_#06142833] [outline-offset:-0.5px]">
          <Icon name="lucide:message-circle" class="w-4 h-4 text-navy" />
          <span class="font-inter text-[13px] lg:text-sm font-semibold text-navy whitespace-nowrap">Diskusikan kebutuhan Anda</span>
        </a>
      </div>
    </section>

    <!-- S4 — Our Clients -->
    <section class="w-full flex flex-col gap-6 lg:gap-10 p-[48px_20px] lg:p-[72px_48px] bg-[#E3DFD3]">
      <!-- Header -->
      <div class="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end">
        <span class="font-mono text-[11px] tracking-[1.2px] text-[#06142899] whitespace-nowrap">[ OUR CLIENTS ]</span>
        <span class="font-inter text-[12px] lg:text-sm text-[#061428CC]">
          Dipercaya arsitek, kontraktor, dan brand yang serius soal material.
        </span>
      </div>

      <!-- Logo Rows -->
      <div v-for="(row, i) in clientRows" :key="i" class="w-full grid grid-cols-2 lg:flex">
        <div v-for="client in row" :key="client"
          class="flex-1 h-[60px] lg:h-[87px] flex items-center justify-center border-y border-[#0614281F]">
          <span class="font-archivo font-bold text-[16px] lg:text-[22px] tracking-[-0.5px] text-[#06142880] whitespace-nowrap">{{ client }}</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const heroSpecs = [
  { key: 'Ukuran', value: '120 × 240 cm' },
  { key: 'Ketebalan', value: '8 / 12 / 18 mm' },
  { key: 'Material', value: '100% plastik daur ulang' },
  { key: 'Sifat', value: 'Tahan air · anti rayap' },
]

const heroMetrics = [
  { value: '+120 ton', label: 'plastik terolah' },
  { value: '8–18 mm', label: 'tebal panel' },
  { value: '100%', label: 'dapat dilebur ulang' },
]

const processSteps = [
  { index: '01', title: 'Kumpulkan', desc: 'Sachet & kantong plastik dari bank sampah', image: '/images/process-collect.jpg' },
  { index: '02', title: 'Cacah', desc: 'Plastik dicacah jadi serpihan seragam', image: '/images/process-shred.jpg' },
  { index: '03', title: 'Press', desc: 'Dilebur dan ditekan tanpa resin tambahan', image: '/images/process-press.jpg' },
  { index: '04', title: 'Panel jadi', desc: 'Dipotong ke ukuran 120 × 240 cm', image: '/images/process-panel.jpg' },
]

const aboutStats = [
  { value: '+120 ton', label: 'Sampah plastik terolah' },
  { value: '100%', label: 'Material daur ulang' },
  { value: '0', label: 'Limbah produksi terbuang' },
]

const rrBoardSpecs = [
  { key: 'Ukuran panel', value: '120 × 240 cm' },
  { key: 'Ketebalan', value: '8 / 12 / 18 mm' },
  { key: 'Sifat', value: 'Tahan air, anti rayap, tidak lapuk' },
  { key: 'Akhir hidup', value: 'Dapat dilebur ulang 100%' },
]

const buildingApps = [
  {
    index: '[ 01 ]',
    title: 'Aplikasi Facade',
    desc: 'Panel fasad dan secondary skin dengan motif terazo plastik. Tahan cuaca, ringan, dan dipasang dengan rangka standar.',
    image: '/images/app-facade.jpg',
    link: '#',
  },
  {
    index: '[ 02 ]',
    title: 'Aplikasi Toilet Cubicles',
    desc: 'Partisi toilet anti air dan anti rayap. Tidak menggelembung seperti HPL, dan mudah dibersihkan.',
    image: '/images/app-toilet.jpg',
    link: '#',
  },
]

const products = [
  {
    index: '[ 01 ]',
    title: 'Waste Bin',
    desc: 'Tempat sampah pilah dari panel RR Board. Ironis dan tepat: wadah sampah yang dibuat dari sampah itu sendiri.',
    image: '/images/product-waste-bin.jpg',
    link: '#',
  },
  {
    index: '[ 02 ]',
    title: 'School Set',
    desc: 'Meja dan kursi sekolah tahan lama, bebas rayap, dan bisa dilebur ulang saat masa pakainya habis.',
    image: '/images/product-school-set.jpg',
    link: '#',
  },
]

const clientRows = [
  ['ARCHIVE', 'KOPI TUKU', 'SIG', 'UNILEVER'],
  ['GOJEK', 'DANONE', 'AQUA', 'BINUS'],
]
</script>
