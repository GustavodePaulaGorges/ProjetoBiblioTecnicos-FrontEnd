import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/CadLivros.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/autores",
      name: "autores",
      component: () => import("../views/CadAutores.vue"),
    },
    {
      path: "/editoras",
      name: "editoras",
      component: () => import("../views/CadEditoras.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/CadCategorias.vue")
    }
  ],
});

export default router
