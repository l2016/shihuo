<template>
	<div class="discounts"> 
		<div class="wrapper homeWrapper" ref="homeWrapper">
			<div class="centent">
				<Header/>
				<TabBar/>	
				<Temai/>
				<Navs/>
				<Bgtab/>
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
import Bgtab from './components/bgtab'
import BScroll from "better-scroll";
export default{
	components:{
		"Header":Header,
		"TabBar":TabBar,
		"Temai":Temai,
		"Navs":Navs,
		"Bgtab":Bgtab,
	},
	created(){
		 this.handleDisData()
		 this.handFootWear()
		 this.handCostume()
		 this.handCode()
		 this.handIterest()
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
	  
	},
	methods:{
		...Vuex.mapActions({
			handleDisData:"descounts/handleDisData"
		}),
		...Vuex.mapActions({
			handFootWear:"descounts/handFootWear"
		}),
		...Vuex.mapActions({
	  	handCostume:"descounts/handCostume"
		}),
		...Vuex.mapActions({
	  	handCode:"descounts/handCode"
		}),
		...Vuex.mapActions({
	  	handIterest:"descounts/handIterest"
		}),
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