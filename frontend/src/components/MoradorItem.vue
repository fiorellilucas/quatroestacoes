<script setup>
defineProps(["morador"])
</script>

<template>
  <li>
    <h2>{{ morador.nome }} {{ morador.sobrenome }}</h2>
    <p>
      Apartamento: <strong>{{ morador.apartamento }}</strong>
    </p>
    <p>
      Interfone: <strong>{{ morador.interfone }}</strong>
    </p>
  </li>
</template>

<style scoped>
h2,
p {
  margin: 0.3rem;
}

li {
  margin: 2em 0;
  padding: 1em;
  border-radius: 1em;
  background-color: #fff8df;
  box-shadow: 0 0 10px #826c44;
}
</style>
