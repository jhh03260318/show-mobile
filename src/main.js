// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入vant全局组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 声明一个全局线上图片地址，后期可跟随线上地址的改变而更改
Vue.prototype.$imgUrl = "http://localhost:3000";

// 引入状态管理层的vuex
import store from './store/index';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
