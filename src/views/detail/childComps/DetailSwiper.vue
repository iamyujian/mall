<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" class="detail-swiper-item">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: {
    topImages: Array,
    default() {
      return [];
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
.detail-swiper-item {
}
</style>