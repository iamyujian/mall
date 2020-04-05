<template>
  <div class="car-item">
    <div class="item-selector">
      <check-button @click.native="checkClick" :is-check="itemInfo.isCheck" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述：{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.realPrice}}</div>
        <!-- <div class="item-count right">x{{itemInfo.count}}</div> -->
        <div class="item-count right">
          <div class="btn btn1" @click="less">-</div>
          <div class="number">{{itemInfo.count}}</div>
          <div class="btn btn2" @click="more">+</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/comtent/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },

  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      showCount : this.itemInfo.count
    }
  },
 
  methods: {
    checkClick() {
      this.itemInfo.isCheck = !this.itemInfo.isCheck;
    },
    less() {
      if (this.itemInfo.count > 1) {
        this.itemInfo.count--
      }
    },
    more() {
      this.itemInfo.count++
    }
  }
};
</script>

<style scoped>
.car-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
.item-count{
margin-top: 25px;
display: flex;

  
}
.btn {
padding:0 10px;
border: 1px solid #ccc;
}
.btn1 {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.btn2 {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.number {
  padding-top: 1px;
  font-size: 14px;
width: 45px;
text-align: center;
border-top: 1px solid #ccc;
border-bottom: 1px solid #ccc;
box-sizing: border-box;
}
</style>