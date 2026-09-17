<template>
  <div>
    <!-- Hero -->
    <section
      class="w-full min-h-[400px] lg:h-[560px] flex flex-col gap-0 p-[24px_20px_32px] lg:p-[36px_48px_48px] justify-between items-start overflow-hidden relative"
    >
      <!-- Hero BG -->
      <img src="/images/rr-board-terrazzo-blue.jpg" alt="RR Board" class="absolute inset-0 w-full h-full object-cover z-0" />
      <div class="absolute inset-0 bg-[#062A5CD9] [background-image:linear-gradient(93.923deg,_#061428F2_1.813%,_#0044A8A6_98.187%)] z-[1]" />

      <!-- Nav spacer -->
      <div class="h-0 relative z-[3]" />

      <!-- Hero Content -->
      <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-16 lg:pt-[64px] items-start lg:items-end relative z-[3]">
        <!-- Hero Copy -->
        <div class="flex-1 flex flex-col gap-4 lg:gap-5">
          <span class="font-mono text-[10px] lg:text-[11px] tracking-[1.3px] text-[#A9C9FF]">
            [ PRODUCT — RECYCLED SURFACE PANEL ]
          </span>
          <h1 class="font-dm-sans font-bold text-[52px] leading-[52px] lg:text-[92px] lg:leading-[92px] tracking-[-2px] lg:tracking-[-4px] text-cream">
            RR Board
          </h1>
          <p class="font-dm-sans text-[15px] leading-[24px] lg:text-[17px] lg:leading-[27px] text-[#E6EEFF] max-w-[820px]">
            A solid sheet material pressed from rejected sachets and plastic bags. No veneer, no
            coating — the surface is the material itself.
          </p>
        </div>

        <!-- Hero Meta -->
        <div class="w-full lg:w-[444px] shrink-0 flex flex-col">
          <div
            v-for="meta in heroMeta" :key="meta.key"
            class="flex justify-between items-center py-[13px] border-t border-[#F4F1E933]"
          >
            <span class="font-mono text-[10px] tracking-[0.8px] text-[#A9C9FF]">{{ meta.key }}</span>
            <span class="font-dm-sans text-[13px] font-medium text-cream">{{ meta.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- S1 — What It Is -->
    <section class="w-full flex flex-col gap-12 lg:gap-[72px] p-[64px_20px] lg:p-[96px_48px] bg-cream">
      <!-- Section Header -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
            [ 01 — WHAT IT IS ]
          </span>
          <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
            Plastic waste, pressed into a working surface.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
          RR Board is a homogeneous panel — the pattern runs through the full thickness, so cut
          edges need no edging strip.
        </p>
      </div>

      <!-- Detail Row -->
      <div class="w-full flex flex-col lg:flex-row gap-10 lg:gap-[64px]">
        <!-- Detail Copy -->
        <div class="w-full lg:w-[640px] shrink-0 flex flex-col gap-7">
          <p class="font-dm-sans text-[15px] leading-[26px] lg:text-base lg:leading-[27px] text-navy">
            Sachets and multilayer bags are the plastics recyclers refuse — too thin, too mixed,
            too dirty. We take exactly that stream, wash it, shred it, and press it back into a
            dense sheet.
          </p>
          <p class="font-dm-sans text-[15px] leading-[26px] lg:text-base lg:leading-[27px] text-navy/65">
            The result behaves like a board: cut it, drill it, screw it, route it. It will not
            delaminate, rot, or host termites — and at end of life it goes back into the press.
          </p>

          <!-- Specs Table -->
          <div class="flex flex-col">
            <div
              v-for="spec in detailSpecs" :key="spec.key"
              class="flex justify-between items-center py-[14px] border-t border-[#D6E4FD]"
            >
              <span class="font-mono text-[11px] tracking-[0.6px] text-[#0044A8]">{{ spec.key }}</span>
              <span class="font-dm-sans text-[14px] font-medium text-navy-deep">{{ spec.value }}</span>
            </div>
          </div>
        </div>

        <!-- Detail Media -->
        <div class="flex-1 flex flex-col gap-3">
          <div class="w-full h-[280px] lg:h-[420px] bg-navy/10 rounded-sm" />
          <div class="flex gap-3">
            <div class="flex-1 h-[120px] lg:h-[150px] bg-navy/10 rounded-sm" />
            <div class="flex-1 h-[120px] lg:h-[150px] bg-navy/10 rounded-sm" />
          </div>
        </div>
      </div>

      <!-- Process Block -->
      <div class="flex flex-col gap-7 pt-14 border-t border-navy/8">
        <!-- Process Head -->
        <div class="w-full flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end">
          <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
            [ HOW IT IS MADE ]
          </span>
          <p class="lg:w-[494px] shrink-0 font-dm-sans text-[13px] leading-[21px] text-navy/65">
            One line, five steps. Every sheet is traceable back to the bank sampah it came from.
          </p>
        </div>

        <!-- Process Strip -->
        <div class="w-full grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div v-for="step in processSteps" :key="step.index" class="flex flex-col gap-3.5">
            <div class="w-full h-[160px] lg:h-[200px] bg-navy/10 rounded" />
            <div class="flex flex-col gap-[5px]">
              <div class="flex items-center gap-2.5">
                <span class="font-mono text-[11px] tracking-[1px] text-blue-accent">{{ step.index }}</span>
                <span class="font-dm-sans font-bold text-[16px] lg:text-[18px] tracking-[-0.5px] text-navy">{{ step.title }}</span>
              </div>
              <p class="font-dm-sans text-[13px] leading-[20px] text-navy/60">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- S2 — Core Values -->
    <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-navy-deep">
      <!-- Section Header -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.3px] text-[#A9C9FF]">
            [ 02 — CORE QUALITIES ]
          </span>
          <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-cream">
            Six things the board does that plywood does not.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-cream/65">
          Specified on wet areas, outdoor facades, and high-traffic furniture since 2019.
        </p>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="val in coreValues" :key="val.index"
          class="flex flex-col gap-4 pt-6 border-t border-cream/18"
        >
          <span class="font-mono text-[11px] tracking-[1px] text-[#A9C9FF99]">{{ val.index }}</span>
          <h3 class="font-dm-sans font-semibold text-[22px] leading-[27px] lg:text-[24px] lg:leading-[29px] tracking-[-0.8px] text-cream">
            {{ val.title }}
          </h3>
          <p class="font-dm-sans text-[14px] leading-[23px] text-cream/65">{{ val.desc }}</p>
        </div>
      </div>
    </section>

    <!-- S3 — Colors -->
    <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-[#EDF3FE]">
      <!-- Section Header -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
            [ 03 — COLOUR RANGE ]
          </span>
          <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
            Eight standard colours, at a glance.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
          Colour comes from the waste stream itself, so every sheet is slightly different. Screen
          colours are indicative — order a physical sample before you specify.
        </p>
      </div>

      <!-- Swatch Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="swatch in swatches" :key="swatch.code" class="flex flex-col gap-3">
          <div class="w-full h-[140px] lg:h-[190px] rounded-sm" :style="{ backgroundColor: swatch.color }" />
          <div class="flex flex-col gap-1">
            <div class="flex justify-between items-center">
              <span class="font-dm-sans font-semibold text-[15px] lg:text-base tracking-[-0.4px] text-navy-deep">{{ swatch.name }}</span>
              <span class="font-mono text-[10px] tracking-[0.8px] text-blue-accent">{{ swatch.code }}</span>
            </div>
            <span class="font-dm-sans text-[12px] text-navy/65">{{ swatch.finish }}</span>
          </div>
        </div>
      </div>

      <!-- Colour CTA -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[60px] lg:justify-between lg:items-center p-8 lg:p-10 bg-navy-deep">
        <div class="flex-1 flex flex-col gap-2.5 max-w-[640px]">
          <h3 class="font-dm-sans font-bold text-[24px] leading-[28px] lg:text-[30px] lg:leading-[35px] tracking-[-1px] lg:tracking-[-1.2px] text-cream">
            Get the full colour guide
          </h3>
          <p class="font-dm-sans text-[13px] leading-[20px] lg:text-[14px] lg:leading-[22px] text-cream/65">
            PDF with every colour at 1:1 scale, finish options, and sheet tolerances. Enter your
            email and we send it straight away.
          </p>
        </div>
        <div class="flex flex-col gap-2.5 lg:items-end">
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] bg-cream">
              <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">Download Colour Guide</span>
            </a>
            <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#F4F1E980] [outline-offset:-0.5px]">
              <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">Download Product Catalogue</span>
            </a>
          </div>
          <span class="font-mono text-[10px] tracking-[0.8px] text-[#A9C9FF99]">
            Email required · no spam, one file per request
          </span>
        </div>
      </div>
    </section>

    <!-- S4 — Applications -->
    <section class="w-full flex flex-col gap-10 lg:gap-14 p-[64px_20px] lg:p-[96px_48px] bg-cream">
      <!-- Section Header -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[80px] lg:items-end">
        <div class="flex-1 flex flex-col gap-3 lg:gap-[14px]">
          <span class="font-mono text-[11px] tracking-[1.3px] text-blue-accent">
            [ 04 — BOARD APPLICATIONS ]
          </span>
          <h2 class="font-dm-sans font-bold text-[32px] leading-[36px] lg:text-[46px] lg:leading-[51px] tracking-[-1px] lg:tracking-[-1.8px] text-navy">
            Where the board already works.
          </h2>
        </div>
        <p class="lg:w-[420px] shrink-0 font-dm-sans text-[14px] leading-[22px] lg:text-[15px] lg:leading-[24px] text-navy/65">
          Built and installed with architects, contractors, and fabricators across Indonesia. Each
          case includes the thickness and fixing detail used.
        </p>
      </div>

      <!-- Application Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        <div
          v-for="app in applications" :key="app.index"
          class="flex flex-col bg-white overflow-hidden"
        >
          <div class="w-full h-[200px] lg:h-[300px] bg-navy/10" />
          <div class="flex flex-col gap-3 p-5 lg:p-7">
            <span class="font-mono text-[11px] tracking-[1px] text-blue-accent">{{ app.index }}</span>
            <h3 class="font-dm-sans font-semibold text-[22px] leading-[26px] lg:text-[28px] lg:leading-[32px] tracking-[-0.8px] text-navy">
              {{ app.title }}
            </h3>
            <p class="font-dm-sans text-[13px] leading-[20px] lg:text-[14px] lg:leading-[22px] text-navy/65">
              {{ app.desc }}
            </p>
            <a href="#" class="flex items-center gap-2 pt-2.5">
              <span class="font-dm-sans text-[13px] font-semibold text-blue-accent">See detail</span>
              <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5 text-blue-accent" />
            </a>
          </div>
        </div>
      </div>

      <!-- Inquiry CTA -->
      <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-[60px] lg:justify-between lg:items-end pt-14 border-t border-navy/8">
        <div class="flex-1 flex flex-col gap-2.5 max-w-[680px]">
          <h3 class="font-dm-sans font-bold text-[26px] leading-[30px] lg:text-[34px] lg:leading-[39px] tracking-[-1px] lg:tracking-[-1.4px] text-navy">
            Have a project in mind?
          </h3>
          <p class="font-dm-sans text-[14px] leading-[23px] lg:text-[15px] lg:leading-[26px] text-navy/65">
            Send the drawing or the area you need covered. We reply on WhatsApp with thickness,
            quantity, and lead time — or the full spec sheet if you are still specifying.
          </p>
        </div>
        <div class="flex flex-col gap-2.5 lg:items-end">
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] bg-blue-accent">
              <Icon name="lucide:message-circle" class="w-4 h-4 text-cream" />
              <span class="font-dm-sans text-sm font-semibold text-cream whitespace-nowrap">Consult Your Project</span>
            </a>
            <a href="#" class="flex items-center gap-2.5 px-6 py-[15px] [outline:1px_solid_#06142833] [outline-offset:-0.5px]">
              <Icon name="lucide:download" class="w-4 h-4 text-navy" />
              <span class="font-dm-sans text-sm font-semibold text-navy whitespace-nowrap">Ask for Spec Sheet</span>
            </a>
          </div>
          <span class="font-mono text-[10px] tracking-[0.8px] text-navy/50">
            Reply within 1 business day · Mon–Fri 09.00–17.00 WIB
          </span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const heroMeta = [
  { key: 'Sheet size', value: '120 × 240 cm' },
  { key: 'Thickness', value: '8 / 12 / 18 mm' },
  { key: 'Input', value: '100% post-consumer plastic' },
]

const detailSpecs = [
  { key: 'Sheet size', value: '120 × 240 cm' },
  { key: 'Thickness', value: '8 / 12 / 18 mm' },
  { key: 'Density', value: 'approx. 1.2 g/cm³' },
  { key: 'Properties', value: 'Waterproof · termite-proof · no finishing' },
  { key: 'End of life', value: '100% re-meltable' },
]

const processSteps = [
  { index: '01', title: 'Collect', desc: 'Sachets and plastic bags sourced from waste banks' },
  { index: '02', title: 'Sort & wash', desc: 'Separated by type, washed, dried to spec' },
  { index: '03', title: 'Shred', desc: 'Flakes milled to a consistent particle size' },
  { index: '04', title: 'Heat press', desc: 'Pressed into a solid sheet — no glue, no resin' },
  { index: '05', title: 'Cut & finish', desc: 'Trimmed to 120 × 240 cm, edges sanded' },
]

const coreValues = [
  { index: '01', title: 'Waterproof by nature', desc: 'Zero water absorption. No swelling, no delamination — safe for wet areas and exteriors.' },
  { index: '02', title: 'Termite & rot proof', desc: 'No organic content means nothing for termites or fungi to feed on.' },
  { index: '03', title: 'Full-body pattern', desc: 'The speckle runs through the full thickness. Cut edges need no banding or trim.' },
  { index: '04', title: 'Works like timber', desc: 'Cut, drill, rout, and screw with standard woodworking tools. No special hardware.' },
  { index: '05', title: 'Traceable input', desc: 'Every sheet is tied to the collection batch and the waste bank it came from.' },
  { index: '06', title: 'Re-meltable, always', desc: 'Take it back at end of life and it goes into the press again. No downcycling.' },
]

const swatches = [
  { name: 'Cloud', code: 'RR-01', color: '#E4E1D6', finish: 'Matte · light speckle' },
  { name: 'Sand', code: 'RR-02', color: '#D6C4A0', finish: 'Matte · medium speckle' },
  { name: 'Terracotta', code: 'RR-03', color: '#B4553C', finish: 'Matte · dense speckle' },
  { name: 'Moss', code: 'RR-04', color: '#5A6B4C', finish: 'Matte · medium speckle' },
  { name: 'Ocean', code: 'RR-05', color: '#2D5B7A', finish: 'Matte · dense speckle' },
  { name: 'Cobalt', code: 'RR-06', color: '#1F4FB0', finish: 'Matte · dense speckle' },
  { name: 'Graphite', code: 'RR-07', color: '#3A3A3C', finish: 'Matte · fine speckle' },
  { name: 'Midnight', code: 'RR-08', color: '#14202E', finish: 'Matte · fine speckle' },
]

const applications = [
  { index: '[ 01 ]', title: 'Facade cladding', desc: 'Weatherproof secondary skin on standard aluminium framing. 12 mm, rear-ventilated.' },
  { index: '[ 02 ]', title: 'Toilet cubicles', desc: 'Wet-area partitions that will not swell like HPL. 18 mm, stainless fixings.' },
  { index: '[ 03 ]', title: 'Wall panelling', desc: 'Full-body surface for lobbies and corridors. 8 mm on battens, no edge trim.' },
  { index: '[ 04 ]', title: 'Retail counters', desc: 'Counter tops and shopfronts that survive daily abuse. 18 mm, routed edges.' },
  { index: '[ 05 ]', title: 'School furniture', desc: 'Desks and chairs: termite-free, re-meltable at end of life. 18 mm.' },
  { index: '[ 06 ]', title: 'Bins & site furniture', desc: 'Outdoor fixtures for public space. 12 mm, no coating needed.' },
]
</script>
