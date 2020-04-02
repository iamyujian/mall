<template>
  <div class="cart-list">
    <scroll class="content" ref="CartScroll">
      <cart-list-item v-for="(item,index) in cartList" :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>