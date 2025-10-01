<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">{{ t('notFound.title') }}</h2>
      <p class="error-description">{{ t('notFound.description') }}</p>
      <button class="back-btn" @click="goHome">
        {{ t('notFound.backHome') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
@import '../styles/mixins.less';

.not-found {
  .flex-center();
  min-height: 80vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  .not-found-content {
    text-align: center;
    padding: @spacing-xl;
    background: white;
    border-radius: @border-radius-lg;
    box-shadow: @box-shadow-base;
    max-width: 500px;
    width: 100%;
    
    .error-code {
      font-size: 6rem;
      font-weight: bold;
      color: @primary-color;
      margin: 0 0 @spacing-md 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .error-title {
      font-size: 2rem;
      color: #333;
      margin: 0 0 @spacing-md 0;
      font-weight: 600;
    }
    
    .error-description {
      font-size: @font-size-lg;
      color: #666;
      margin: 0 0 @spacing-xl 0;
      line-height: 1.6;
    }
    
    .back-btn {
      background: @primary-color;
      color: white;
      border: none;
      padding: @spacing-sm @spacing-lg;
      border-radius: @border-radius-base;
      font-size: @font-size-base;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background: lighten(@primary-color, 10%);
        transform: translateY(-2px);
        box-shadow: @box-shadow-base;
      }
    }
  }
  
  // 响应式设计
  .respond-to(mobile) {
    padding: @spacing-md;
    
    .not-found-content {
      padding: @spacing-lg;
      
      .error-code {
        font-size: 4rem;
      }
      
      .error-title {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
