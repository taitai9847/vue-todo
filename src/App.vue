<template>
  <v-app>
    <SideNav />
    <v-main>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SideNav from "@/components/SideNav.vue";

export default Vue.extend({
  name: 'App',
  components: {
    SideNav
  },

  data: () => ({
    //
  }),
});
</script>
