<script setup>
import axios from "axios"
import { ref } from "vue"

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

// busca todas as reservas do BD
const reservas = ref(0)

axios
  .get("api/reservas")
  .then((response) => {
    reservas.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <h1>Quadro de avisos</h1>
  <ul>
    <li v-for="aviso in avisos" :key="aviso.id">
      <h3>{{ aviso.assunto }}</h3>
      <p>{{ aviso.mensagem }}</p>
      <p>{{ aviso.dataPostagem }}</p>
      <p>{{ aviso.dataEvento }}</p>
    </li>
  </ul>

  <h1>Reservas</h1>
  <ul>
    <li v-for="reserva in reservas" :key="reserva.id">
      {{ reserva.data }}
    </li>
  </ul>
</template>

<style scoped></style>
