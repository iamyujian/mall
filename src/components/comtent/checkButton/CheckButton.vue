<template>
  <div class="check-button" :class="{check: isCheck}">
    <img src="@/assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check {
  background-color: red;
  border-color: red;
}
</style>