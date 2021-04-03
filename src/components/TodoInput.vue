<template>
  <div>
    <input
    class="input is primary is-light"
      v-model="title"
      type="text"
      placeholder="Insira o título da tarefa"
    />
    <button @click="createTodo({ title })" class="button is-info is-light mt-1https://www.tse.jus.br/eleitor/titulo-de-eleitor/pre-atendimento-eleitoral-titulo-net/pre-atendimento-eleitoral-titulo-net/">Adicionar</button>
  </div>
</template>
 
<script>
import { mapActions } from "vuex";

export default {
  name: "TodoInput",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions({createTodo: "createTodo"})
  },
};
</script>
 
<style>
</style>