<template>
<div>
    <h1>欢迎您来到User页面！</h1>
    <!-- 一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params -->
    <div>User：{{ this.$route.params.id }}</div>
    
    <div class="user">
        <router-link to="/user/zhangsan/profile">/user/foo/profile</router-link>
        <router-link to="/user/zhangsan/posts">/user/foo/posts</router-link>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    //当使用路由参数时，两个路由都复用同个组件，比起销毁再创建，复用则显得更加高效。也意味着组件的生命周期钩子不会再被调用。
    //想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象,或者使用 2.2 中引入的 beforeRouteUpdate 守卫
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

