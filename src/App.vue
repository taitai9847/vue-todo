<template>
  <v-app>
    <v-row>
      <SideNav />
      <v-main>
        <v-container fluid fill-height align-start>
          <router-view/>
        </v-container>
      </v-main>
    </v-row>
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
