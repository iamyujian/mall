<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @detailTitleClick="detailTitleClick" ref="currentActive" />
    <scroll class="detail-content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <DetailSwipper :top-images="topImages" />
      <DetailBaseInfo :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad" />
      <detail-param-info ref="detailParam" :param-info="paramsInfo" />
      <detail-comment-info ref="detailComment" :comment-info="commentInfo" />
      <div class="recommend">相关推荐</div>
      <goods-list ref="detailRecommends" :goods="recommends" />
    </scroll>
    <detail-botton-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- <toast :message="toastMessage" :show="isShow"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwipper from "./childComps/DetailSwipper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottonBar from "./childComps/DetailBottonBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
// import Toast from "components/common/toast/Toast";

import { debounce } from "common/Utils";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwipper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottonBar,
    Scroll,
    GoodsList,
    BackTop
    // Toast
  },
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
      topNavBarScrollTop: [],
      scrollPosition: 0,
      isShowBackTop: false
      // toastMessage: "",
      // isShow: false
    };
  },
  created() {
    // 保存传入的 id
    this.iid = this.$route.params.iid;
    // 根据 id 将请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 获取店铺信息
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

    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    // 监听 item 中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("detailItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    detailImageLoad() {
      this.$refs.scroll.refresh();
      // 获取移动距离所需要的对应高度
      this.topNavBarScrollTop.push(0);
      this.topNavBarScrollTop.push(this.$refs.detailParam.$el.offsetTop);
      this.topNavBarScrollTop.push(this.$refs.detailComment.$el.offsetTop);
      this.topNavBarScrollTop.push(
        this.$refs.detailRecommends.$el.offsetTop - 38
      );
    },

    detailTitleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topNavBarScrollTop[index], 100);
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.scrollPosition = -position.y;
      if (this.scrollPosition < this.topNavBarScrollTop[1]) {
        this.$refs.currentActive.currentActive = 0;
      } else if (
        this.scrollPosition >= this.topNavBarScrollTop[1] &&
        this.scrollPosition < this.topNavBarScrollTop[2]
      ) {
        this.$refs.currentActive.currentActive = 1;
      } else if (
        this.scrollPosition >= this.topNavBarScrollTop[2] &&
        this.scrollPosition < this.topNavBarScrollTop[3]
      ) {
        this.$refs.currentActive.currentActive = 2;
      } else if (this.scrollPosition >= this.topNavBarScrollTop[3]) {
        this.$refs.currentActive.currentActive = 3;
      }
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    addToCart() {
      // 获取购物车需要展示的信息
      const cartGoods = {};
      cartGoods.image = this.topImages[0];
      cartGoods.title = this.goods.title;
      cartGoods.desc = this.goods.desc;
      cartGoods.price = this.goods.newPrice;
      cartGoods.iid = this.iid;
      cartGoods.realPrice = this.goods.realPrice;

      // 将商品加入购物车里
      this.$store.dispatch("addToCart", cartGoods).then(res => {
        this.$toast.show(res, 1500);
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  /* position: relative; */
  z-index: 11;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
}
.detail-content {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommend {
  margin: 10px 0;
  text-align: center;
  font-size: 15px;
}
</style>