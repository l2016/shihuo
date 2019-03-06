import axios from "axios";
import { goodsList, basketballList, runList, fitnessList, trendList, seoList ,login,register} from "../../apis/home";
export default {
	
	handleHeaders({commit}) {
		axios({
				method: "get",
				url: "http://localhost:3000/headers"
			})
			.then((data) => {
				commit("handleHeaders", data.data)
			})
	},
	handleHeaderBanner({commit}) {
		axios({
				method: "get",
				url: "http://localhost:3000/bannerImgs"
			})
			.then((data) => {
				commit("handleHeaderBanner", data.data)

			})
	},
	handleSeckill({commit}) {
		axios({
				method: "get",
				url: "http://localhost:3000/data"
			})
			.then((data) => {
				commit("handleSeckill", data.data)

			})
	},
	handleActivity({commit}) {
		axios({
				method: "get",
				url: "http://localhost:3000/activity"
			})
			.then((data) => {
				commit("handleActivity", data.data)
			})
	},

	async handleGoodsList({commit}, params) {
		let data = await goodsList(params)
		commit("handleGoodsList", data.data)
	},
	async handleBasketballList({commit}, params) {
		let data = await basketballList(params)
		commit("handleBasketballList", data.data)
	},
	async handleRunList({commit}, params) {
		let data = await runList(params)
		commit("handleRunList", data.data)
	},
	async handleFitnessList({commit}, params) {
		let data = await fitnessList(params)
		commit("handleFitnessList", data.data)
	},
	async handleTrendList({commit}, params) {
		let data = await trendList(params)
		commit("handleTrendList", data.data)
	},
	async handleSeoList({commit}, params) {
		let data = await seoList(params)
		commit("handleSeoList", data.data)
	},
	//登陆注册
	 async handleLogin({commit,state}, params) {
	 	let obj = {
	 		username:params.username,
	 		password:params.password
	 	}
		 let data = await login(obj)
	 	commit("handleLogin", data)
	 },
	async handleRegister({commit,state},params) {
		let obj = {
	 		username:params.username,
	 		password:params.password
	 	}
		 let data = await register(obj)
		 console.log(data)
	 	commit("handleRegister",data)
	},
}