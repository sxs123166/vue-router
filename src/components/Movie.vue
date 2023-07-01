<template>
  <div class="movie_container">
    <!-- this.$route 是路由的参数对象 -->
    <!-- this.$router手游的导航对象 -->
    <h1>Movie组件 -- {{ this.$route.params.mid }} -- {{ mid }}</h1>
    <button @click="showThis">打印this</button>
    <button @click="goBack">回退</button>
    <!-- 在行内使用编程式导航跳转的时候，this必须要省略，否则会报错 -->
    <button @click="this.$router.back()">back回退</button>
    <button @click="this.$router.forward()">forward前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  // 接收 props 数据,一定要
  props: ['mid'],
  methods: {
    showThis () {
      console.log(this)
    },
    goBack () {
      // go(-1)表示后退一层
      // 如果后退的层数超过上限， 则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.movie_container {
  min-height: 200px;
  background-color: orange;
}
h1 {
  margin: 0;
}
</style>
