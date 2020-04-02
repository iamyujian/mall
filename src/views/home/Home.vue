<template>
  <div id="home">
    <nar-bar class="home-nav">
      <span slot="center">购物街</span>
    </nar-bar>
    <tab-control
      class="tab-control-code"
      :title="['流行','新款','精选']"
      ref="tabControlCode"
      @tabControlClick="tabControlClick"
      v-show="isTabFixed"
    />
    <scroll
      class="scroll-content"
      ref="scrollContent"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scroll"
      @scrollLoadMore="scrollLoadMore"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :title="['流行','新款','精选']" ref="tabControl" @tabControlClick="tabControlClick" />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NarBar from "@/components/common/narbar/NarBar";
import TabControl from "@/components/comtent/tabControl/TabControl";
import GoodsList from "@/components/comtent/goods/GoodsList";
import BackTop from "../../components/comtent/backTop/BackTop";
import { debounce } from "@/common/Utils";
import Scroll from "@/components/common/scroll/Scroll";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  components: {
    NarBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scrollContent.refresh();
    this.$refs.scrollContent.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scrollContent.scroll.y;
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 防抖
    const refresh = debounce(this.$refs.scrollContent.refresh, 200);
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 上拉刷新重复调用
        this.$refs.scrollContent.finishPullUp();
      });
    },
    /**
     * 事件监听相关
     */
    swiperImageLoad() {
      this.$refs.scrollContent.refresh();
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentActive = index;
      this.$refs.tabControlCode.currentActive = index;
    },
    // 滚动距离
    scroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    backTopClick() {
      this.$refs.scrollContent.scrollTo(0, 0);
    },
    scrollLoadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px;
  padding-bottom: 49px; */
  height: 100vh;
}
.home-nav {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control-code {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>