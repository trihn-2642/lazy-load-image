import lazyLoadImageDirective from '@/directives/lazyLoadImageDirective'
import type { App } from 'vue'

const lazyLoadImage = {
  install(app: App) {
    app.directive('lazy-load-image', lazyLoadImageDirective)
  }
}

export default lazyLoadImage
