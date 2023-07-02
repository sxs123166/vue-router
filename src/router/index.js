// src/router/index.js 就是当前项目的路由模块

// 1. 导入 Vue 和 VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '../components/Home.vue'
import Movie from '../components/Movie.vue'
import About from '../components/About.vue'
import Tab1 from '../components/tabs/Tab1.vue'
import Tab2 from '../components/tabs/Tab2.vue'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'

// 2. 调用Vue.use()函数， 把VueRouter 安装为Vue的插件
// Vue.use()函数的作用，就是用来安装插件的
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组， 作用： 定义 “hash 地址” 与 “组件” 之间的关系
  routes: [
    // 重定向的路由规则
    { path: '/', redirect: '/home' },
    // 路由规则
    { path: '/home', component: Home },
    // 需求：在Movie组件中，希望根据id的值，展示对应电影的详情信息
    // 可以为路由规则开启props传参，从而方便的拿到动态参数的值
    { path: '/movie/:mid', component: Movie, props: true },
    {
      path: '/about',
      component: About,
      // redirect: '/about/tab1',
      children: [
      // 子路由规则
      // 默认子路由：如果children数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做默认子路由
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/login', component: Login },
    { path: '/Main', component: Main }
  ]
})

// 为router实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的function回调函数
router.beforeEach(function (to, from, next) {
  // to表示将要访问的路由信息对象
  console.log(to)
  // from表示将要离开的信息对象

  // next函数表示放行的意思
  // next()
  // 分析：
  // 1.要拿到用户将要访问的hash地址
  // 2. 判断hash地址是否等于/main
  // 2.1 如果等于main，证明需要登录成功之后，才能访问成功
  // 2.2 如果不等于/Main, 则不需要登录， 直接放行 next()
  // 3. 如果访问的地址是/main。则需要读取localStorage 重的token值
  // 3.1 如果有token则放行
  // 3.2 如果没有token，则强制跳转到/Login 登录页
  if (to.path === '/main') {
  // 要访问后台主页，需要判断是否有token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // 没有登录强制跳转到登录页
      next('/login')
    }
  } else {
    next()
  }
})

// 4. 向外共享路由的实例对象
export default router
