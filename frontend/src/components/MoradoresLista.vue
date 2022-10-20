<script setup>
import axios from "axios"
import { ref } from "vue"
import "../assets/quadro.css"
import MoradorItem from "./MoradorItem.vue"

const moradores = ref(0)

axios
  .get("api/moradores")
  .then((response) => {
    moradores.value = response.data
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <h1>MORADORES</h1>
  <div class="quadro bloco-a">
    <h2>BLOCO A</h2>
    <ul>
      <template v-for="morador in moradores">
        <MoradorItem v-if="morador.bloco == 'A'" :morador="morador" />
      </template>
    </ul>
  </div>
  <div class="quadro bloco-b">
    <h2>BLOCO B</h2>
    <ul>
      <template v-for="morador in moradores">
        <MoradorItem v-if="morador.bloco == 'B'" :morador="morador" />
      </template>
    </ul>
  </div>
  <div class="quadro bloco-c">
    <h2>BLOCO C</h2>
    <ul>
      <template v-for="morador in moradores">
        <MoradorItem v-if="morador.bloco == 'C'" :morador="morador" />
      </template>
    </ul>
  </div>
  <div class="quadro bloco-d">
    <h2>BLOCO D</h2>
    <ul>
      <template v-for="morador in moradores">
        <MoradorItem v-if="morador.bloco == 'D'" :morador="morador" />
      </template>
    </ul>
  </div>
</template>

<style scoped>
.bloco-a {
  background-color: rgba(255, 0, 162, 0.3);
}

.bloco-b {
  background-color: rgba(255, 232, 0, 0.3);
}

.bloco-c {
  background-color: rgba(5, 156, 0, 0.3);
}

.bloco-d {
  background-color: rgba(0, 73, 255, 0.3);
}

h2 {
  text-align: center;
}
</style>
