import Vue from 'vue';
import Router from 'vue-router';
import { Toast } from 'vant';

Vue.use(Router);
const layout = () => import("../pages/layout.vue");
const index = () => import("../pages/index.vue");
const classification = () => import("../pages/classification.vue");
const mine = () => import("../pages/mine.vue");
const shopcar = () => import("../pages/shopcar.vue");
const goodslist = () => import("../pages/goodsList.vue");
const register = () => import("../pages/register.vue");
const login = () => import("../pages/login.vue");




const router = new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/index',
      children: [
        {
          path: "/index",
          component: index
        },
        {
          path: "/classification",
          component: classification
        },
        {
          path: "/mine",
          component: mine
        },
        {
          path: "/shopcar",
          component: shopcar
        },
        {
          path: "/goodslist",
          component: goodslist
        },
      ]
    },
    {
      path: "/register",
      component: register
    },
    {
      path: "/login",
      component: login
    },
  ]
});

// 全局守卫
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if(to.path === "/mine"){
    if(!user.token){
      Toast.fail('请登录');
      router.push("/login");
      return;
    }
  }
  next()
});

export default router
