// 引入axios
import axios from "axios";

const baseUrl = '/api';
// 请求拦截
axios.interceptors.request.use(req=>{
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    console.group('本次请求的接口路径' + req.url);
    if(user.token){
        req.headers.authorization = user.token;
    }
    return req;
})

//响应拦截
axios.interceptors.response.use(res => {
    console.group('本次响应的接口路径' + res.config.url);
    console.log(res.data);
    console.groupEnd('响应拦截结束');
    return res.data;
});

// 请求轮播图列表
export const BannerList = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/getbanner',
    })

};

// 获取商品信息
export const GooodsList = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/getindexgoods',
    })

};

// 获取商品分类属性结构
export const GoodsClassification = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/getcatetree',
    })
};

// 获取商品列表
export const GoodsTreeList = (fid) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/getgoods',
        params: fid
    })
};

// 用户注册
export const Register = (user) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/register',
        data: user
    })
};

// 用户登录
export const Login = (user) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/login',
        data: user
    })
};

// 购物车列表
export const ShopCar = (uid) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/cartlist',
        params: uid
    })
};