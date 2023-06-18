import Vue from 'vue'
// import App from './App.vue'
import App2 from './App2.vue'
// 导入路由模块，目的：拿到路由的实例对象
// 在进行模块化倒入的时候，如果给定的是文件夹， 则默认导入这个文件夹下，名字叫做 index.js的文件
import router from './router/index.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App2),
  // 在Vue 项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  // router: 路由的实例对象
  // router: router 可简写为
  router
}).$mount('#app')
