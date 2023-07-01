<template>
  <div class="app_container">
    <h1>App 根组件</h1>
      <!-- 当安装和配置了 vue-router 后， 就可以使用 router-link 来代替普通的a链接了 -->
      <!-- <a href="#home">首页</a> -->
      <router-link to="/home">首页</router-link>
      <!-- 注意： 在Hash地址中， /后面的参数项，叫做路径参数 -->
      <!-- 在路由参数对象中，需要使用this.$route.params来访问路径参数 -->

      <!-- 注意2: 在hash地址中，？后面的参数项，叫做查询参数 -->
      <!-- 在路由“参数对象”中，需要使用 this.$route.query 来访问查询参数 -->

      <!-- 注意3： 在this.$route中，path只是路径部分，fullpath是完整的地址 -->
      <!-- 例如： -->
      <!-- /movie/2?name=zs&age=20 是fullpath的值 -->
      <!-- /movie/2 是path 的值 -->
      <router-link to="/movie/1">雷神</router-link>
      <router-link to="/movie/2?name=zs age=20">落基</router-link>
      <router-link to="/movie/3">你好</router-link>
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
