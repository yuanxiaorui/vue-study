#如何在script方式引入vue的情况下开启vue-devtools
 vue-devtools-》管理扩展程序-》允许访问文件网址

#生命周期
  created： 在created的时候数据已经和data属性进行绑定，此时还是没有el选项

#语法
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