<template>
  <div>
    <div class="card mx-6 my-4" v-for="(item, index) in list" :key="index">
      <TodoItem
        :title="item.title"
        :completed="item.completed"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  methods: {},
  computed: {
    list() {
      return this.$store.getters.getAllTodos;
    },
  },
};
</script>

<style>
</style>