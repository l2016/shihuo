export default {
	handleHeaders(state, params) {
		state.headerList = params;
	},
	handleHeaderBanner(state, params) {
		state.hwaderBannerImg = params;
	},
	handleSeckill(state, params) {
		state.seckills = params;
	},
	handleActivity(state, params) {
		state.activity = params;
	},

	handleGoodsList(state, params) {
		let datas = params[0].data
		state.tabNav = datas;
		state.tabList = [...state.tabList, ...params];
		state.page++;
	},
	handleBasketballList(state, params) {
		state.basketballList = [...state.basketballList, ...params];
		state.page++;
	},
	handleRunList(state, params) {
		state.runList = [...state.runList, ...params];
		state.page++;
	},
	handleFitnessList(state, params) {
		state.fitnessList = [...state.fitnessList, ...params];
		state.page++;
	},
	handleTrendList(state, params) {
		state.trendList = [...state.tabList, ...params];
		state.page++;
	}
}