<template>
  <div class="home_container">
    <h1>Home组件</h1>

    <hr>
    <button @click="gotoLK">通过push跳转到“逻辑”页面</button>
    <button @click="gotoLK2">通过replace跳转到“洛基”页面</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLK () {
      // 通过编程式导航API， 导航跳转到指定的页面
      // 会增加一条历史记录
      this.$router.push('/movie/1')
    },
    gotoLK2 () {
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  padding: 0;
  min-height: 200px;
  background-color: red;
}
h1 {
  margin: 0;
}
</style>
