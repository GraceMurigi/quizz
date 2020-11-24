import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import General from "../views/General.vue";
import Animals from "../views/Animals.vue";
import Science from "../views/Science.vue";
import Entertainment from "../views/Entertainment.vue";


Vue.use(VueRouter);

const routes = [ 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/general-knowledge",
    name: "General",
    component: General
    
  },
  {
    path: "/animals",
    name: "Animals",
    component: Animals
    
  },
  {
    path: "/science",
    name: "Science",
    component: Science
    
  },
  {
    path: "/entertainment",
    name: "Entertainment",
    component: Entertainment
    
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
