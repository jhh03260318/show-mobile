<template>
  <!-- 购物车 -->
  <div class="shopcar">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow title="购物车" @click-left="$router.go(-1)" />
    <div v-if="shopcar">
      <van-card
        v-for="(item, index) in shopcar"
        :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl + item.img"
      >
        <template #footer>
          <van-stepper
            v-model="shopcar[index].num"
            theme="round"
            button-size="22"
            disable-input
          />
        </template>
      </van-card>
    </div>
    <!-- 当没有数据时 -->
    <van-empty
      v-else
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="描述文字"
    />
    <van-submit-bar class="submitorder" :price="sum" button-text="提交订单" />
  </div>
</template>

<script>
import { ShopCar } from "../utils/request";
export default {
  data() {
    return {
      value: 1,
      shopcar: []
    };
  },
  methods: {
    ShopCars() {
      const user = JSON.parse(localStorage.getItem("user"));
      ShopCar({ uid: user.uid }).then(data => {
        if (data.code === 200) {
          this.shopcar = data.list;
        }
      });
    }
  },
  computed: {
    sum() {
      let num = 0;
      for (let item in this.shopcar) {
        num += this.shopcar[item].num * this.shopcar[item].price;
      }
      return num * 100;
    }
  },
  mounted() {
    this.ShopCars();
  }
};
</script>

<style scoped>
.shopcar {
  margin-bottom: 100px;
}
.submitorder {
  bottom: 50px;
}
</style>