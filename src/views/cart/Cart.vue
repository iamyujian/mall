<template>
  <div id="shop-cart">
    <nar-bar class="cart-nav">
      <div slot="center">购物车({{cartListLen}})</div>
      <div slot="right" class="nav-right" @click="management">管理</div>
    </nar-bar>
    <cart-list />
    <cart-bottom-bar class="bottom-bar" :isManagement="isManagement" />
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
  data() {
    return {
      isManagement:true
    }
  },
  computed: {
    cartListLen() {
      return this.$store.state.cartList.length;
    }
  },
  deactivated() {
    if (!this.isManagement) {
      this.isManagement = true
    }
    
  },
  methods : {
    management(cartListLen) {
      if (this.$store.state.cartList.length) {
        this.isManagement = !this.isManagement
        for (const item of this.$store.state.cartList) {
          item.isCheck = this.isManagement
        }
      }else{
        this.$toast.show('没有商品可以管理')
      }
    }
  },
  watch: {
      cartListLen: {
        handler (newVal) {
          if (!newVal) {
            this.isManagement =true
          }
        }
      }
  }
}
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
.nav-right {
  font-size: 14px;
}
</style>