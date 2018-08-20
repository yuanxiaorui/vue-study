<template>
  <li class="todo" :class="{completed: todo.done,editing: editing}">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)"
        >
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
     <input class="edit" type="text"
     v-show="editing"
     :value="todo.text"
     v-focus="editing"
     @keyup.esc="cancelEdit"
     @keyup.enter="doneEdit"
     @blur="doneEdit"
     />
  </li>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  props: ['todo'],
  data() {
    return {
        editing: false
    }
  },
  methods: {
    ...mapActions([
        'removeTodo',
        'toggleTodo',
        'editTodo'
    ]),
    cancelEdit(e) {
        e.target.value = this.todo.text
        this.editing = false
    },
    doneEdit(e){
        const value = e.target.value.trim()
        const {todo} = this
        if (!value) {
            this.removeTodo(todo)
        } else if (this.editing) {
            this.editTodo({
                todo,
                value
            })
            this.editing = false
        }
    }
  },
  directives: {
    focus(el,{value},{context}) {
        if(value) {
            context.$nextTick(() => {
                el.focus()
            })
        }
    }
  }
}
</script>
