<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <base-input class="hello-base-input"></base-input>
    <base-select></base-select>
    <picker class="hello-picker" placeholder="please enter"></picker>
    <buttons class="hello-button" data-date-picker="activated"></buttons>
  </div>
</template>

<script>
// import baseInput from './base/baseInput'
import Picker from './picker'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Picker
  //   baseSelect
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
