<template>
  <div id="app">
    <div class="tabs_nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="tabs_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
@import './assets/style/reset';
@import './assets/style/mixin';
.tabs{
  &_nav{ 

    a{
      margin-right:10px;display:inline-block;border:1px solid #e1e2e6;
      @include rounded-corners(10px)
    }
    .router-link-active{color:blue;}
  }
  &_content{padding:15px;}
}
</style>
