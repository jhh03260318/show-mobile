<template>
  <!-- 我的 -->
  <div class="mime">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow title="我的" @click-left="$router.go(-1)" />
    <div class="iconimg">
      <van-image
        round
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      >
      </van-image>
      <p>{{usernmae}}</p>
    </div>
    <van-button class="btn" round type="danger" @click="out">安全退出</van-button>
    <van-cell title="我的收藏" is-link />
    <van-cell title="我的评论" is-link />
    <van-cell title="我的订单" is-link />
  </div>
</template>

<script>
export default {
  data(){
    return {
      usernmae:""
    }
  },
  methods:{
    out(){
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
 mounted(){
   const user = JSON.parse(localStorage.getItem("user") || "{}");
   if(user){
     this.usernmae = user.nickname
   }
 }
};
</script>

<style scoped>
.iconimg {
  height: 260px;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  width: 100%;
}
</style>