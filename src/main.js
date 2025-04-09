import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.less'
import App from './Music.vue'
import router from './router/index.js'

const app=createApp(App);
app.use(router)
app.use(createPinia())
app.mount('#app')
