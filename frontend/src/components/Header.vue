<script setup>
import logo from "../assets/logo_sem_texto.png"
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
}

img {
  height: 2.5em;
}

a {
  width: 20%;
  display: flex;
  justify-content: center;
}
</style>
