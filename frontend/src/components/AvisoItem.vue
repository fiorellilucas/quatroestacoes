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
    <br>
    <p v-if="aviso.dataEvento !== null">Acontecerá em <strong>{{ aviso.dataEvento.getDate() }}/{{ aviso.dataEvento.getMonth() }}/{{ aviso.dataEvento.getFullYear() }}</strong></p>
    <p>Postado em <strong>{{ aviso.dataPostagem.getDate() }}/{{ aviso.dataPostagem.getMonth() }}/{{ aviso.dataPostagem.getFullYear() }}</strong></p>
  </li>
</template>

<style scoped>
li {
  margin: 2em 0;
  padding: 1em;
  border-radius: 1em;
  background-color: #FFF8DF;
  box-shadow: 0 1px 15px #826C44
}

h2, p {
  margin: 0.3rem;
}

</style>
