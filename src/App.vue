<template>
  <div id="app">
    <div class="header">
      <span @click="changeLanguage('zh-CN')" :class="{ active: locale === 'zh-CN' }"  >中文</span>
      <span @click="changeLanguage('en-US')" :class="{ active: locale === 'en-US' }"  >英文</span>
    </div>
   <router-view />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const changeLanguage = ( key ) => {
  locale.value = key
  localStorage.setItem('locale', key)
}
</script>

<style lang="less" scoped>
@import './styles/variables.less';
@import './styles/mixins.less';

.header {
  background: #fff;
  padding: 0 @spacing-lg;
  .flex-center();
  justify-content: space-between;
  height: 64px;
  box-shadow: @box-shadow-base;
  
  span {
    padding: @spacing-sm @spacing-md;
    cursor: pointer;
    border-radius: @border-radius-base;
    transition: all 0.3s;
    
    &:hover {
      background-color: #f5f5f5;
    }
    
    &.active {
      color: @primary-color;
      background-color: fade(@primary-color, 10%);
    }
  }
}

.header-content {
  .flex-center();
  justify-content: space-between;
  height: 64px;
  
  h2 {
    color: white;
    margin: 0;
    margin-right: 20px;
  }
  
  .ant-btn-link {
    color: white;
    
    &:hover {
      color: @primary-color;
    }
  }
}

.content {
  padding: @spacing-lg;
  min-height: calc(100vh - 134px);
  background: #f0f2f5;
}

.footer {
  text-align: center;
  background: #001529;
  color: white;
  padding: @spacing-md 0;
  
  p {
    margin: 0;
  }
}
</style>
