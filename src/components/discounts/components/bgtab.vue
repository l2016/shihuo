<template>
  <div class="bg-color-all">
    <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">精选</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">鞋类</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">服饰</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container4'">数码</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container5'">兴趣</mt-button>
      <div class="tag-btn"></div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 1" :key="index" title>
            <div class="goods-list">
              <ul>
                <li v-for="(item,index) in handleDisData" :key="index">
                  <a href>
                    <div class="list-imgs">
                      <img
                        :src="item.img"
                        alt
                      >
                      <span class="top">{{item.tag}}</span>
                    </div>
                    <div class="details-box">
                      <h2>{{item.title}}</h2>
                      <p>{{item.subtitle}}</p>
                      <div class="from">
                        <div class="shop">{{item.business}}</div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 1" :key="index" title>
           <div class="goods-list">
              <ul>
                <li v-for="(item,index) in handFootWear" :key="index">
                  <a href>
                    <div class="list-imgs">
                      <img
                        :src="item.img"
                        alt
                      >
                     <span>{{item.tag}}</span>
                    </div>
                    <div class="details-box">
                      <h2>{{item.title}}</h2>
                      <p>{{item.subtitle}}</p>
                      <div class="from">
                        <div class="shop">{{item.business}}</div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 1" :key="index" title>
             <div class="goods-list">
              <ul>
                <li v-for="(item,index) in handCostume" :key="index">
                  <a href>
                    <div class="list-imgs">
                      <img
                        :src="item.img"
                        alt
                      >  
                      <span>{{item.tag}}</span>                 
                    </div>
                    <div class="details-box">
                      <h2>{{item.title}}</h2>
                      <p>{{item.subtitle}}</p>
                      <div class="from">
                        <div class="shop">{{item.business}}</div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 1" :key="index" title>
               <div class="goods-list">
              <ul>
                <li v-for="(item,index) in handCode" :key="index">
                  <a href>
                    <div class="list-imgs">
                      <img
                        :src="item.img"
                        alt
                      >  
                      <span>{{item.tag}}</span>                 
                    </div>
                    <div class="details-box">
                      <h2>{{item.title}}</h2>
                      <p>{{item.subtitle}}</p>
                      <div class="from">
                        <div class="shop">{{item.business}}</div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
          <!-- cell组件 -->
          <mt-cell v-for="(n,index) in 1" :key="index" title>
              <div class="goods-list">
              <ul>
                <li v-for="(item,index) in handIterest" :key="index">
                  <a href>
                    <div class="list-imgs">
                      <img
                        :src="item.img"
                        alt
                      >   
                      <span>{{item.tag}}</span>                
                    </div>
                    <div class="details-box">
                      <h2>{{item.title}}</h2>
                      <p>{{item.subtitle}}</p>
                      <div class="from">
                        <div class="shop">{{item.business}}</div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template> 

<script>
import Vuex from "vuex"
export default {
  name: "page-tab-container",
  computed:{
       ...Vuex.mapState({
         handleDisData: state => state.descounts.handleDisData
       }),
        ...Vuex.mapState({
         handFootWear: state => state.descounts.handFootWear
       }),
        ...Vuex.mapState({
         handCostume: state => state.descounts.handCostume
       }),
       ...Vuex.mapState({
         handCode: state => state.descounts.handCode
       }),
       ...Vuex.mapState({
         handIterest: state => state.descounts.handIterest
       }),
  },
  data() {
    return {
      active: "tab-container1",
      isFixed: false,
      offsetTop: 0
    };
  },

  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#boxFixed").offsetTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script> 

<style lang="scss" scoped>
.item {
  display: inline-block;
}
.box_fixed {
  padding: 0.1rem;
  position: relative;
}
.is_fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.tag-btn {
  width: 1.32rem;
  height: 0.88rem;
  background: rgba(255, 255, 255, 0.8)
    url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png)
    no-repeat;
  background-size: 100% auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
.link {
  color: inherit;
  padding: 20px;
  display: block;
}
.bg-color-all {
  .page-tab-container {
    .goods-list {
      width: 100%;
      margin-top: 0.1rem;
      border-bottom: 0.01rem solid #eee;
      ul {
        width: 100%;

        li {
          width: 100%;
          height: 2.56rem;
          padding-left: 0.1rem;
          border-bottom: 0.01rem solid #eee;
          a {
            width: 100%;
            height: 100%;
            padding: 0.2rem;
            display: flex;
            .list-imgs {
              width: 30%;
              position: relative;
              img {
                width: 100%;
                display: block;
              }
              .top{
                
                position: absolute;
                top: 0.1rem;
                left: 0;
                background: rgba(0, 0, 0, 0.6);
                border-radius: 0.04rem;
                color: #fff;
                font-size: 12px;
                padding: 0.06rem 0.1rem;
              }
            }
            .details-box {
              width: 66%;
              position: relative;
              margin-left: 0.26667rem;
              height: 3rem;
              h2 {
                color: #333;
                font-weight: 400;
                max-height: 1.12rem;
                overflow: hidden;
                word-break: break-all;
                line-height: 0.46rem;
                font-size: 0.3rem;
              }
              p {
                bottom: 0.86667rem;
                left: 0;
                font-size: 0.3rem;
                color: #dd1712;
                line-height: 0.53333rem;
              }
              .from {
                color: #999;
                font-size: 0.24rem;
                display: flex;
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
}
</style>