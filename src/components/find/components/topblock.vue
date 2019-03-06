<template>
  <div>
    <div id="navs" class="navs-wrapper wrapper" ref="tabBar">
        <div class="nav" >
            <mt-button size="small" @click.native.prevent="active = 'tab-container1'">今日推荐</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container2'">最新资讯</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container3'">评测All Star</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container4'">欲望清单</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container5'">装备党</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container6'">潮流风向</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container7'">3C新奇特</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container8'">跑步有道</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container9'">球鞋90秒</mt-button>
        </div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">
              <div class="jingxList">
                  <ul>
                      <li>
                          <div class="author">
                              <a href="">
                                  <img src="http://shihuo.hupucdn.com/media/201807/2616/7b0bcc2b2af151eb013ca1f1ea8b38b4.jpg" alt="">
                              </a>
                              <div class="nameM">
                                  <p class="name">FLIGHTCLUB中文站网</p>
                                  <p class="time">2019-03-03</p>
                              </div>
                          </div>
                          <div class="content">
                              <a href="">
                                  <div class="tit">蜘蛛侠 AJ1 沦为弟弟！这些「影视跨界」球鞋你没见过的有不少！</div>
                                  <p class="imgOne"><img src="http://shihuo.hupucdn.com/article/2019-03-03/8d779e5532bc5386a74204e9956945fd.jpg?imageView2/0/w/626/h/280/interlace/1" alt=""></p>
                                  <div class="tags">
                                      <span class="like">13</span>
                                      <span class="say">3</span>
                                  </div>
                              </a>
                          </div>
                      </li>
                  </ul>
              </div>
              
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">2</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">3</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">4</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">5</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container6">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">6</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container7">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">7</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container8">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">23</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container9">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 10" :key="index" title="">123</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
 <script>
import Vuex from 'vuex'
import BScroll from "better-scroll";
export default {
  name: "page-tab-container",
  data() {
    return { active: "tab-container1" };
  },
  updated(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.tabBar,{
                scrollX:true
            })
            console.log(this.scroll)
        }

    }
};
</script> 
<style lang="css" scoped>
.item {
  display: inline-block;
}
.nav {
  padding: 10px;
  width: max-content;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.link {
  color: inherit;
  padding: 20px;
  display: block;
}
#navs{
    background: #fff;
    width: 100%;
}
.jingxList{
    width: 100%;
    padding-left: 0.2rem;
    padding-bottom: .53333rem;
}
ul>li{
    border-bottom: 1px solid #e6e6e6;
    padding: .26667rem .26667rem .26667rem 0;
    display: list-item;
    text-align: -webkit-match-parent;
}
ul>li>.author{
    width: 100%;
    height: 1.07rem;
   
}
ul>li>.author>a{
    width: .8rem;
    height: .8rem;
    float: left;
    border-radius: .6rem;
    overflow: hidden;
    margin-right: .26667rem;
} 
ul>li>.author>a>img{
    display: block;
    width: 100%;
    border: 0;

}
ul>li>.author>.nameM>.name{
     font-size: 0.4rem;
     color: #444;
}
ul>li>.author>.nameM>.time{
     font-size: 0.35rem;
     line-height: 0.5rem;
}
.content{
    color: #222;
    margin-left: 1.1rem;
    width: 6.22rem;

}
.content>a{
   width: 100%;
}
.content>a>.tit{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.content>a>.imgOne{
    margin: .26667rem 0;
    width: 6.22rem;
   
}
.content>a>.imgOne>img{
    width: 100%;
     height:2.78rem;

}
</style>


