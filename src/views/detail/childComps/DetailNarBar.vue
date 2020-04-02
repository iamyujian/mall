<template>
  <div>
    <nar-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" />
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in title"
          class="title-item"
          :class="{active: currentActive == index}"
          @click="titleClick(index)"
        >
          <span>{{item}}</span>
        </div>
      </div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "@/components/common/narbar/NarBar";
export default {
  name: "DetailNarBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentActive: 0
    };
  },
  components: {
    NarBar
  },
  methods: {
    titleClick(index) {
      this.currentActive = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$store.commit("isShowTab", true);
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back {
  margin-top: 7px;
}
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777;
}
</style>