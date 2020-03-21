<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!-- <a :href="item.link"> -->
      <a @click="defaultClick">
        <img :src="item.image" alt @load="swipperImageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swipperImageLoad() {
      // 为了不多次调用，这里只发送一次
      if (!this.isLoad) {
        this.$emit("swipperImageLoad");
        this.isLoad = true;
      }
    },
    defaultClick() {
      this.$toast.show();
    }
  }
};
</script>

<style>
</style>