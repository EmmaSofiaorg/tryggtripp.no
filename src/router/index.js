import Vue from "vue";
import VueAnalytics from "vue-analytics";
import Router from "vue-router";

import Home from "@/pages/Home";
import Guide from "@/pages/Guide";

import Mdma from "@/pages/Mdma";
import Lsd from "@/pages/Lsd";
import Sopp from "@/pages/Sopp";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/guide",
      name: "Guide",
      component: Guide,
      children: [
        {
          path: "mdma",
          name: "Mdma",
          component: Mdma
        },
        {
          path: "lsd",
          name: "Lsd",
          component: Lsd
        },
        {
          path: "psilosybin",
          name: "Sopp",
          component: Sopp
        }
      ]
    }
  ]
});

// your Google Analytcs tracking ID
const id = "UA-94070001-1";

Vue.use(VueAnalytics, { id, router });

export default router;

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
