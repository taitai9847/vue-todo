<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>TodoForm</h1>
      </v-flex>
      <v-flex xs9 mt-12>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="todo.title" label="内容"></v-text-field>
               <v-text-field v-model="todo.text" label="備考"></v-text-field>
               <v-layout row wrap justify-center>
                   <v-btn @click="$router.push({ name: 'todo' })">キャンセル</v-btn>
                   <v-btn color="info" @click="submit">保存</v-btn>
               </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            todo: {}
        }
    },
    methods: {
        submit() {
            this.addTodo(this.todo)
            console.log(this.todo)
            console.log("ok!")
            this.todo = []
            this.$router.push({ name: 'todo' })
        },
        ...mapActions(['addTodo'])
    }
}
</script>