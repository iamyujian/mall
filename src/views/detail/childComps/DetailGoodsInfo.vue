<template>
  <div v-if="Object.keys(detailGoodsInfo).length !== 0" class="detail-goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailGoodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailGoodsInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        :src="item"
        v-for="(item, index) in detailGoodsInfo.detailImage[0].list"
        @load="detailGoodsInfoImgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailGoodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    };
  },
  methods: {
    detailGoodsInfoImgLoad() {
      if (++this.counter === this.imageLength) {
        this.$emit("detailGoodsInfoImgLoad");
      }
    }
  },
  watch: {
    detailGoodsInfo() {
      this.imageLength = this.detailGoodsInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.detail-goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333333;
  bottom: 0;
}
.end::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>