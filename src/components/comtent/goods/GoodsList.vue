<template>
  <div class="goods-list">
    <GoodListItem v-for="item in goods" :good-list-item="item" />
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodsList",
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>