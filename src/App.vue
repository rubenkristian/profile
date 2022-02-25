<script setup lang="ts">
  import AppBar from './components/Bar/AppBar.vue';

  window.addEventListener('scroll', (e: Event) => {
    console.log(window.scrollX, window.scrollY);
  });
</script>

<template>
  <app-bar></app-bar>
  <router-view></router-view>
</template>

<style>
body, html {
  margin: 0;
  height: 1000px;
}
</style>
