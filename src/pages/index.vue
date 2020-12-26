<template>
  <!-- 首页 -->
  <div class="index">
    <!-- 导航栏 -->
    <van-nav-bar title="首页" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="bannerimg" :src="$imgUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类标签 -->
    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
          v-for="item in goodslist[0].content"
          :key="item.id"
          tag="hot"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgUrl + item.img"
        >
          <template #footer>
            <van-button
              type="primary"
              size="small"
              icon="cart-o"
              @click="getgoods(item.id)"
            ></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="发现新品">
        <van-card
          v-for="item in goodslist[1].content"
          :key="item.id"
          tag="hot"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgUrl + item.img"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template> </van-card
      ></van-tab>
      <van-tab title="所有商品">
        <van-card
          v-for="item in goodslist[2].content"
          :key="item.id"
          tag="hot"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgUrl + item.img"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"></van-button>
          </template> </van-card
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { BannerList, GooodsList } from "../utils/request";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      active: 0,
      bannerList: [], //轮播图列表
      goodslist: [{ content: "" }, { content: "" }, { content: "" }] //商品信息
    };
  },
  methods: {
    // 轮播图列表
    banner() {
      BannerList().then(data => {
        this.bannerList = data.list;
      });
    },
    // 商品分类，热门，推荐，所有
    goods() {
      GooodsList().then(data => {
        this.goodslist = data.list;
      });
    },
    ...mapActions({
      getGoods: "goods/GoodsOneAction"
    }),
    // 获取商品的详细信息
    getgoods(id) {
      this.getGoods(id);
      this.$router.push("/detail");
    }
  },
  mounted() {
    this.banner();
    this.goods();
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #eee; */
}
.van-tab__pane {
  margin-bottom: 50px;
}
.bannerimg {
  width: 100%;
  height: 250px;
}
</style>