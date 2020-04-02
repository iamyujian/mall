<template>
  <div class="bottom-bar">
    <div class="bar-check">
      <check-button class="bar-check-button" @click.native="checkClick" :is-check="allSelect" />
      <span>全选</span>
      <div class="totalPrice">
        合计：
        <span>￥{{totalPrice}}</span>
      </div>
    </div>
    <div class="calculate" @click="buyClick">去付款({{toBuy}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/comtent/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  data() {
    return {
      cartList: this.$store.state.cartList
    };
  },
  components: {
    CheckButton
  },
  computed: {
    allSelect() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.find(item => item.isCheck == false);
    },
    totalPrice() {
      return this.cartList
        .filter(item => item.isCheck)
        .reduce((preValue, item) => {
          return preValue + item.count * parseInt(item.realPrice);
        }, 0)
        .toFixed(2);
    },
    toBuy() {
      return this.cartList.filter(item => item.isCheck).length;
    }
  },
  methods: {
    checkClick() {
      if (this.allSelect) {
        this.cartList.forEach(item => (item.isCheck = false));
      } else {
        this.cartList.forEach(item => (item.isCheck = true));
      }
    },
    buyClick() {
      this.$toast.show();
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  font-size: 14px;
}
.bar-check {
  display: flex;
  align-items: center;
}
.bar-check-button {
  width: 20px;
  height: 20px;
  margin: 8px 5px;
  line-height: 20px;
}
.totalPrice {
  margin-left: 20px;
}
.totalPrice span {
  color: #ff5777;
  font-size: 15px;
}
.calculate {
  width: 80px;
  position: absolute;
  right: 0;
  bottom: 0;
  line-height: 40px;
  background-color: red;
  color: #fff;
  padding: 0 4px;
  text-align: center;
}
</style>