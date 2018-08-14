<template>
  <div class="about">
    About页面<button @click="goBack">点击返回上一步</button>
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
