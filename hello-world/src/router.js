import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)  //vue全局使用Router

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import NewSub from './components/NewSub'


import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'

import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

// 2. 定义路由
// 每个路由应该映射一个组件。
export default new VueRouter({
    mode: 'history',
    routes: [   //配置路由，这里是一个数组
      {
        path: '/',  
        redirect: '/home'
      },
      {
        path: '/home',  //链接路径
        name: 'home', //路由名称
        component: Home  //对应的组件模板
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/news',
        name: 'news',
        component: News,
        children: [
          {
          path: '/detail/:newsId',
          name: 'NewSub',
          component: NewSub,
          }
        ]
      },
      //示例2： 动态路径参数 以冒号开头
      {
        path:'/user/:id',component:User,
        children: [
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
      },
      {
        path:'/namedview',
        components: {
          default: Header,
          content: Content,
          footer: Footer
        }
      }
    ]
  })
  
