import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index';
import VueLazyLoad from 'vue-lazyload';
import FastClick from 'fastclick';

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 使用图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/common/zhanwei.jpg')
})
// 300秒延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
