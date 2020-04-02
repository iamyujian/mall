<template>
  <div class="better-scroll" ref="betterScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { scroll: null };
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.betterScroll, {
      // 允许按钮点击
      click: true,
      // 根据数值判断是否监听
      probeType: this.probeType,
      // 上拉事件
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("scrollLoadMore");
    });
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  }
};
</script>

<style>
</style>