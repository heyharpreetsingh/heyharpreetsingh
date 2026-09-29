import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref('')

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          activeSection.value = id
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    activeSection,
  }
}
