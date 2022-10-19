<script setup>
const props = defineProps(["aviso"])

props.aviso.dataPostagem = new Date(props.aviso.dataPostagem)

if (props.aviso.dataEvento !== null) {
  props.aviso.dataEvento = new Date(props.aviso.dataEvento)
}
</script>

<template>
  <li>
    <h2>{{ aviso.assunto }}</h2>
    <p>{{ aviso.mensagem }}</p>
    <br />
    <!-- getDate() retorna um dia anterior pela falta de fuso horário na entrada do BD -->
    <!-- getMonth() retorna um mês anterior pois ela retorna os meses de 0-11 em vez de 1-12 -->
    <p v-if="aviso.dataEvento !== null">
      Acontecerá em
      <strong
        >{{ aviso.dataEvento.getDate() + 1 }}/{{
          aviso.dataEvento.getMonth() + 1
        }}/{{ aviso.dataEvento.getFullYear() }}</strong
      >
    </p>
    <p>
      Postado em
      <strong
        >{{ aviso.dataPostagem.getDate() }}/{{
          aviso.dataPostagem.getMonth() + 1
        }}/{{ aviso.dataPostagem.getFullYear() }}</strong
      >
    </p>
  </li>
</template>

<style scoped>
li {
  margin: 2em 0;
  padding: 1em;
  border-radius: 1em;
  background-color: #fff8df;
  box-shadow: 0 1px 15px #826c44;
}

h2,
p {
  margin: 0.3rem;
}
</style>
