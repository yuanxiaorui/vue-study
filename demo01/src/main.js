import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('custom-component05', {
  data(){
      return { title:'我是jsx模板'}
  },
  render() {
      return <div>
        {this.title}
      </div>
  }
})


new Vue({
  render: h => h(App)
}).$mount('#app')
