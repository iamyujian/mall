import Toast from './Toast.vue';

const obj = {}
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstrctor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstrctor()

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应得就是 div
  document.body.appendChild(toast.$el)

  // 5.添加到原型上
  Vue.prototype.$toast = toast
}
export default obj
