import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueLazyLoad from 'vue-lazyload';
import FastClick from 'fastclick';
import Toast from 'components/common/toast'
//import store from './store'
Vue.use(Toast)
Vue.use(vueLazyLoad,{
  //占位符图片
  loading:require('./assets/img/common/placeholder.png')
})
//解决移动端的300ms的延迟
FastClick.attach(document.body);
//
Vue.config.productionTip = false
//定义一个事件总线
Vue.prototype.$bus=new Vue();

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
