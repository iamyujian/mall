<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="isActive">
      <slot name="tab-bar-active"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-icon"></slot>
    </div>
    <div :class="{active:activeStyle}">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive;
    }
  },
  methods: {
    tabBarClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  background-color: #f6f6f6;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.active {
  color: #ff5777;
}
</style>