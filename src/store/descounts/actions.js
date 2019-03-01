import axios from 'axios'
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

}