<template>
  <div id="app">
    <h1>示例1：Todo</h1>
    <todo></todo>



    <br><br> 
    <h1>示例2：counter</h1>
    <Counter />

    
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Counter,
    Todo
  }
}
</script>

<style>
#app {
  
}
</style>
