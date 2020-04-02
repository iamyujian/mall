<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text" @click="serviceClick">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text" @click="shopClick">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text" @click="collectClick">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy" @click="buyClick">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    serviceClick() {
      this.$toast.show("人工忙！");
    },
    shopClick() {
      this.$toast.show("未营业！");
    },
    collectClick() {
      this.$toast.show("收藏还没做！");
    },
    cartClick() {
      this.$emit("addToCart");
    },
    buyClick() {
      this.$toast.show("已卖完！");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 12px;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url(~@/assets/img/detail/detail_bottom.png);
  background-size: 22px 150px;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 13px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>