<template>
<div>
    <div>User：{{ $route.params.id }}</div>
    <div class="user">
        <router-link to="/user/zhangsan/profile">/user/foo/profile</router-link>
        <router-link to="/user/zhangsan/posts">/user/foo/posts</router-link>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
            console.log('to:',to)
            console.log('from:',from)
        }
    },
    beforeRouteUpdate (to, from, next) {
        // don't forget to call next()
        console.log('to2:',to)
        console.log('from2:',from)
        next()
    }
}
</script>
<style lang="scss" scoped>
.user{
    a{margin-right:10px;}
}
</style>

