<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.id">
      <a @click="swiperClick">
        <img :src="item.image" @load="swiperImageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: function() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperClick() {
      this.$toast.show();
    },
    swiperImageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
</style>