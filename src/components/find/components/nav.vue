<template>
  <div>
    <div class="navs">
      <ul>
        <li v-for="(item,index) in navs" :key="index">
          <a href>
            <img :src="item.img" alt>
            <span>{{item.span}}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="hotblock">
      <div class="title">热门话题</div>
      <div class="navs-wrapper wrapper" ref="hotWrap">
        <div class="hots">
          <div class="hot" v-for="(item,index) in hots" :key="index">
            <a href>
              <img :src="item.img" alt>
              <p>{{item.p}}</p>
            </a>
          </div>
          <div>查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";
export default {
  data() {
    return {
      navs: [
        {
          img:
            "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png",
          span: "众测"
        },
        {
          img:
            "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png",
          span: "栏目"
        },
        {
          img:
            "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png",
          span: "最新"
        },
        {
          img:
            "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png",
          span: "最热"
        }
      ],
      hots: [
        {
          img:
            "http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg",
          p: "# 晒穿搭，AJ11 CONCORD 领回家！！ #"
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg",
          p: "# 限时下单 全场返利 #"
        },
        {
          img:
            "http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png",
          p: "# 晒照赢新年康扣 #"
        }
      ]
    };
  },
  updated() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.hotWrap, {
        scrollX: true
      });
     // console.log(this.scroll);
    }
  }
};
</script>

<style lang="scss" scoped>
.navs {
  width: 100%;
  height: 1.41rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      a {
        img {
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: center center;
          -webkit-background-size: contain;
          background-size: contain;
          content: "";
          display: block;
          margin: 0 auto 0.13333rem;
          width: 0.8rem;
          height: 0.7rem;
        }
        span {
          display: block;
          text-align: center;
          font-size: 0.24rem;
        }
      }
    }
  }
}
.hotblock {
  width: 100%;
  height: 2.51rem;
  margin-top:0.1rem;
  margin-bottom: 0.1rem;
  
  .title {
    width: 100%;
    height: 0.96rem;
    font-size: 0.3rem;
    line-height: 0.96rem;
    color: #000;
    padding: 0.2rem;
 
  }
  .navs-wrapper {
    width: 100%;
    height: 1.24rem;
    
    .hots{
      display: flex;
      width: max-content;
      align-items: center;
      flex-wrap: nowrap;
        .hot {
        position: relative;
        width: 2.63rem;
        height: 1.24rem;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        a {
            display: block;
            position: relative;
            height: 100%;
            width: 100%;
            color: #444;
            text-decoration: none;
            img {
            width: 100%;
            height: 100%;
            }
            p {
            width: 100%;
            font-size: 0.3rem;
            position: absolute;
            top: 50%;
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            z-index: 10;
            color: rgb(185, 182, 182);
            word-wrap: break-word;
            text-align: center;
            }
        }
        }
    }
  }
}
</style>
