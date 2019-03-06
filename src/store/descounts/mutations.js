
export default {
    handleGoods(state,params){
        state.goodsList = params;
        //console.log(params)
    },
    handleBrand(state,params){
        state.handleBrand = params
    },
    handleNavs(state,params){
        state.handleNavs = params
    },
    handleDisData(state,params){
        state.handleDisData = [...state.handleDisData,...params];
        state.page++;       
    },
    handFootWear(state,params){
        state.handFootWear = params;
        
    },
    handCostume(state,params){
        state.handCostume = params;  
    },
    handCode(state,params){
        state.handCode = params;  
    },
    handIterest(state,params){
        state.handIterest = params;   
    },
}