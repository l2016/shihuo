export default {
    handleHeaders(state,params){
    	state.headerList = params;
    },
    handleHeaderBanner(state,params){
    	state.hwaderBannerImg = params;
    },
    handleSeckill(state,params){
    	state.seckills = params;
    },
    handleActivity(state,params){
    	state.activity = params;
    },
    
    handleGoodsList(state,params){
    	let datas = params[0].data
    	state.tabNav = datas;
    	state.tabList = params;
    	console.log(state.tabList)
    }
}