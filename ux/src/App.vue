<template>
  <v-app>
    <v-app-bar
      app
      background-color="primary"
      dark
      grow
      clipped-left
      style="z-index: 100"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon :style="drawer ? 'transform: rotate(180deg)' : ''">{{
          drawer ? "fa-xmark" : "fa-bars"
        }}</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list-items>
        <v-list-item
          :style="
            isMobile && item.title === 'Início'
              ? 'margin-top: 60px'
              : 'margin-top: 5px'
          "
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          @click="drawer = !drawer"
        >
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-items>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Início",
          icon: "fa-home",
          route: "/",
        },
        {
          title: "Quarto Xande",
          icon: "fa-meteor",
          route: "/room/xande",
        },
        {
          title: "Quarto Gi",
          icon: "fa-cat",
          route: "/room/gi",
        },
      ],
    };
  },

  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
});
</script>
