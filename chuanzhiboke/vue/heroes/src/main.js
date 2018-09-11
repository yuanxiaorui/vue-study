import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式
// 导入bootstrap
import "bootstrap/dist/css/bootstrap.css"
// 导入index.css
import "./assets/css/index.css"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
