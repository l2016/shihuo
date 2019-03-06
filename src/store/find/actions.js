import axios from 'axios'
<<<<<<< HEAD
import  {findDaily,findNews,findEval,findList} from '../../apis/find'
=======
import {handleDaily,handleNews,handleEval,handleList,handlePad} from '../../apis/finds';

>>>>>>> fang
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
<<<<<<< HEAD
    async handfindDaily({commit},params){
        let data = await findDaily(params)
        commit("handfindDaily",data.data)
        console.log(data)
    },
    async handfindNews({commit},params){
        let data = await findNews(params)
        commit("handfindNews",data.data)
        console.log(data)
    },
    async handfindEval({commit},params){
        let data = await findEval(params)
        commit("handfindEval",data.data)
        console.log(data)
    },
    async handfindList({commit},params){
        let data = await findList(params)
        commit("handfindList",data.data)
        console.log(data)
=======
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
>>>>>>> fang
    },
}