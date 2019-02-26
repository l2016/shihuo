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
      component:Home
    },
    {
      path: '/discounts',
      name: 'discounts',
      component:Discounts
    },
    {
      path: '/find',
      name: 'find',
      component:Find
    },
    {
      path: '/equip',
      name: 'equip',
      component:Equip
    },
    {
      path: '/more',
      name: 'more',
      component:More
    },
    {
      path:"**",
      component:ErrorCom
    }
  ]
})
