<script setup>
const props = defineProps(["reserva"])

props.reserva.data = new Date(props.reserva.data)
</script>

<template>
  <li>
    <!-- getMonth() retorna um mês anterior pois ela retorna os meses de 0-11 em vez de 1-12 -->
    <h3>
      {{ reserva.data.getDate() }}/{{ reserva.data.getMonth() + 1 }}/{{
        reserva.data.getFullYear()
      }}
    </h3>

    <p>
      <strong
        >{{ reserva.morador.nome }} {{ reserva.morador.sobrenome }}</strong
      >
    </p>
    <p>
      Bloco {{ reserva.morador.bloco }} AP {{ reserva.morador.apartamento }}
    </p>
  </li>
</template>

<style scoped>
li {
  margin: 2em 0;
  padding: 1em;
  border-radius: 1em;
  background-color: #fff8df;
  box-shadow: 0 0 10px #826c44;
}

h3,
p {
  margin: 0.3rem;
}
</style>
