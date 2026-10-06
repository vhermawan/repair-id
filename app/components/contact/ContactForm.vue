<template>
  <section class="w-full flex flex-col gap-10 lg:gap-[64px] p-[64px_20px] lg:p-[104px_48px] bg-[#E3DFD3]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="w-full flex flex-col lg:flex-row gap-8 lg:gap-[80px] lg:justify-between items-start"
    >
      <div class="lg:w-[620px] flex flex-col gap-[18px]">
        <h2 class="font-dm-sans font-bold text-[38px] leading-[40px] lg:text-[64px] lg:leading-[64px] tracking-[-1.4px] lg:tracking-[-2.6px] text-navy whitespace-pre-line">
          {{ t('contactPage.form.heading') }}
        </h2>
        <p class="lg:w-[420px] font-dm-sans text-[15px] leading-[23px] text-[#0C2244]">
          {{ t('contactPage.form.body') }}
        </p>
      </div>

      <dl class="w-full lg:w-[300px] shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-5">
        <div v-for="item in contacts" :key="item.labelKey" class="flex flex-col gap-[5px]">
          <dt class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-blue-accent">{{ t(item.labelKey) }}</dt>
          <dd class="m-0 font-dm-sans text-[14px] leading-[21px] text-navy break-words">
            <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ item.value }}</a>
            <template v-else>{{ item.value }}</template>
          </dd>
        </div>
      </dl>
    </div>

    <form
      v-motion
      :initial="{ opacity: 0, y: 32 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      class="w-full flex flex-col gap-7 p-6 lg:p-[40px] bg-cream"
      @submit.prevent="submit"
    >
      <div class="w-full flex flex-col lg:flex-row gap-7 lg:gap-[32px]">
        <label class="flex-1 flex flex-col gap-2">
          <span class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244]">{{ t('contactPage.form.name') }}</span>
          <input v-model.trim="form.name" type="text" required autocomplete="name" :placeholder="t('contactPage.form.namePlaceholder')" :class="fieldClass" />
        </label>
        <label class="flex-1 flex flex-col gap-2">
          <span class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244]">{{ t('contactPage.form.company') }}</span>
          <input v-model.trim="form.company" type="text" autocomplete="organization" :placeholder="t('contactPage.form.companyPlaceholder')" :class="fieldClass" />
        </label>
      </div>

      <fieldset class="w-full m-0 p-0 border-0">
        <legend class="mb-3 p-0 font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244]">{{ t('contactPage.form.category') }}</legend>
        <div class="flex flex-wrap gap-[10px]">
          <button
            v-for="key in categories" :key="key"
            type="button"
            :aria-pressed="form.category === key"
            class="px-[18px] py-[11px] rounded-xl font-dm-sans text-[14px] whitespace-nowrap transition-colors"
            :class="form.category === key
              ? 'bg-navy text-cream font-semibold'
              : 'bg-transparent text-navy [outline:1px_solid_#06142833] [outline-offset:-0.5px] hover:bg-navy/5'"
            @click="form.category = key"
          >
            {{ t(key) }}
          </button>
        </div>
      </fieldset>

      <label class="w-full flex flex-col gap-2">
        <span class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244]">{{ t('contactPage.form.needs') }}</span>
        <textarea v-model.trim="form.needs" required rows="5" :placeholder="t('contactPage.form.needsPlaceholder')" :class="[fieldClass, 'resize-y']" />
      </label>

      <div class="w-full flex flex-col lg:flex-row gap-7 lg:gap-[32px] lg:items-end">
        <label class="w-full lg:w-[520px] shrink-0 flex flex-col gap-2">
          <span class="font-dm-sans font-medium text-[10px] tracking-[1.2px] text-[#0C2244]">{{ t('contactPage.form.whatsapp') }}</span>
          <input v-model.trim="form.whatsapp" type="tel" required autocomplete="tel" placeholder="+62 ..." :class="fieldClass" />
        </label>
        <div class="flex-1 flex lg:justify-end lg:pb-1">
          <button type="submit" class="w-full lg:w-fit flex items-center justify-center gap-[10px] px-8 py-4 bg-blue-accent rounded-xl font-dm-sans font-semibold text-[15px] text-cream transition-opacity hover:opacity-90">
            <span>{{ t('contactPage.form.submit') }}</span>
            <Icon name="lucide:arrow-right" size="17" />
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const WHATSAPP_NUMBER = '6282258044904'
const EMAIL = 'carissa@repairproject.id'

const fieldClass = 'w-full py-[14px] bg-transparent border-0 border-b border-[#06142833] font-dm-sans text-[15px] text-navy placeholder:text-[#06142866] outline-none focus:border-blue-accent transition-colors'

const contacts = computed(() => [
  { labelKey: 'contactPage.info.email', value: EMAIL, href: `mailto:${EMAIL}` },
  { labelKey: 'contactPage.info.whatsapp', value: '+62 822-5804-4904', href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { labelKey: 'contactPage.info.site', value: 'Bandung' },
  { labelKey: 'contactPage.info.response', value: t('contactPage.info.responseValue') },
])

const categories = [
  'contactPage.form.cat.design',
  'contactPage.form.cat.event',
  'contactPage.form.cat.product',
  'contactPage.form.cat.csr',
]

const form = reactive({
  name: '',
  company: '',
  category: categories[0],
  needs: '',
  whatsapp: '',
})

function submit() {
  const details = [
    `${t('contactPage.form.name')}: ${form.name}`,
    form.company && `${t('contactPage.form.company')}: ${form.company}`,
    `${t('contactPage.form.category')}: ${t(form.category)}`,
    `${t('contactPage.form.whatsapp')}: ${form.whatsapp}`,
  ].filter(Boolean)
  const subject = `${t('contactPage.form.emailSubject')} — ${t(form.category)} — ${form.name}`
  const body = `${details.join('\n')}\n\n${form.needs}`
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>
