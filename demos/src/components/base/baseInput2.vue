<template>
<div>
    <input class="input2" v-bind="$attrs" v-on="$listeners" />
</div>
</template>
<script>
export default {
  inheritAttrs: false,
  computed: {
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          focus: function (event) {
            vm.$emit('focus', event.target.value)
          }
        }
      )
    }
  }
}
</script>
