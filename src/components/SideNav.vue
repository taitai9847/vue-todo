<template>  
  <v-card
    min-height="100vh"
    width="256"
  >
    <v-navigation-drawer permanent>
      <v-flex xs12 mt-6>
      </v-flex>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.router"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Todo', icon: 'mdi-view-dashboard', router: 'todos' },
          { title: 'Memo', icon: 'mdi-image', router: 'about'},
          { title: 'Article', icon: 'mdi-help-box', router: 'home' }
        ],
        right: null,
      }
    },
  }
</script>