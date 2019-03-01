import axios from "axios";
import {goodsList} from "../../apis/home";
export default {
   handleHeaders({commit}){
   	axios({
   		method:"get",
   		url:"http://localhost:3000/headers"
   	})
   	.then((data)=>{
   		commit("handleHeaders",data.data)
   	})
   },
   handleHeaderBanner({commit}){
   	axios({
   		method:"get",
   		url:"http://localhost:3000/bannerImgs"
   	})
   	.then((data)=>{
   		commit("handleHeaderBanner",data.data)
   		
   	})
   },
   handleSeckill({commit}){
   	axios({
   		method:"get",
   		url:"http://localhost:3000/data"
   	})
   	.then((data)=>{
   		commit("handleSeckill",data.data)
   		
   	})
   },
   handleActivity({commit}){
   	axios({
   		method:"get",
   		url:"http://localhost:3000/activity"
   	})
   	.then((data)=>{
   		commit("handleActivity",data.data)
   	})
   },
   
   async handleGoodsList({commit},params){
   	let data = await goodsList(params)
   	commit("handleGoodsList",data.data)
   }
}