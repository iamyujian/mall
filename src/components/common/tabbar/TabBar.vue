<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>