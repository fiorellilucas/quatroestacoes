<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/moradores">Moradores</router-link>
    <router-link to="/calendario">Calendário</router-link>
    
    <!-- CRIAR MENU ESTILO DRAWER PARA AS OUTRAS PÁGINAS -->
    <router-link to="/outros">Outros</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 8%;
  width: 100%;
  background-color: #F7D08A;
  box-shadow: 0 0 15px #9D9272;
}

a {
  flex: 1 1 0;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1em;
}

a:visited {
  text-decoration: none;
}

.router-link-active {
  font-weight: bold;
}

</style>
