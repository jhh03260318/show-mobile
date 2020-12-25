<template>
  <!-- 会员登录 -->
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar
      left-arrow
      title="登录"
      right-text="注册"
      @click-left="$router.go(-1)"
      @click-right="$router.push('/register')"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// 引入接口数据
import { Login } from "../utils/request";
export default {
  data() {
    return {
      user: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      Login(this.user).then(data => {
        if (data.code === 200) {
          // 存储在本地
          localStorage.setItem("user", JSON.stringify(data.list));
          this.$toast.success(data.msg);
          this.$router.push("/index");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>