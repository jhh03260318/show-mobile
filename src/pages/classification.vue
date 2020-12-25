<template>
  <!-- 分类 -->
  <div class="classification">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow title="分类" @click-left="$router.go(-1)" />
    <van-sidebar v-model="active">
      <van-sidebar-item
        v-for="item in goodsclassifi"
        :key="item.id"
        :title="item.catename"
        @click="changeindex"
      />
    </van-sidebar>
    <!-- 右侧分类详细信息 -->
    <div class="classifi-right">
      <van-grid>
        <van-grid-item v-for="item in secondeclassifi" :key="item.id" :to="`/goodsList?fid=${item.id}`">
          <van-image :src="$imgUrl+item.img" />
          <p>{{item.catename}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
// 引入接口数据
import { GoodsClassification } from "../utils/request";
export default {
  data() {
    return {
      active: 0,
      goodsclassifi: [], //商品分类属性列表
      secondeclassifi: [] //二级分类
    };
  },
  methods: {
    GoodsClassifi() {
      GoodsClassification().then(data => {
        if (data.code === 200) {
          this.goodsclassifi = data.list;
          this.changeindex(0);
        }
      });
    },
    // 树形列表改变时
    changeindex(index) {
      this.secondeclassifi = this.goodsclassifi[index].children;
    }
  },
  mounted() {
    this.GoodsClassifi();
  }
};
</script>

<style scoped>
.classifi-right {
  position: absolute;
  top: 45px;
  right: 0;
  width: calc(100% - 80px);
}
</style>