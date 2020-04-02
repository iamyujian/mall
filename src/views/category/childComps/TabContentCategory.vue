<template>
  <div class="tabContent" ref="allItem">
    <div class="item" v-for="(item,index) in subcategories.list" :key="index" ref="item">
      <a :href="item.link">
        <img class="item-img" :src="item.image" @load="categoryImgLoad" />
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  components: {
    // GridView
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    categoryImgLoad() {
      this.$emit("categoryImgLoad");
    }
  }
};
</script>

<style scoped>
.tabContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 32%;
  text-align: center;
  font-size: 12px;
  padding: 13px 15px;
}
.item img {
  width: 100%;
}
.item-text {
  margin-top: 15px;
}
</style>