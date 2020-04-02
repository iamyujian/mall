<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "./components/comtent/tabbar/TabBar";

export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
