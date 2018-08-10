import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import plugins from './plugins'

export default new Vuex.store({
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
      },
      actions,
      mutations,
      plugins
})