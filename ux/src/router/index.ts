import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";
import Xande from "../components/Xande.vue";
import Gi from "../components/Gi.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/room",
    name: "room",
    component: Room,
    children: [
      {
        path: "/room/xande",
        name: "Room xande",
        component: Xande,
      },
      {
        path: "/room/gi",
        name: "Room gi",
        component: Gi,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
