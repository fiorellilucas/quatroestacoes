<script setup>
import axios from "axios"
import { ref } from "vue"
import AvisoItem from "./AvisoItem.vue"
import "../assets/quadro.css"

// busca todos os avisos do BD
const avisos = ref(0)

axios
  .get("/api/avisos")
  .then((response) => {
    avisos.value = response.data
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
<div class="quadro">
  <h1>QUADRO DE AVISOS</h1>
  <ul>
    <AvisoItem v-for="aviso in avisos" :key="aviso.id" :aviso="aviso" />
  </ul>
</div>
</template>

<style scoped></style>
