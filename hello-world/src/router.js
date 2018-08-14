import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from './components/Home'
import About from './components/About'


import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'
import UserEmpty from './components/UserEmpty.vue'


// 2. 定义路由
// 每个路由应该映射一个组件。
export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      //示例2： 动态路径参数 以冒号开头
      {
        path:'/user/:id',component:User,
        children: [
          {
            path:'',
            component: UserEmpty
          },
          {
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'profile',
            component: UserProfile
          },
          {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 会被渲染在 User 的 <router-view> 中
            path: 'posts',
            component: UserPosts
          }
        ]
      }
    ]
  })
  
