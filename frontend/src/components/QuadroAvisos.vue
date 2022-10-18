<script setup>
import axios from "axios"
import { ref } from "vue"
import AvisoItem from "./AvisoItem.vue"

// busca todos os avisos do BD
const avisos = ref(0)

axios
  .get("/api/avisos")
  .then((response) => {
    avisos.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <h1>Quadro de avisos</h1>
  <ul>
    <AvisoItem v-for="aviso in avisos" :key="aviso.id" :aviso="aviso" />
  </ul>
</template>

<style scoped></style>
