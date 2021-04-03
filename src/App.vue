<template>
  <div id="app" class="column is-half is-offset-one-quarter">
    <TodoInput  />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default {
  name: "app",
  components: {
    TodoList,
    TodoInput,
  },
  mounted() {
    this.$store.dispatch("getTodosList");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
