import { Todos } from '@/types/todos'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [] as Todos[]
  },
  mutations: {
    addTodo(state, { todo }) {
      state.todos.push(todo)
    },
    deleteTodo(state, { id }) {
      const index = state.todos.findIndex((todo: { id: number }) => todo.id === id)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', { todo })
    },
    deleteTodo({ commit }, id: number): void {
      commit('deleteTodo', { id })
    }
  },
  modules: {
  }
})