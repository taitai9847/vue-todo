/* eslint-disable vue/no-unused-vars */
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
        <v-data-table :headers='headers' :items='todos'>
          <template v-slot:[`item.delete`]="{ item }">
            <span>
              <v-icon small class="mr-2" @click="deleteTodo(item)">mdi-delete</v-icon>
            </span>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { mapActions} from 'vuex'
export default {
  created() {
    this.todos = this.$store.state.todos
  },
  data() {
    return {
      headers: [
        { text: 'Todos', align: 'start', value: 'title', sortable: false},
        { text: 'Remarks', value: 'text', sortable: false},
        { text: 'Delete', value: 'delete', sortable: false}
      ],
      todos: []
    }
  },
  methods: {
    deleteTodo(item: any) {
      console.log("delete!", item)
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>