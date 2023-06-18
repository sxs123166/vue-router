<template>
  <div class="app_container">
    <h1>App 根组件</h1>
      <!-- 当安装和配置了 vue-router 后， 就可以使用 router-link 来代替普通的a链接了 -->
      <!-- <a href="#home">首页</a> -->
      <router-link to="/home">首页</router-link>
      <router-link to="/movie">电影</router-link>
      <router-link to="/about">关于</router-link>
    <hr/>

    <!-- 只要在项目中安装和配置了 vue-router,就可以使用 router-view这个组件了 -->
    <!-- 他的作用很单纯： 占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app_container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
}
a {
  padding-right: 10px;
}
</style>
