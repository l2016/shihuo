<template>
    <div class="bg-color-all">
        <div class="menu-list">
            <ul>
                <li v-for="(item,index) in lists" :key="index" ><a href="">{{item}}</a></li>
            </ul>
            <div class="tag-btn"></div>
        </div>
        <div class="goods-list"> 
             <ul>
                 <li>
                     <a href="">
                         <div class="list-imgs">
                            <img src="http://shihuo.hupucdn.com/newsIndex11/201902/2818/a5a9edc8126889954163c5b9f0d8f094.jpg?imageView2/0/w/600/h/600/interlace/1" alt="">
                            <span>置顶</span>
                         </div>
                         <div class="details-box">
                             <h2>前方高能！一大波蝴蝶节好价单品即将来袭~</h2>
                             <p>京东蝴蝶节购物指南</p>
                             <div class="from">
                                 <div class="shop">京东</div>
                                 <div class="date">1小时前</div>
                             </div>
                         </div>
                     </a>
                </li>
                <li>
                     <a href="">
                         <div class="list-imgs">
                            <img src="http://shihuo.hupucdn.com/newsIndex11/201902/2818/a5a9edc8126889954163c5b9f0d8f094.jpg?imageView2/0/w/600/h/600/interlace/1" alt="">
                            <span>置顶</span>
                         </div>
                         <div class="details-box">
                             <h2>前方高能！一大波蝴蝶节好价单品即将来袭~</h2>
                             <p>京东蝴蝶节购物指南</p>
                             <div class="from">
                                 <div class="shop">京东</div>
                                 <div class="date">1小时前</div>
                             </div>
                         </div>
                     </a>
                </li>
             </ul>
        </div>

    </div>
</template>

<script>
export default {
   data(){
       return{
         lists:["精选","鞋类","服饰","数码","兴趣"]
       }
   }
}
</script>

<style lang="scss" scope>
.bg-color-all{
    width: 100%;
    padding: 0.01rem;
    .menu-list{
        width: 100%;
        height: 0.88rem;
        margin-top: 0;
        position: relative;
        border: 0.01rem solid #f2f2f2;
        ul{
            width: 100%;
            height: 100%;
            display:flex;
            
            li{
                height: 100%;
                padding: 0 .3rem;
                a{
                    display:block;
                    font-size: 0.24rem;
                    color: #333;
                    line-height: 0.88rem;
                }
            }
        }
        .tag-btn{
        width: 1.52rem;
        height: 0.88rem;
        background: rgba(255,255,255,.8) url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png) no-repeat;
        background-size: 100% auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
      }
    }
    .goods-list{
       width: 100%;
       margin-top: .1rem;
       border-bottom: 0.01rem solid #eee;
       ul{
           width: 100%;
          
           li{
               width:100%;
               height: 2.56rem;
               padding-left: .1rem;
                border-bottom: 0.01rem solid #eee;
               a{
                 width: 100%;
                 height: 100%;
                 padding: .2rem;
                 display:flex;
                 .list-imgs{
                     width: 30%;
                    position: relative;
                    img{
                        width: 100%;
                        display: block;
                    }
                    span{
                        position: absolute;
                        top: .2rem;
                        left: 0;
                        background: rgba(0,0,0,.6);
                        border-radius: .04rem;
                        color: #FFF;
                        font-size: 12px;
                        padding: .06667rem .13333rem;
                    }
                 }
                 .details-box{
                     width: 66%;
                    position: relative;
                    margin-left: .26667rem;
                    height: 3rem;
                    h2{
                        color: #333;
                        font-weight: 400;
                        max-height: 1.12rem;
                        overflow: hidden;
                        word-break: break-all;
                        line-height: .46rem;
                        font-size: .3rem;

                    }
                    p{
                       bottom: .86667rem;
                        left: 0;
                        font-size: .3rem;
                        color: #dd1712;
                        line-height: .53333rem;
                    }
                    .from{
                        color: #999;
                        font-size: .24rem;
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                       margin-top: 0.23rem;
                        
                    }
                 }
               }
           }
       }
    }
    
}

    
</style>