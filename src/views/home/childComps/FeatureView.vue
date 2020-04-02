<template>
  <div class="feature" @click="featureClick">
    <a>
      <img src="../../../assets/img/home/recommend_bg.jpg" />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  methods: {
    featureClick() {
      this.$toast.show();
    }
  }
};
</script>

<style scoped>
.feature img {
  width: 100%;
}
</style>