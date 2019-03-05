import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import Discounts from '@/components/discounts/discounts';
import Find from '@/components/find/find';
import Equip from '@/components/equip/equip';
import More from '@/components/more/more';
import ErrorCom from '@/components/error';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
//    component:Home
			component:()=>import("../components/home/home")
    },
    {
      path: '/discounts',
      name: 'discounts',
//    component:Discounts
      component:(resolve)=>require(["../components/discounts/discounts.vue"],resolve),      
    },
  
    {
      path: '/find',
      name: 'find',
//    component:Find
      component:()=>import("../components/find/find")
    },
    {
      path: '/equip',
      name: 'equip',
//    component:Equip
      component:()=>import("../components/equip/equip")
    },
    {
      path: '/more',
      name: 'more',
//    component:More
      component:()=>import("../components/more/more")
    },
    {
      path:"**",
      component:ErrorCom
    }
  ]
})
