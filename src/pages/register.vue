<template>
  <!-- 会员注册 -->
  <div class="register">
    <!-- 导航栏 -->
    <van-nav-bar
      left-arrow
      title="注册"
      right-text="登录"
      @click-left="$router.go(-1)"
      @click-right="$router.push('/login')"
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
        v-model="user.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
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
import { Register } from "../utils/request";
export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      Register(this.user).then(data => {
        if (data.code === 200) {
          this.$toast.success(data.msg);
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>