<template>
  <div class="hello">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products:</h2>
    <ProductList />
    <hr>
    <h2>Cart:</h2>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
