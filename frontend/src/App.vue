<script setup>
import BottomNav from "./components/BottomNav.vue"
import Header from "./components/Header.vue"
</script>

<template>
  <Header />
  <router-view></router-view>
  <BottomNav />
</template>

<style scoped>
</style>
