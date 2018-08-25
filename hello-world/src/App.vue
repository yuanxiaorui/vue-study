<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link class="tab" to="home">Home</router-link>
      <router-link class="tab" :to="{name:'about',params:{username:'yuanrui',age:'28'}}">About</router-link>

      <!-- 演示路由动态匹配和嵌套 -->
      <router-link class="tab" to="/user/zhangsan">User</router-link>

      <!-- 演示命名视图 -->
      <router-link class="tab" to="/namedview">namedview</router-link>

      <!-- 演示param和query传参的区别：
      params传参时要在路由后面加参数名字，并且传参的时候，参数名要跟路由后面设置的参数名对应 
      使用query方法，就没有这种限制，直接在跳转里面用就可以
      -->
      <router-link class="tab" to="/news">News</router-link>

      <router-view></router-view>
      <router-view class="view tow" name="content"></router-view>
      <router-view class="view three" name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './assets/style/reset';
@import './assets/style/mixin';
.router-link-active{color:red;background:#ff0}
.hello{padding:20px;}
.tab{
  border:1px solid #e1e2e6;padding:5px 10px;
}
</style>
