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
  <h1>Quadro de avisos</h1>
  <ul>
    <AvisoItem v-for="aviso in avisos" :key="aviso.id" :aviso="aviso" />
  </ul>
</div>
</template>

<style scoped>
#quadro{
  padding: 1em;
  border: 1px #F7D08A solid;
  background-color: #F7D08A;
  border-radius: 1.5em;
  box-shadow: 0 3px 15px #D3C499, 0 -3px 15px #D3C499;
}

h1 {
  margin-top: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
