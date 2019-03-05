import axios from 'axios'
import  {findDaily,findNews,findEval,findList} from '../../apis/find'
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
    },
}