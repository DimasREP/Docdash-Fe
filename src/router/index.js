import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/auth/LoginView.vue";
import HomeView from "../views/user/HomeView.vue";
import FolderView from "../views/user/FolderView.vue";
import Layoutuser from "../layout/userlayout.vue";
import LayoutAdmin from "../layout/adminlayout.vue";
import DashboardAdmin from "../views/admin/DashboardAdmin.vue";
import MeneUser from "../views/admin/ManajementUser.vue";
import Document from "../views/user/Document.vue";
import Message from "../views/user/Message.vue";
import Profile from "../views/admin/Profile.vue";
import Inbox from "../views/admin/Inbox.vue";
import store from "../store";
import Register from "../views/auth/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/register",
      name:"Register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "Login",
      },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["auth/isAuthenticated"];
        if (isAuthenticated) {
          const role = localStorage.getItem("role");
          if (role === "admin") {
            next("/admin");
          } else if (role === "user") {
            next("/");
          }
        } else {
          next();
        }
      },
    },
    
    {
      path: "/",
      name: "user",
      component: Layoutuser,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
          meta: {
            title: "HomeView",
            requiresAuth: true,
          },
        },
        {
          path: "/folder",
          name: "Folder",
          component: FolderView,
        },
        {
          path: "/document",
          name: "Document",
          component: Document,
        },
        {
          path: "message",
          name: "Message",
          component: Message,
        },
      ],
    },
    {
      path: "/admin",
      name: "LayoutAdmin",
      component: LayoutAdmin,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "DashboardAdmin",
          component: DashboardAdmin,
          meta: {
            title: "AdminDashboard",
            requiresAuth: true,
          },
        },
        {
          path: "meneuser",
          name: "MeneUser",
          component: MeneUser,
        },
        {
          path: "inbox",
          name: "Inbox",
          component: Inbox,
        },
        {
          path: "profile",
          name: "Profile",
          component: Profile,
        },
      ],
    },
    
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const requiresAuth = to.meta.requiresAuth;
  const userRole = localStorage.getItem("role");

  if (requiresAuth && !isAuthenticated) {
    next({
      name: "login",
    });
  } else {
    if (userRole === "admin" && to.path.indexOf("/admin") === -1) {
      next({
        name: "DashboardAdmin",
      });
    } else if (userRole === "user" && to.path.indexOf("/admin") !== -1) {
      next({
        name: "home",
      });
    } else {
      next();
    }
  }
});

export default router;
