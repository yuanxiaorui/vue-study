<template>
  <div class="about">
    <h1>欢迎您来到about页面！</h1>

    <br />
    <p>vue-router如何参数传递，有三种方式：</p>
    1、通过name获取参数<br />
        当前路由的name是:{{this.$route.name}}
    <br />
    2、通过router-link中的to传参<br />
      获取参数是：{{$route.params.username}}-{{$route.params.age}}
    <br />
    3、利用url传递参数，见User.vue  

    <br />
    <button @click="goBack">点击返回上一步</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
