//作为一个vuex状态层的主入口文件
//引入vue
import Vue from 'vue';
//引入vuex
import Vuex from 'vuex';
//因为vuex是基于vue的，所以得使用vux
Vue.use(Vuex);

//引入mutations文件
import { state, mutations, getters } from './mutations';
//引入actions文件
import actions from './actions';

import goods from "./modules/goods";

//将实例对象暴露出去，以便项目得主入口文件调用
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        goods
    }
});