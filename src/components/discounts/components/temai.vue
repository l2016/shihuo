<template>
  <div class="temai">
    <div class="temai-top">
      <div>
        <b>品牌特卖</b>
      </div>
        <router-link :to="{name:'detail'}">
     
      <div class="right">
        更多品牌
          <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" >
      </div>
        </router-link>
    </div>
    
    <div class="temaiList"> 
      <ul>
        <li v-for="(item,index) in disGoods" :key="index"> 
          <router-link to="">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
          </router-link>
        </li>         
      </ul>
    </div>

    <div class="brand-item">
      <ul>
        <li v-for="(item,index) in brands" :key="index">
          <a href="">
            <img class="imgPic1" :src="item.imgPic1" alt="">
            <img class="imgPic2" :src="item.imgPic2" alt="">
            <div class="brand-tit">{{item.tit}}</div>
            <div class="brand-subtit">{{item.subtit}}</div>
          </a>
        </li>
        
      </ul>
    </div>

  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
   computed: {
     ...Vuex.mapState({
         disGoods: state => state.descounts.goodsList,
         brands: state => state.descounts.handleBrand
     })
   },
   created(){
      this.handleGoods(),
      this.handleBrand()
   },
   methods: {
     ...Vuex.mapActions({
       handleGoods:"descounts/handleGoods",
       handleBrand:"descounts/handleBrand"
     })
   }
};
</script>


<style   lang="scss" scoped >
 .temai{
     width: 100%;
     background: #fff;
     padding: .3rem;
     .temai-top{
         width:100%;
         height:0.42rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         div>b{
             font-size: 0.3rem;
         }
         .right{
           width: 1.25rem;
           height: 0.27rem;
           
              img{
                width: 0.1rem;
                height: 0.2rem;
                float: right;
               }
           
         }
     }
     .temaiList{
       width:100%;
       height:1.38rem;
       margin-top: .3rem;
       ul{
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: space-around;
         li{
           width:0.98rem;
           height: 1.38rem;
           a{
             display: block;
             width: 100%;
             height: 100%;
             
             img{
               width:0.96rem;
               height: 0.96rem;
               border: .01rem solid #f2f2f2;
               border-radius: .64rem ;

             }
             span{
               display: block;
               text-align: center;
               font-size: 0.26rem;
             }
           }
         }
       }
     }
     .brand-item{
       width: 100%;
       height: 4.7rem;
       margin-top: .2rem; 
       ul{
         width: 100%;
         height:100%;
         li{
            overflow: hidden;
            position: relative;
            float: left;
            width: 2.1rem;
            height: 2.1rem;
            margin-right: .2rem;
            margin-top: .2rem;
           a{
             .imgPic1{
              width: 2.2rem;
              height: 2.2rem; 
             }
             .imgPic2{
               display: block;
               width: 0.7rem;
               height: 0.7rem;
               border-radius: .64rem;
               position: absolute;
               left:50%;
               margin-left: -.4rem;
               top: .4rem;
             }
             .brand-tit{
                height: .3rem;
                line-height: .3rem;
                font-size: 14px;
                color: #fff;
                width: 2rem;
                text-align: center;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                position: absolute;
                top: 1.2rem;
                left: 50%;
                margin-left: -1.1rem;
             }
             .brand-subtit{
               position: absolute;
                width: 1.7rem;
                top: 1.6rem;
                left: 50%;
                margin-left: -0.8rem;
                background-color: #dd1712;
                line-height: .3rem;
                color: #fff;
                text-align: center;
                font-size: 11px;
                height: .3rem;
                border-radius: .2rem;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
             }
          }
         }
       }
     }

 }

</style>