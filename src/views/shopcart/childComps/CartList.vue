<template>
  <div class="cart-list">
    <scroll class="content" ref="CartScroll">
      <cart-list-item v-for="(item, index) in CartList" :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    CartList() {
      return this.$store.state.cartList;
    }
  },
  activated() {
    this.$refs.CartScroll.refresh();
  },

  methods: {}
};
</script>

<style scoped>
.cart-list {
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>