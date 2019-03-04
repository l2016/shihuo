<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in tabBar" :key="index">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            tabBar:[
                {
                    name:"home",
                    title:"首页",
                    icon:"&#xe684;"
                },
                {
                    name:"discounts",
                    title:"优惠",
                    icon:"&#xe773;"
                },
                {
                    name:"find",
                    title:"发现",
                    icon:"&#xe746;"
                },
                {
                    name:"equip",
                    title:"装备",
                    icon:"&#xe660;"
                },
                {
                    name:"more",
                    title:"更多",
                    icon:"&#xe682;"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: .01rem solid #c1c1c1;
    }

    #footer>ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
    }
     #footer>ul>li>.router-link-active{
         color: #dd1712;
     }
     #footer>ul>li>a>i{
         font-size: .36rem;
     }
      #footer>ul>li>a>span{
          font-size: .28rem;
      }

</style>