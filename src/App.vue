<template>
  <div id="app">
     <router-view name="top" />
    <transition name="slide-right">
      <router-view />
    </transition>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "./components/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import url('./assets/css/base.css');
</style>
