<template>
    <div>product</div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('products/getAllProducts')
    }
}
</script>

