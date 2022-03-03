<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RoomView",

  data() {
    return {};
  },
});
</script>
