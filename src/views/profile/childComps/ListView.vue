<template>
  <div id="list">
    <div class="item" @click="messageClick">
      <span class="icon">
        <img src="@/assets/img/profile/message.svg" />
      </span>
      <div class="info">我的消息</div>
    </div>

    <div class="item" @click="mallClick">
      <span class="icon">
        <img src="@/assets/img/profile/mall.svg" />
      </span>
      <div class="info">积分商城</div>
    </div>

    <div class="item" @click="vipClick">
      <span class="icon">
        <img src="@/assets/img/profile/VIP.svg" />
      </span>
      <div class="info">会员卡</div>
    </div>

    <div class="item" @click="carClick">
      <span class="icon">
        <img src="@/assets/img/profile/car.svg" />
      </span>
      <div class="info">我的购物车</div>
    </div>

    <div class="item" @click="downClick">
      <span class="icon">
        <img src="@/assets/img/profile/down.svg" />
      </span>
      <div class="info">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  methods: {
    messageClick() {
      this.$toast.show("您没有消息！");
    },
    mallClick() {
      this.$toast.show();
    },
    vipClick() {
      this.$toast.show();
    },
    carClick() {
      this.$router.push("/cart");
    },
    downClick() {
      this.$toast.show();
    }
  }
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.item .icon {
  margin-top: 10px;
  position: absolute;
  left: 14px;
  top: -5px;
}
.item .icon img {
  width: 20px;
}

.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
