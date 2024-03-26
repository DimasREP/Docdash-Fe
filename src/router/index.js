import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/user/HomeView.vue";
import KategoriView from "../views/user/KategoriView.vue";
import Layoutuser from "../layout/userlayout.vue";
import LayoutAdmin from "../layout/adminlayout.vue";
import DashboardAdmin from "../views/admin/DashboardAdmin.vue";
import MeneUser from "../views/admin/ManajementUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "user",
      component: Layoutuser,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/kategori",
          name: "Kategori",
          component: KategoriView,
        },
      ],
    },
    {
      path: "/admin",
      name: "LayoutAdmin",
      component: LayoutAdmin,
      children: [
        {
          path: "/admin",
          name: "DashboardAdmin",
          component: DashboardAdmin,
        },
        {
          path: "/admin/meneuser",
          name: "MeneUser",
          component: MeneUser,
        },
      ],
    },

    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
