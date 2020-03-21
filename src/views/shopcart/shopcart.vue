<template>
  <div id="shop-cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车{{shopLength}}</div>
    </nav-bar>

    <cart-list />
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "ShopCart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    shopLength() {
      let length = 0;
      if (this.$store.state.cartList.length !== 0) {
        length = "(" + this.$store.state.cartList.length + ")";
        return length;
      } else {
        length = "";
        return length;
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.bottom-bar {
  position: absolute;
  bottom: 49px;
}
</style>