<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <slot />
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>
