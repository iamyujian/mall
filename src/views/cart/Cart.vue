<template>
  <div id="shop-cart">
    <nar-bar class="cart-nav">
      <div slot="center">购物车({{cartListLen}})</div>
    </nar-bar>
    <cart-list />
    <cart-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import NarBar from "@/components/common/narbar/NarBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
export default {
  name: "Cart",
  components: {
    NarBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartListLen() {
      return this.$store.state.cartList.length;
    }
  }
};
</script>

<style scoped>
.cart-nav {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.bottom-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>