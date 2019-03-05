<template>
	<div class="find">
		<div class="wrapper topBlock" ref="topBlock">
			<div class="centent">
				<Header/>
				<Banner/>
				<Navs/>	
				<TopBlock/>	
			</div>
		</div>
	</div>
</template>

<script>
import Vuex from 'vuex'
import Header from '../common/header'
import Banner from './components/banner'
import Navs from './components/nav'
import TopBlock from './components/topblock'
import BScroll from "better-scroll";
	export default{
		components:{
			"Banner":Banner,
			"Header":Header,
			"Navs":Navs,
			"TopBlock":TopBlock

		},
		computed: {
			...Vuex.mapState({
			state:state=>state.find			
			}),
		},
		created(){
			this.handfindDaily()
			this.handfindNews()
			this.handfindEval()
			this.handfindList()

		},
		methods:{
			  ...Vuex.mapActions({
                 handfindDaily:"find/handfindDaily"
			  }),
			  ...Vuex.mapActions({
                 handfindNews:"find/handfindNews"
			  }),
			  ...Vuex.mapActions({
				  handfindEval:"find/handfindEval"
			  }),
			  ...Vuex.mapActions({
				  handfindList:"find/handfindList"
			  }),
			 
		  },
        watch: {
			state:{
				handler(){
					if(!this.scroll){
					this.scroll = new BScroll(this.$refs.topBlock);
					console.log(this.scroll)
					}
				},
				deep:true
			}	  
		  },
		  
	}
</script>

<style lang="scss">
	.find,.topBlock{
		height: 100%;
	}
	</style>