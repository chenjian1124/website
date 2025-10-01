import { createI18n } from 'vue-i18n'
import zh from './locales/zh-CN'
import en from './locales/en-US'

// 从本地存储获取语言设置，默认为中文
const locale = localStorage.getItem('locale') || 'en-US'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale,
  fallbackLocale: 'en-US', // 回退语言
  messages: {
    'en-US': en,
    'zh-CN': zh
  }
})

export default i18n
