<template>
  <div class="feature">
    <!-- <a href="http://act.mogujie.com/zzlx67"> -->
    <a @click="defaultClick">
      <img src="~assets/img/home/recommend_bg.jpg" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  methods: {
    defaultClick() {
      this.$toast.show();
    }
  }
};
</script>

<style>
.feature img {
  width: 100%;
}
</style>