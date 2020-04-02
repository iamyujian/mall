<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ""
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show(message = "敬请期待！", duration = 1500) {
      this.isShow = true;
      this.message = message;
      if (timer) {
        clearTimeout(timer);
      }
      let timer = setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>