import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import HeroesList from '../views/heroes/List.vue'
import EquipsList from '../views/equips/List.vue'
import WeaponsList from '../views/weapons/List.vue'
var router = new VueRouter({
    linkExactActiveClass:'active',
    routes:[
        {path:'/',redirect:'/heroes'},
        {name:'heroes',path: '/heroes',component:HeroesList},
        {name:'equips',path: '/equips', component: EquipsList },
        {name:'weapons',path: '/weapons', component: WeaponsList }
    ]
})
export default router