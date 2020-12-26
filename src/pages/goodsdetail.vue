<template>
  <!-- 商品详情页 -->
  <div class="goodsdetail">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow title="商品详情" @click-left="$router.go(-1)" />
    <div class="detailimg">
      <van-image width="100%" height="100%" :src="$imgUrl + goodsOne[0].img" />
    </div>
    <p style="color:red">￥{{ goodsOne[0].price }}</p>
    <p>{{ goodsOne[0].goodsname }}</p>
    <p v-html="goodsOne[0].description"></p>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="isshow" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <van-action-sheet v-model="show" title="添加购物车">
      <div class="content">
        <div class="content-num">
          {{ goodsOne[0].goodsname }}
          <van-stepper
            v-model="goods.num"
            theme="round"
            button-size="22"
            disable-input
          />
        </div>
        <van-button class="addbtn" type="danger" round @click="addcar"
          >确认添加</van-button
        >
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 引入接口数据
import { InsertShopCar } from "../utils/request";
export default {
  data() {
    return {
      show: false,
      goods: {
        uid: "",
        goodsid: "",
        num: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      goodsOne: "goods/goodsOne"
    })
  },
  methods: {
    isshow() {
      this.show = true;
    },
    // 添加购物车
    addcar() {
      // 获取本地存储的信息
      const user = JSON.parse(localStorage.getItem("user"));
      this.goods.uid = user.uid;
      this.goods.goodsid = this.goodsOne[0].id;
      InsertShopCar(this.goods).then(data => {
        if (data.code === 200) {
          this.$toast.success(data.msg + "在购物车等您");
          this.show = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.detailimg {
  width: 100%;
  height: 450px;
  background-color: #eeeeee;
}
.content {
  position: relative;
  padding: 16px 16px 160px;
}
.content-num{
  display: flex;
  justify-content: space-between;
}
.addbtn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>