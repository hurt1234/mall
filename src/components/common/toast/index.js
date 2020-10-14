import Toast from './Toast'
const obj = {}
obj.install = function(Vue) {
  //1.创建组价构造器
  const toastContrustor = Vue.extend(Toast)
  //new 一个组件对象
  const toast  = new toastContrustor();
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast;

}
export default obj