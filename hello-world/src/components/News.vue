<template>
    <div>
    <h1>欢迎您来到News页面！</h1>
    
    <router-link :to="{name:'NewSub',params:{newsId:111}}">News</router-link>
    <!-- <router-link :to="{name:'NewSub',query:{newsId:222}}">News</router-link> -->
    <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>
