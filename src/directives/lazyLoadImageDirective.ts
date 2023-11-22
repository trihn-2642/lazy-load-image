import type { Directive } from 'vue'

const lazyLoadImageDirective: Directive = {
  mounted(el: HTMLElement) {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === 'IMG'
      ) as HTMLImageElement

      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        })
        imageElement.addEventListener('error', () => console.log('error'))
        imageElement.src = imageElement.dataset.url as string
      }
    }

    function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        loadImage()
        observer.unobserve(el)
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0
      }
      const observer = new IntersectionObserver(handleIntersect, options)

      observer.observe(el)
    }

    if (!window.IntersectionObserver) {
      loadImage()
    } else {
      createObserver()
    }
  }
}

export default lazyLoadImageDirective
