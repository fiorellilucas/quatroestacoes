<script setup>
import axios from "axios"
import { ref } from "vue"
import "../assets/quadro.css"
import ReservaItem from "./ReservaItem.vue"

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
<div class="quadro">
  <h1>SALÃO DE FESTAS</h1>
  <ul>
    <ReservaItem v-for="reserva in reservas" :key="reserva.id" :reserva="reserva" />
  </ul>
</div>
</template>
