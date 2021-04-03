<template>
<div>
    <p :class="{'is-complete': this.completedFromProps}">{{ title }}</p>
 
    <p v-if="editing">Título antigo da tarefa: {{title}}</p>
    <input class="input is-primary is-light my-2" v-if="editing" id="inputNovoTitulo" type="text" v-model="titleFromProps">
 
    <p v-if="!editing">{{ this.completedFromProps }}</p>
    <input type="checkbox" v-if="!editing" @change="markComplete" :checked="this.completedFromProps == true">
    <div class="buttons has-addons py-0 mb-0">
      <button class="button is-info is-light column is-half py-0 mb-0" v-if="!editing" @click="editing = !editing">Editar</button>
      <button class="button is-danger is-light column is-half py-0 mb-0" v-if="!editing" @click="deleteTodo({ index })">Excluir</button>
      <button class="button is-warning is-light column is-half py-0 mb-0" v-if="editing" @click="editing = !editing">Desfazer edição</button>
      <button class="button is-success is-light column is-half py-0 mb-0" v-if="editing" @click="editTodo(titleFromProps, index)">Finalizar edição</button>
    </div>
  </div>
</template>
 
<script>
export default {
name: "TodoItem",
data(){
  return{
    editing: false
  }
}, 
methods: {
  titleChange(event, index){
   this.$store.dispatch("titleChange", ({index, event}));
  },
  markComplete(index, completed){
  this.$store.dispatch("markComplete", ({index,completed}));
  },
  deleteTodo(index, id){
    this.$store.dispatch("deleteTodo", ({index,id}));
  },
  updateTodo(id, index, newTitle){
    this.editing = false;
    this.$store.dispatch("updateTodo", {id, newTitle, index});
  }
},
props: {
title: String,
completed: Boolean, 
index: Number,
id: Number
}
}
</script>
 
<style>
.is-complete{
  text-decoration: line-through;
}
</style