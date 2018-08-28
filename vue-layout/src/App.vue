<template>
  <div id="app">
    <!-- 文章参考地址：https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05 -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'
const defaultlayout = 'default'
export default {
  name: 'app',
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultlayout) + '-layout'
    }
  },
  components: {
    'default-layout': Default,
    'no-sidebar-layout': NoSidebar
  }
}
</script>

<style>
#app {
}
</style>
