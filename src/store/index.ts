import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [] as any
  },
  mutations: {
    addTodo(state, { id, todo }) {
      todo.id = id
      state.todos.push(todo)
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', { id: todo.id, todo })
    }
  },
  modules: {
  }
})
