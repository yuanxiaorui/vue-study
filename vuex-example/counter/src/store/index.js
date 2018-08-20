import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 0,
     /**
     * todos start
     */
    todos: []
}
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    /**
     * todos start
     */
    addTodo(state,todo) {
        state.todos.push(todo)
    },
    removeTodo(state,todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTodo(state,{todo, text=todo.text,done=todo.done}) {
        todo.text = text
        todo.done = done
    }
}

const getters = {
    evenOrOdd: state=>state.count % 2 === 0 ?'even':'odd'
}

const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd({commit, state}) {
        if((state.count+1)%2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({commit}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    },
     /**
     * todos start
     */
    addTodo({commit}, text) {
        commit('addTodo', {
            text,
            done: false
        })
    },
    removeTodo({commit}, todo) {
        commit('removeTodo', todo)
    },
    toggleTodo({commit}, todo) {
        commit('editTodo', {todo, done:!todo.done})
    },
    clearCompleted({state,commit}) {
        state.todos.filter(todo => todo.done).forEach(todo => {
            commit('removeTodo', todo)
        });
    },
    toggleAll({state, commit}, done) {
        state.todos.forEach((todo) => {
            commit('editTodo', {todo, done})
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})