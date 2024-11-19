<script setup lang="ts">
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
</script>

<template>
  <div id="app">
    <Menu />
    <RouterView />
  </div>
</template>

<style scoped>
/* Centralização para a aplicação */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
