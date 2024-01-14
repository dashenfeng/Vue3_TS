// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
import { createPinia } from "pinia";

// 创建一个应用
const app = createApp(App)
const pinia = createPinia() // 创建pinia
app.use(pinia) // 安装pinia
// 挂载整个应用到app容器中
app.mount('#app')