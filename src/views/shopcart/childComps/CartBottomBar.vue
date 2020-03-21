<template>
  <div class="bottom-bar">
    <div class="bar-check">
      <check-button class="bar-check-button" :is-checked="allSelect" @click.native="checkClick" />
      <span>全选</span>
      <div class="totalPrice">合计：￥{{totalPrice}}</div>
    </div>
    <div class="calculate" @click="calculateClick">去付款({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
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
    totalPrice() {
      // return typeof parseInt(this.$store.state.cartList[0].realPrice);

      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + parseInt(item.realPrice) * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    allSelect() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.find(item => item.checked == false);
      // return true
    }
  },
  methods: {
    checkClick() {
      if (this.allSelect) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calculateClick() {
      if (this.checkLength) {
        this.$toast.show();
      } else {
        this.$toast.show("请选择商品！");
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  /* line-height: 40px; */
  position: relative;
  font-size: 14px;
}
.bar-check {
  display: flex;
  align-items: center;
  /* color: #fff; */
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
.calculate {
  width: 80px;
  position: absolute;
  right: 0px;
  line-height: 40px;
  background-color: red;
  color: #fff;
  padding: 0 4px;
  /* margin-left: 50px; */
}
</style>