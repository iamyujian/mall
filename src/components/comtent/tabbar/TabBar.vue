<template>
  <div class="tabbar" v-show="isShowTab">
    <tab-bar-item path="/home">
      <img slot="tab-bar-active" src="@/assets/img/tabbar/home_active.svg" />
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/home.svg" />
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab-bar-active" src="@/assets/img/tabbar/category_active.svg" />
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/category.svg" />
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="tab-bar-active" src="@/assets/img/tabbar/cart_active.svg" />
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/cart.svg" />
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="tab-bar-active" src="@/assets/img/tabbar/profile_active.svg" />
      <img slot="tab-bar-icon" src="@/assets/img/tabbar/profile.svg" />
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  },
  computed: {
    isShowTab() {
      return this.$store.state.isShowTab
    }
  }
};
</script>

<style>
.tabbar {
  width: 100%;
  height: 49px;
  /* background-color: pink; */
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  z-index: 9;
}
</style>
