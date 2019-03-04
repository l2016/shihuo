<template>
  <div class="tab">
    <div class="search">  
       <div class="search-top">
           <input type="text" class="input" placeholder="搜索全网低价好卷">   
      </div>     
    </div>
    <div class="yhp">
      <div class="yhp-left">
        已收集
        <span>1035</span>&nbsp;张优惠卷
      </div>
      <a href="http://m.shihuo.cn/app/html/shihuoMobile/souquan.html">搜卷指南</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab {
  width: 100%;
  height: 1.7rem;
  background: #f0f3f5;
}
.tab > .search {
  width: 100%;
  height: 0.94rem;
  padding: 0.2rem 0.4rem;
}
.tab > .search > .search-top {
  width: 6.9rem;
  height: 0.64rem;
  border-radius: 0.13333rem;
  overflow: hidden;
  background: #fff
    url(//sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 0.2rem center
    no-repeat;
  background-size: 0.3rem;
}
.tab > .search > .search-top > .input {
  width: 5.9rem;
  height: 0.64rem;
  margin-left: 0.8rem;
  border: 0 none;
  outline: none;
}
.tab > .yhp {
  width: 100%;
  height: 0.94rem;
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
}
.tab > .yhp > .yhp-left {
  font-size: 0.24rem;
  display: flex;
}
.tab > .yhp > .yhp-left > span {
  display: block;
  font-weight: 800;
  font-size: 0.3rem;
}
</style>