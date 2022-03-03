<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="auto" v-for="room in rooms" :key="room.title">
        <v-card :to="room.route">
          <v-card-title>Quarto {{ room.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.v-card {
  margin: 20px;
  width: 300px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",

  data() {
    return {
      rooms: [
        {
          title: "Xande",
          route: "/room/xande",
        },
        {
          title: "Gi",
          route: "/room/gi",
        },
      ],
    };
  },
});
</script>
