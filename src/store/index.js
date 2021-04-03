import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import 'babel-polyfill';
 
Vue.use(Vuex);
 
const base_url = "https://jsonplaceholder.typicode.com";
 
export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        // Mutações são maneiras síncronas de alterar o estado e são disparadas pelas actions.
        // Enviar todos pro estado
 
        getTodosList(state, payload) {
            state.todos = payload.data;
        },
 
        createTodo(state, payload) {
            console.log("MUTATIONS - CREATETODO -  PAYLOAD > " + payload.title);
            state.todos.push(payload);
        },
 
        deleteTodo(state, payload) {
            console.log("MUTATIONS - DELETETODO - PAYLOAD >" + payload);
            state.todos.splice(payload, 1);
        },
 
        updateTodo(state, payload){
          console.log("MUTATIONS - UPDATETODO - PAYLOAD >"+ payload.newTitle);
          state.todos[payload.index].title = payload.newTitle;
        },
 
        markComplete(state, payload){
          console.log("MUTATIONS - MARKCOMPLETE - PAYLOAD >"+ payload.completed);
          state.todos[payload.index].completed = payload.completed;
        },
 
        titleChange(state, payload){
          console.log("MUTATIONS - TITLECHANGE - PAYLOAD >"+ payload.event.target.value);
          state.todos[payload.index].title = payload.event.target.value;
        }
    },
    actions: {
        // Assíncronas
        async getTodosList(state) {
            axios.get(`${base_url}/todos?_limit=5`)
                .then(res => state.commit('getTodosList', res))
                .catch(er => console.log(er))
        },
 
        async createTodo(state, payload) {
            console.log("ACTION CREATE TODO - PAYLOAD > " + payload.title);
            payload.completed = false;
            axios.post(`${base_url}/todos`, payload).then(res => {
                console.log(res.data)
                state.commit('createTodo', res.data)
            });
        },
 
        async deleteTodo(state, payload) {
            console.log(payload);
            axios.delete(`${base_url}/todos/${payload.id}`).then(res => {
                console.log(res);
                state.commit('deleteTodo', payload.index)
            })
        },
 
        async updateTodo(state, payload){
            console.log(payload);
            axios.put(`${base_url}/todos/${payload.id}`).then(res => {
              console.log(res);
              state.commit('updateTodo', payload)
            })
        },
 
        markComplete(state, payload){
          console.log(payload);
          state.commit('markComplete', payload);
        },
 
        titleChange(state, payload){
          console.log(payload);
          state.commit('titleChange', payload);
        }
 
        // Métodos a fazer
        //  editar todo
 
    },
    getters: {
        // Pegar informação e mostra-la em alguma parte do app
        getAllTodos: (state) => {
            return state.todos
        }
    },
});