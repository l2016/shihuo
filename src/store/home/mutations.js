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
    	console.log(params)
    }
}