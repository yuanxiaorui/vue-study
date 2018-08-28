<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <base-input class="hello-base-input" placeholder="Enter your username" label="haha" value="haha2" v-on:focus.native="onFocus"></base-input>
    <base-select placeholder="please select"></base-select>
    <picker class="hello-picker" placeholder="please enter"></picker>
    <buttons class="hello-button" data-date-picker="activated"></buttons>
    <!-- 这里的lovingVue的值将会传入这个名为checked的prop,
         同时当checkobx触发一个change事件并附带一个新的值的时候，这个lovingVue的
         属性将会被更新
     -->
    <checkbox v-model="lovingVue" @click.native="doThis"></checkbox>
  </div>
</template>

<script>
import Checkbox from './checkbox'
import Picker from './picker'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lovingVue: true
    }
  },
  components: {
    Picker,
    Checkbox
  },
  methods: {
    doThis () {
      console.log('doThis')
    },
    onFocus (e) {
      console.log('ttt:', e)
    }
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
