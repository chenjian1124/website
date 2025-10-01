<template>
  <div class="about">
    {{ 
      t('about.title')111111
    }}
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  margin-top: 20px;
}

.about-content h3 {
  margin-bottom: 16px;
  color: #1890ff;
}
</style>
