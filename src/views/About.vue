<template>
  <div class="about">
    <h1>{{ t('about.title') }}666666</h1>
    <div class="about-content">
      <p>{{ t('about.content') }}</p>
      <p>{{ t('about.description') }}</p>
      <h3>技术栈</h3>
      <ul>
        <li>Vue 3 - 渐进式JavaScript框架</li>
        <li>Vue Router 4 - 官方路由管理器</li>
        <li>Ant Design Vue - 企业级UI组件库</li>
        <li>Vite - 下一代前端构建工具</li>
        <li>Less - CSS预处理器</li>
        <li>Vue I18n - 国际化解决方案</li>
      </ul>
      <h3>项目特性</h3>
      <ul>
        <li>✅ 响应式设计，支持移动端和桌面端</li>
        <li>✅ 国际化支持，中英文切换</li>
        <li>✅ 现代化开发工具链</li>
        <li>✅ 组件化开发模式</li>
        <li>✅ 优雅的样式解决方案</li>
      </ul>
      
      <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #1890ff;">
        <h4>🚀 部署测试</h4>
        <p><strong>当前时间：</strong> {{ currentTime }}</p>
        <p><strong>部署版本：</strong> v1.0.1</p>
        <p><strong>状态：</strong> <span style="color: #52c41a;">✅ 部署成功</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const { t } = useI18n()

// 添加当前时间显示
const currentTime = ref('')

onMounted(() => {
  currentTime.value = new Date().toLocaleString('zh-CN')
})
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
@import '../styles/mixins.less';

.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: @spacing-lg;
  
  h1 {
    color: @primary-color;
    text-align: center;
    margin-bottom: @spacing-xl;
    font-size: 2rem;
  }
}

.about-content {
  background: white;
  padding: @spacing-xl;
  border-radius: @border-radius-lg;
  box-shadow: @box-shadow-card;
  
  p {
    font-size: @font-size-lg;
    line-height: 1.6;
    color: #666;
    margin-bottom: @spacing-lg;
  }
  
  h3 {
    color: @primary-color;
    margin: @spacing-xl 0 @spacing-md 0;
    font-size: 1.3rem;
    border-bottom: 2px solid @primary-color;
    padding-bottom: @spacing-sm;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: @spacing-sm 0;
      border-bottom: 1px solid #f0f0f0;
      font-size: @font-size-base;
      line-height: 1.5;
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background-color: #f9f9f9;
        padding-left: @spacing-sm;
        transition: all 0.3s;
      }
    }
  }
}
</style>
