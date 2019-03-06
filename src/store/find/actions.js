import axios from 'axios'

export default {
    findBanner({commit}){
        axios({
          methods:"get",
          url:"http://localhost:3000/findBanner"
        })
        .then((data)=>{
            commit("findBanner",data.data)
        })
    }
}