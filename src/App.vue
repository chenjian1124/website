<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./views/comments/Header.vue";
import Footer from "./views/comments/Footer.vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const changeLanguage = (key) => {
  locale.value = key;
  localStorage.setItem("locale", key);
};
</script>

<style lang="less"></style>
