import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/core/Layout.vue';
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: '/register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
      },
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  
  // if (localStorage.getItem("token") == null) {
  //   // store.dispatch("fetchAccessToken");
  //   next("/login");
  // }

  if (to.fullPath != '/login') {
    if (!store.getters.isLogin) {
      next('/login')
    }
  }

  if (to.fullPath == "/login" || to.fullPath == "/register") {
    if (store.getters.isLogin) {
      next('/');
    }
  }
  next();
});

export default router
