import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
// 导入全局样式
import './styles/common.less'

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)

// 使用国际化
app.use(i18n)

// 挂载应用
app.mount('#app')
