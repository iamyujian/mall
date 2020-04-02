<template>
  <div class="nar-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NarBar"
};
</script>

<style scoped>
.nar-bar {
  height: 44px;
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  line-height: 44px;
}
.left,
.right {
  width: 60px;
  height: 100%;
}
.center {
  flex: 1;
}
</style>