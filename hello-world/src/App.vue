<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tabs_nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/user">User</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import './assets/style/reset';
@import './assets/style/mixin';
.router-link-active{color:red;background:#ff0}
.hello{padding:20px;}
.tabs{
  &_nav{ 

    a{
      margin-right:10px;display:inline-block;border:1px solid #e1e2e6;
      @include rounded-corners(6px)
    }
  }
  &_content{padding:15px;}
}
</style>
