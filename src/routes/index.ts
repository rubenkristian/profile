import * as VueRouter from 'vue-router';

const routes: Array<VueRouter.RouteRecordRaw> = [
  {
    path: '/',
    component: import(/* home */'../pages/Home.vue')
  }
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
});