export function useParallax(speed = 0.3) {
  const target = ref<HTMLElement | null>(null)

  onMounted(() => {
    const el = target.value
    if (!el) return

    const img = el.querySelector('.parallax-img') as HTMLElement
    if (!img) return

    function onScroll() {
      const rect = el!.getBoundingClientRect()
      const windowH = window.innerHeight
      if (rect.bottom < 0 || rect.top > windowH) return

      const progress = (windowH - rect.top) / (windowH + rect.height)
      const offset = (progress - 0.5) * rect.height * speed
      img.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })

  return { target }
}
