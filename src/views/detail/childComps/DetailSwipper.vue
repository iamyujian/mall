<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" class="detail-swiper-item">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwipper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.detail-swiper {
  height: 300px;
}
.detail-swiper-item img {
  /* height: 300px; */
}
</style>