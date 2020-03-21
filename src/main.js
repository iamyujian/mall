import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/vuex';
import toast from './components/common/toast/index';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300毫秒的延迟
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/zhanwei.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
