<script setup>
import axios from "axios"
import { ref } from "vue"
import QuadroAvisos from "../components/QuadroAvisos.vue"

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
  <QuadroAvisos />

  <h1>Reservas</h1>
  <ul>
    <li v-for="reserva in reservas" :key="reserva.id">
      {{ reserva.data }}
    </li>
  </ul>
</template>

<style></style>
