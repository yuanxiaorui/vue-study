#如何在script方式引入vue的情况下开启vue-devtools
 vue-devtools-》管理扩展程序-》允许访问文件网址

#生命周期
  created： 在created的时候数据已经和data属性进行绑定，此时还是没有el选项

#语法
vue init webpack my-project
 {{}}文本插值法
 v-bind指令  简写: eg: :href="url"
 v-if
 v-for
 v-on 简写@ v-on:clicke="" @click=""
 v-html
 v-once 能执行一次性地插值，当数据改变时，插值处的内容不会更新
 #组件
Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{item.text}}</li>'
        })
 #补充
 split字符串转换为字符串数组
 join字符串数组连接成字符串



 before we dive into what vuex solves,we need to set common grounds.
imagine that we're building a booking system for a movie theater.
if we are following best practices,by having small components with single responsibilities,it's very likely to have something similar to this diagram.
when a user buys a movie ticket,we will emit a BuyTicket event,to the parent MovieRoom component,which again will emit an event to the parent Movie component.
The Movie component now knows which movie,room and seat the user wants,and decreases the amount of available tickets.
In the same time it might emit an event to the App.vue component,The App component then adds the ticket to the cart, also using props, 
and then the ShoppingCart component,passes the item,which is the actual ticket,to the ShoppingCartItem,
This structure is fine for a small or medium application,but when an application grows,emitting and listening to events among dozens of components,might become tedious and overwhelming.
This is where Vuex comes to our rescue.
Vuex is a state management library for Vue application
It serves as a centralized data store for all components in an application
In addition,it enforces rules to ensure ,that we interact with the state in a predictable fashion.This way we can rely on our components telling Vuex to update the state,instead of changing the data directly.
If you for instance add a ticket to the cart,the cart total will be calculated,and at the same time,the available tickets will be reduced.If you went in directly and added the ticket to the ShoppingCart array,you might forget to remove it from the available tickets,and thus get a bug.Another huge benefit of using a centralized storage library like Vuex,it that it's debuggable.

在我们深入了解vuex解决的问题之前，我们需要设定共同点.
想象一下，我们正在为电影剧院建立一个预订系统
如果我们遵循最佳实践，通过使用具有单一职责的小组件，很可能会有类似于此图的内容
当用户购买电影票时，我们将向父MovieRoom组件发出BuyTicket事件，该组件再次向父电影组件发出事件。
电影组件现在知道用户想要的电影，房间和座位，以及减少可用票证的数量。
同时它可能向App.vue组件发出一个事件，然后App组件将票证添加到购物车，也使用props，
然后ShoppingCart组件传递项目，这是实际票证，到ShoppingCartItem，
这种结构适用于小型或中型应用程序，但是当应用程序增长，发出和收听数十个组件之间的事件时，可能会变得乏味和压倒性。
Vuex成了我们的救星
Vuex是Vue应用程序的状态管理库，它作为应用程序中所有组件的集中数据存储
此外，它还强制执行规则以确保我们以可预测的方式与状态交互。这样我们就可以依赖我们的组件告诉Vuex更新状态，而不是直接更改数据。
例如，如果您向购物车添加票证，将计算购物车总数，同时，可用票证将减少。如果您去了在直接并将票证添加到ShoppingCart数组中，您可能忘记将其从可用票证中删除，从而产生错误。使用像Vuex这样的集中存储库的另一个巨大好处是它可以调试。
