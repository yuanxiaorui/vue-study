<template>
    <div>
        <nav-bar></nav-bar>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <slot />
                    </div>
                    <div class="col-4">
                        <side-bar></side-bar>
                    </div>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import FooterBar from '@/components/FooterBar'

export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  }
}
</script>
