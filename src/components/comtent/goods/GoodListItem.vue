<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img v-lazy="showImage" @load="goodListLoad" />
    <div class="goods-info">
      <p>{{goodListItem.title}}</p>
      <span class="price">￥{{goodListItem.price}}</span>
      <span class="collect">{{goodListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodListItem.image || this.goodListItem.show.img;
    }
  },
  methods: {
    goodListLoad() {
      if (this.$route.path.indexOf("/home") === 0) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("/detail") === 0) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodListItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info .price {
  color: #ff5777;
  margin-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~@/assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>