<template>
  <!-- 商品列表 -->
  <div class="goodslist">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow title="商品列表" @click-left="$router.go(-1)" />
    <!-- 商品列表 -->
    <div v-if="goodslist">
      <van-card
        v-for="item in goodslist"
        :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl + item.img"
      >
      </van-card>
    </div>
    <!-- 当没有数据时 -->
    <van-empty
      v-else
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="描述文字"
    />
  </div>
</template>

<script>
// 引入接口数据
import { GoodsTreeList } from "../utils/request";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  methods: {
    GoodsList() {
      let fid = this.$route.query.fid;
      GoodsTreeList({ fid }).then(data => {
        this.goodslist = data.list;
      });
    }
  },
  mounted() {
    this.GoodsList();
  }
};
</script>

<style scoped>
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>