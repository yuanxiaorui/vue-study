#如何在script方式引入vue的情况下开启vue-devtools
 vue-devtools-》管理扩展程序-》允许访问文件网址
#语法
 {{}}文本插值法
 v-bind指令  简写:
 v-if
 v-for
 v-on
 #组件
Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{item.text}}</li>'
        })
 #补充
 split字符串转换为字符串数组
 join字符串数组连接成字符串