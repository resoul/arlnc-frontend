import './assets/css/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Breakpoint from "@/components/breakpoint.js"
import App from './Application.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$breakpoint = new Breakpoint();

app.use(createPinia())
app.use(router)

app.mount('#root')
