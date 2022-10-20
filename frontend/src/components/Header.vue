<script setup>
import logo from "../assets/logo.png"
import icone_usuario from "../assets/icone_usuario.png"
</script>

<template>
  <div>
    <router-link to="/">
      <img :src="logo" />
    </router-link>
    <router-link to="#">
      <img :src="icone_usuario" />
    </router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

img {
  height: 3em;
}

a {
  display: flex;
  justify-content: center;
}
</style>
