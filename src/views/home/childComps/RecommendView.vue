<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" @click="recommendClick(item)">
      <a>
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: { recommends: Array, default: [] },
  methods: {
    recommendClick(item) {
      this.$toast.show(item.title);
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>