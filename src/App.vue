<template>
  <div id="app">
    <global-layout>
      <header-bar slot="el-header"></header-bar>
      <main-page slot="el-main"></main-page>
    </global-layout>
  </div>
</template>

<script>
import GlobalLayout from "@/components/layout/GlobalLayout.vue";
import HeaderBar from "@/components/layout/HeaderBar.vue";
import MainPage from "@/views/MainPage.vue";

export default {
  name: 'App',
  components: {
    GlobalLayout,
    HeaderBar,
    MainPage
  }
};
</script>

<style>
  #app {
    width: 1200px;
    margin: 0 auto;
  }
</style>
