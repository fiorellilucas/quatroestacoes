<script setup>
defineProps(["aviso"])
</script>

<template>
  <li>
    <h2>{{ aviso.assunto }}</h2>
    <p>{{ aviso.mensagem }}</p>
    <p>{{ aviso.dataPostagem }}</p>
    <p>{{ aviso.dataEvento }}</p>
  </li>
</template>

<style scoped></style>
