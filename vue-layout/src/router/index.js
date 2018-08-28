import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'no-sidebar'},
      component: require('@/pages/Home.vue').default
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('@/pages/Photos.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/pages/About.vue')
    },
    {
      path: '/story/:id',
      name: 'post',
      component: () => import('@/pages/Post.vue')
    },
    {
      path: '/*',
      name: '404',
      component: require('@/pages/404.vue').default
    }
  ]
})
