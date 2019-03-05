<template>
  <div class="banner">
        <div class="ban">
            <ul>
                <li v-for="(item,index) in img" :key="index">
                    <a href=""><img :src="item" alt=""></a>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>
export default {
    data(){
        return {
           img:[
               "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/widget/NewBrandSale/menu_all_on_a3d46cf.png",
               "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/widget/NewBrandSale/menu_nz_6ba8207.png",
               "//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/widget/NewBrandSale/menu_yd_809bab2.png",
           ]
        }
    }
}
</script>

<style lang="scss">
  .banner{
      background-color: #f0f3f5;
      position: relative;
      margin: 0 auto;
      top: 0.2rem;
      .ban{
        width: 100%;
        overflow: hidden;
        position: fixed;
        background-color: #fff;
        left: -.01333rem;
       
        z-index: 11;
          
            ul{
            width: 100%;
            height: 1.04rem;
            display:flex;
            justify-content: space-around;
            align-items: center;
            }
        }
  }
   
</style>