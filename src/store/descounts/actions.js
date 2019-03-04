import axios from 'axios'
import { disData,disFootWear,disCostume,disCode,disIterest} from '../../apis/discounts';
export default {
    handleGoods({commit}){
       axios({
           methods:"get",
           url:"http://localhost:3000/dis"
       })
       .then((data)=>{
          commit("handleGoods",data.data)
       })
    },
    handleBrand({commit}){
        axios({
            methods:"get",
            url:"http://localhost:3000/brands"
        })
        .then((data)=>{
           commit("handleBrand",data.data)
        })
    },
    handleNavs({commit}){
        axios({
            methods:"get",
            url:"http://localhost:3000/navs"
        })
        .then((data)=>{
           commit("handleNavs",data.data)
        })
    },
    async handleDisData({commit},params){
        let data = await disData(params)
        commit("handleDisData",data.data)
        console.log(data)
    },
    async handFootWear({commit},params){
        let data = await disFootWear(params)
        commit("handFootWear",data.data)
        console.log(data)
    },
    async handCostume({commit},params){
        let data = await disCostume(params)
        commit("handCostume",data.data)
        console.log(data)
    },

    async handCode({commit},params){
        let data = await disCode(params)
        commit("handCode",data.data)
        console.log(data)
    },
    async handIterest({commit},params){
        let data = await disIterest(params)
        commit("handIterest",data.data)
        console.log(data)
    },
    
    
}