<template>
  <div class="home">
    <div class="hero-section">
      <h1 class="hero-title">{{ t('home.title') }}</h1>
      <p class="hero-description">欢迎使用 Less 预处理器！</p>
      <div class="button-group">
        <button class="btn btn-primary">主要按钮</button>
        <button class="btn btn-success">成功按钮</button>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>Less 特性演示</h3>
      <div class="card-grid">
        <div class="card">
          <h4>变量使用</h4>
          <p>使用 @primary-color 变量</p>
        </div>
        <div class="card">
          <h4>嵌套选择器</h4>
          <p>Less 支持嵌套语法</p>
        </div>
        <div class="card">
          <h4>混入函数</h4>
          <p>使用 .flex-center() 混入</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style lang="less" scoped>
@import '../styles/variables.less';
@import '../styles/mixins.less';

.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: @spacing-lg;
}

.hero-section {
  text-align: center;
  padding: @spacing-xl 0;
  background: linear-gradient(135deg, @primary-color, lighten(@primary-color, 20%));
  color: white;
  border-radius: @border-radius-lg;
  margin-bottom: @spacing-xl;
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: @spacing-md;
    font-weight: bold;
  }
  
  .hero-description {
    font-size: @font-size-lg;
    margin-bottom: @spacing-lg;
    opacity: 0.9;
  }
  
  .button-group {
    .flex-center();
    gap: @spacing-md;
    
    .btn {
      padding: @spacing-sm @spacing-lg;
      font-size: @font-size-base;
      
      &.btn-primary {
        background-color: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        color: white;
        
        &:hover {
          background-color: white;
          color: @primary-color;
        }
      }
      
      &.btn-success {
        background-color: @success-color;
        border: 2px solid @success-color;
        color: white;
        
        &:hover {
          background-color: lighten(@success-color, 10%);
          border-color: lighten(@success-color, 10%);
        }
      }
    }
  }
}

.demo-section {
  margin-top: @spacing-xl;
  
  h3 {
    margin-bottom: @spacing-lg;
    color: @primary-color;
    font-size: 1.5rem;
  }
  
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: @spacing-lg;
    
    .card {
      background: white;
      padding: @spacing-lg;
      border-radius: @border-radius-base;
      box-shadow: @box-shadow-card;
      transition: transform 0.3s, box-shadow 0.3s;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: @box-shadow-base;
      }
      
      h4 {
        color: @primary-color;
        margin-bottom: @spacing-sm;
        font-size: @font-size-lg;
      }
      
      p {
        color: #666;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
  
  // 响应式设计
  .respond-to(mobile) {
    .card-grid {
      grid-template-columns: 1fr;
    }
    
    .hero-section {
      padding: @spacing-lg 0;
      
      .hero-title {
        font-size: 2rem;
      }
    }
  }
}
</style>
