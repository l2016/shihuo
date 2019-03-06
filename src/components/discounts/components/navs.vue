<template>
    <div class="navs-swiper">
        <div class="navs-tit">
            <b>超值9块9</b>
            <span>24小时淘不停</span>
            <div class="right" >更多商品
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" >
            </div>
        </div>
      
        <div class="navs-wrapper wrapper" ref="tabBar">
            <ul class="centent">
                <li v-for="(item,index) in Navs" :key="index">
                    <a href="">
                        <img :src="item.img" alt="">
                        <p class="name">{{item.name}}</p>
                        <p class="price"><span>￥</span>{{item.price}}</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="advert-radius">
            <a href="">
                <img src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png" alt="">
            </a>
        </div>
    
    </div>
</template>

<script>
import Vuex from 'vuex'
import BScroll from "better-scroll";
export default {
    computed:{
       ...Vuex.mapState({
         Navs: state => state.descounts.handleNavs,
       })
    },
    created(){
          this.handleNavs()   
    },
    methods:{
        ...Vuex.mapActions({
             handleNavs:"descounts/handleNavs"
        })
            
    },
    updated(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.tabBar,{
                scrollX:true
            })
           // console.log(this.scroll)
        }

    }
  
}
</script>

<style lang="scss" scoped>
   .navs-swiper{
       width: 100%;
       height: 5rem;
       .navs-tit{
           width: 6.9rem;
           height: 0.42rem;
           margin: 0 auto;
           display: flex;         
           align-items: center;
           b{
               font-size: 0.3rem;
           }
           span{
               display: block;
               font-size: 0.22rem;
               color: #999;
               padding-left: .2rem;
           }
           .right{
           width: 1.25rem;
           height: 0.27rem;
           margin-left: 2.5rem;
           color:#999;
           img{
                width: 0.1rem;
                height: 0.2rem;
                float: right;
               }
           }
       }
       .navs-wrapper{
           width:100%;
           
           ul{
               width: max-content;
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
               li{
                   width:1.64rem;
                   height: 2.34rem;
                   padding: 0.2rem;
                  
                   a{
                       img{
                           width: 1.44rem;
                       }
                       .name{
                            color: #333;
                            font-size: .24rem;
                            height: .6rem;
                            line-height: .66667rem;
                            text-align: left;
                            overflow: hidden;
                       }
                       .price{
                          text-align: center;
                          color: #dd1712;
                          font-size: .24rem;
                       }
                   }
               }
           }
       }
       .advert-radius{
           width: 100%;
           height: 1.5rem;
           padding: 0.4rem;
           a{
              img{
                width: 6.9rem;
                height: 1.5rem;
                border-radius: .65rem;
                padding: .1rem;
              }
           }
       }
   }

</style>
