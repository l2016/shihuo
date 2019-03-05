import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home';
import List from "@/components/home/list/list"
import Discounts from '@/components/discounts/discounts';
import Find from '@/components/find/find';
import Equip from '@/components/equip/equip';
import More from '@/components/more/more';
import Seek from '@/components/home/seek';
import Login from "@/components/home/login/login"
import Register from "@/components/home/register/register"
import ErrorCom from '@/components/error';

Vue.use(Router)

const router = new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			meta: {
				flag: true,
				title: "首页"
			},
			component: () =>
				import("../components/home/home")
		},
		{
			path: "/list",
			name: "list",
			meta: {
				flag: false,
				title: "列表"
			},
			component: () =>
				import("../components/home/list/list")

		},
		{
			path: '/discounts',
			name: 'discounts',
			meta: {
				flag: true,
				title: "优惠"
			},
			component: (resolve) => require(["../components/discounts/discounts.vue"], resolve)
		},
		{
			path: '/find',
			name: 'find',
			meta: {
				flag: true,
				title: "发现"
			},
			component: () =>
				import("../components/find/find")
		},
		{
			path: '/equip',
			name: 'equip',
			meta: {
				flag: true,
				title: "装备"
			},
			component: () =>
				import("../components/equip/equip")
		},
		{
			path: '/more',
			name: 'more',
			meta: {
				flag: true,
				title: "更多"
			},
			component: () =>
				import("../components/more/more")
		},
		{
			path: '/seek',
			name: 'seek',
			meta: {
				flag: false,
				title: "模糊查询"
			},
			component: () =>
				import("../components/home/seek")
		},
		{
			path: "/login",
			name: "login",
			meta: {
				flag: false,
				title: "登陆"
			},
			component: () =>
				import("../components/home/login/login")
		},
		{
			path: "/register",
			name: "register",
			meta: {
				flag: false,
				title: "注册"
			},
			component: () =>
				import("../components/home/register/register")
		},
		{
			path: "**",
			component: ErrorCom
		}
	]
})

router.beforeEach((to, from, next) => {
	if(to.meta.title){
		document.title = to.meta.title
	}
	var routers = ["home", "find", "equip", "more", "discounts","list"];
	if(routers.indexOf(to.name) != -1) {
		let flag = to.meta.flag;
		if(flag) {
			next();
		} else {
			next("/login")
		}

	} else {
		next();
	}
})

export default router