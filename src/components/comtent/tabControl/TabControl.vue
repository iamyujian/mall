<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      class="tab-control-item"
      :class="{active: index === currentActive}"
      @click="tabControlClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: Array,
    default: []
  },
  data() {
    return {
      currentActive: 0
    };
  },
  methods: {
    tabControlClick(index) {
      this.currentActive = index;
      this.$emit("tabControlClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: #ff5777;
}
.active span {
  border-bottom: 3px solid #ff8198;
}
</style>