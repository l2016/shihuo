import axios from 'axios'
import {handleDaily,handleNews,handleEval,handleList,handlePad} from '../../apis/finds';

export default {
    findBanner({commit}){
        axios({
          methods:"get",
          url:"http://localhost:3000/findBanner"
        })
        .then((data)=>{
            commit("findBanner",data.data)
        })
    },
    async handleDaily({commit},params){
        let data = await handleDaily(params)
        commit("handleDaily",data.data)
       // console.log(data)
    },
    async handleNews({commit},params){
        let data = await handleNews(params)
        commit("handleNews",data.data)
        //console.log(data)
    },
    async handleEval({commit},params){
        let data = await handleEval(params)
        commit("handleEval",data.data)
       // console.log(data)
    },
    async handleList({commit},params){
        let data = await handleList(params)
        commit("handleList",data.data)
       // console.log(data)
    },
    async handlePad({commit},params){
        let data = await handlePad(params)
        commit("handlePad",data.data)
        //console.log(data)
    },
}