<template>
  <scroll class="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        :class="{active: currentIndex === index}"
        v-for="(item, index) in categories"
        :key="index"
        @click="menuClick(index)"
      >{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "TabMenu",
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index;
      this.$emit('menuClick',index)
    }
  }
};
</script>

<style scoped>
.tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  font-weight: 700;
  color: #ff5777;
  background-color: #fff;
  border-left: 3px solid #ff5777;
}
</style>