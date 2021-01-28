<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Todos</h1>
      </v-flex>
      <v-flex xs12 mt-5 mr-5 text-xs-right>
        <router-link :to="{ name: 'todo_edit'}">          
          <v-btn fab dark color='indeigo'>
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers='headers' :items="todos">
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
export default {
  created() {
    this.todos = this.$store.state.todos
  },
  data() {
    return {
      headers: [
        { text: 'Todos', align: 'start', value: 'title', sortable: false},
        { text: 'Done', align: 'start', value: 'text', sortable: false}
      ],
      todos: []
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>