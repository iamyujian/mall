<template>
  <div id="detail">
    <detail-nar-bar class="detail-nar-bar" @titleClick="titleClick" ref="narBar" />
    <scroll class="scroll-content" ref="scrollContent" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :base-info="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-goods-info="detailInfo"
        @detailGoodsInfoImgLoad="detailGoodsInfoImgLoad"
      />
      <detail-param-info :param-info="paramsInfo" ref="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo" />
      <div class="recommend">相关推荐</div>
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/comtent/goods/GoodsList";
import BackTop from "@/components/comtent/backTop/BackTop";
import DetailNarBar from "./childComps/DetailNarBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import { debounce } from "@/common/Utils";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "@/network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      topNarScrollTo: [],
      isShowBackTop: false
    };
  },
  components: {
    Scroll,
    DetailNarBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar
  },
  created() {
    if (this.$route.path.indexOf("/detail") === 0) {
      this.$store.commit("isShowTab", false);
    }

    // 拿到动态传入的ID
    this.iid = this.$route.params.iid;
    this._getDetail();
    this._getRecommend();
  },
  mounted() {
    const refresh = debounce(this.$refs.scrollContent.refresh, 200);
    this.$bus.$on("detailItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /**
     * 网络请求相关
     */
    _getDetail() {
      getDetail(this.iid).then(res => {
        const data = res.result;

        // 轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 店铺信息
        this.shop = new Shop(data.shopInfo);
        // 获取商品详情信息
        this.detailInfo = data.detailInfo;
        // 获取参数信息
        this.paramsInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });
    },
    /**
     * 事件相关
     */
    detailGoodsInfoImgLoad() {
      this.$refs.scrollContent.refresh();
      // 获取移动距离所需要的对应元素宽度
      this.topNarScrollTo.push(0);
      this.topNarScrollTo.push(this.$refs.paramInfo.$el.offsetTop);
      this.topNarScrollTo.push(this.$refs.commentInfo.$el.offsetTop);
      this.topNarScrollTo.push(this.$refs.recommends.$el.offsetTop - 38);
    },
    titleClick(index) {
      this.$refs.scrollContent.scrollTo(0, -this.topNarScrollTo[index]);
    },
    //滚动距离
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;

      if (-position.y < this.topNarScrollTo[1]) {
        this.$refs.narBar.currentActive = 0;
      } else if (
        -position.y >= this.topNarScrollTo[1] &&
        -position.y < this.topNarScrollTo[2]
      ) {
        this.$refs.narBar.currentActive = 1;
      } else if (
        -position.y >= this.topNarScrollTo[2] &&
        -position.y < this.topNarScrollTo[3]
      ) {
        this.$refs.narBar.currentActive = 2;
      } else if (-position.y >= this.topNarScrollTo[3]) {
        this.$refs.narBar.currentActive = 3;
      }
    },
    // 返回顶部
    backClick() {
      this.$refs.scrollContent.scrollTo(0, 0);
    },
    // 获取添加进购物车内的商品信息
    addToCart() {
      const cartGoods = {};
      cartGoods.image = this.topImages[0];
      cartGoods.title = this.goods.title;
      cartGoods.desc = this.goods.desc;
      cartGoods.price = this.goods.newPrice;
      cartGoods.iid = this.iid;
      cartGoods.realPrice = this.goods.realPrice;
      // 将商品添加进购物车里;
      if (cartGoods.image) {
        this.$store.dispatch("addToCart", cartGoods).then(res => {
          this.$toast.show(res);
        });
      } else {
        this.$toast.show("请重新加载数据！");
      }
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
}
.detail-nar-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommend {
  text-align: center;
  line-height: 40px;
  font-size: 15px;
}
</style>