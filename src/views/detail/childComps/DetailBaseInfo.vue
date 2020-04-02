<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base-info">
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span class="discount">{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in baseInfo.services.length-1" :key="index">
        <img :src="baseInfo.services[index-1].icon" />
        <span>{{baseInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: #ff5777;
}
.o-price {
  font-size: 13px;
  margin: 0 5px;
  /* 横线 */
  text-decoration: line-through;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: #ff5777;
  border-radius: 8px;
  position: relative;
  top: -5px;
}
.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>