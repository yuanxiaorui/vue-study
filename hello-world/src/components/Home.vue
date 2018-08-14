<template>
  <div class="home">
    <header>
      <span class="home_left"></span>
      <span class="home_right">欢迎您，Home页面</span>
    </header>
    <content>
          <br><br><br>
          <!-- <p>示例2：动态路由匹配+嵌套路由</p> -->
          <!-- <router-link to="/user/zhangsan">进入用户张三页面</router-link>
          <router-link to="/user/lisi">进入用户李四页面</router-link> -->



          <div class="tabs_content">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
           <!-- <router-view></router-view> -->
          </div>
    </content>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    
  },
  computed: {
  },
  mounted () {
    //console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
