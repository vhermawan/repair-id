import type { Ref } from 'vue'

export function usePinnedScroll(section: Ref<HTMLElement | null>, viewport: Ref<HTMLElement | null>, list: Ref<HTMLElement | null>) {
  const pinHeight = ref<number | null>(null)
  let travel = 0
  let desktop: MediaQueryList | null = null
  let observer: ResizeObserver | null = null

  function update() {
    if (!travel || !section.value || !list.value) return
    const progress = Math.min(Math.max(-section.value.getBoundingClientRect().top / travel, 0), 1)
    list.value.style.transform = `translate3d(0, ${-progress * travel}px, 0)`
  }

  function measure() {
    if (!list.value || !viewport.value) return
    if (!desktop?.matches) {
      travel = 0
      pinHeight.value = null
      list.value.style.transform = ''
      return
    }
    travel = Math.max(0, list.value.offsetHeight - viewport.value.clientHeight)
    pinHeight.value = window.innerHeight + travel
    update()
  }

  onMounted(() => {
    desktop = window.matchMedia('(min-width: 1024px)')
    measure()
    observer = new ResizeObserver(measure)
    if (list.value) observer.observe(list.value)
    if (viewport.value) observer.observe(viewport.value)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', measure)
  })

  return { pinHeight }
}
