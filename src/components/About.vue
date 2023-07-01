<template>
  <div class="about_container">
    <h1>About组件</h1>

    <!-- 子级路由链接 -->
    <router-link to="/about">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr/>

    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.about_container {
  padding: 0;
  min-height: 200px;
  background-color: skyblue;
}
h1 {
  margin: 0;
}
</style>
