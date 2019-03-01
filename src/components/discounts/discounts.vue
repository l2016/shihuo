<template>
	<div class="discounts"> 
		<div class="wrapper homeWrapper" ref="homeWrapper">
			<div class="centent">
				<Header/>
				<TabBar/>	
				<Temai/>
				<Navs/>
				<Bgall/>
			</div>
		</div>
	</div>
</template>

<script>
import Vuex from "vuex";
import Header from '../common/header'
import TabBar from './components/tabbar'
import Temai from './components/temai'
import Navs from './components/navs'
import Bgall from './components/bgall'
import BScroll from "better-scroll";

export default{
	components:{
		"Header":Header,
		"TabBar":TabBar,
		"Temai":Temai,
		"Navs":Navs,
		"Bgall":Bgall
	},	
	computed: {
    ...Vuex.mapState({
      state:state=>state.descounts
    })
  },
  watch: {
	  state:{
		  handler(){
             if(!this.scroll){
            this.scroll = new BScroll(this.$refs.homeWrapper);
            console.log(this.scroll)
            }
		  },
		   deep:true
	  }
	  
  }
     
}
</script>

<style lang="scss">
	 .discounts,.homeWrapper{
        height: 100%;
        centent{
			padding-bottom: 1rem;
		}
	 }
</style>