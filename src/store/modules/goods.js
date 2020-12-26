// 引入接口数据
import { SelectGoodsByOne } from '../../utils/request';
// 存储数据模块
const state = {
    goodsOne: [],//一条商品的信息
};
// 修改state模块的内容
const mutations = {
    // 修改一条商品的信息
    changGoodsOne(state, arr) {
        state.goodsOne = arr;
    }
};
// 修改mutations模块的内容
const actions = {
    GoodsOneAction(context,id){
        // 请求接口数据
        SelectGoodsByOne({id}).then(data=>{
            if(data.code===200){
                context.commit("changGoodsOne",data.list);
            }
        })
    }
};
// 传递数据
const getters = {
    goodsOne(state){
        return state.goodsOne
    }
}

// 暴露所有的模块
export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}