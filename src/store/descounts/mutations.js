
export default {
    handleGoods(state,params){
        state.goodsList = params;
        console.log(params)
    },
    handleBrand(state,params){
        state.handleBrand = params
    },
    handleNavs(state,params){
        state.handleNavs = params
    }

}