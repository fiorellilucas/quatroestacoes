<script setup></script>

<template>
  <nav>
    <a href="#">Home</a>
    <a href="#">Moradores</a>
    <a href="#">Calendário</a>
    <a href="#">Outros</a>
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
}

a {
  flex: 1 1 0;
  text-align: center;
  text-decoration: none;
  color: black
}

a:visited {
  text-decoration: none;
}

</style>
