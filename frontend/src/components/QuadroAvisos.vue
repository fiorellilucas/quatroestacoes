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
<div id="quadro">
  <h1>QUADRO DE AVISOS</h1>
  <ul>
    <AvisoItem v-for="aviso in avisos" :key="aviso.id" :aviso="aviso" />
  </ul>
</div>
</template>

<style scoped>
#quadro {
  padding: 1em;
  border: 2px solid #936900;
  background-color: #F7D08A;
  border-radius: 1.5em;
  box-shadow: 0 0 15px #9D9272;
}

h1 {
  margin-top: 0;
  text-align: center;
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
