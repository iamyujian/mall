<template>
  <div id="category">
    <nar-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nar-bar>
    <div class="content">
      <tab-menu :categories="categories" @menuClick="menuClick" />

      <Scroll class="scroll-content" ref="scrollContent">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
            @categoryImgLoad="categoryImgLoad"
          />
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import NarBar from "@/components/common/narbar/NarBar";
import TabMenu from "./childComps/TabMenu";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "@/network/category";
import Scroll from "@/components/common/scroll/Scroll";
import TabContentCategory from "./childComps/TabContentCategory";
import { debounce } from "@/common/Utils";
export default {
  name: "Category",
  components: {
    NarBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    }
  },
  methods: {
    /**
     * 网络请求相关
     */
    _getCategory() {
      getCategory().then(res => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        // this._getCategoryDetail(POP);
        // this._getCategoryDetail(SELL);
        // this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件请求相关
     */
    menuClick(index) {
      this._getSubcategories(index);
    },
    categoryImgLoad() {
      const refresh = debounce(this.$refs.scrollContent.refresh, 200);
      refresh();
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #ff8198;
  color: #fff;
}
.content {
  position: absolute;
  bottom: 49px;
  top: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
}
.scroll-content {
  flex: 1;
}
</style>