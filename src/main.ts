import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'ant-design-vue/dist/reset.css'
import lazyLoadImage from '@/plugins/lazyLoadImage'

import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
app.use(lazyLoadImage)

app.mount('#app')
