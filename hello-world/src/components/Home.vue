<template>
  <div class="home">
    <h1>欢迎您来到home页面！</h1>
    <p>当前路由的name是:{{this.$route.name}}</p>

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
