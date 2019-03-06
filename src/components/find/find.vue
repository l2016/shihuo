<template>
<<<<<<< HEAD
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
=======
  <div class="find">
    <div class="wrapper homeWrapper" ref="homeWrapper">
      <div class="centent">
        <Header/>
        <Banner/>
        <Navs/>
        <TopBlock/>
      </div>
    </div>
  </div>
>>>>>>> fang
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
<<<<<<< HEAD
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
=======
		created(){
		   this.handleDaily(),
		   this.handleNews(),
		   this.handleEval(),
		   this.handleList(),
		   this.handlePad()
		},
      computed: {
		...Vuex.mapState({
		state:state=>state.find
		})
	  },
>>>>>>> fang
        watch: {
			state:{
				handler(){
					if(!this.scroll){
<<<<<<< HEAD
					this.scroll = new BScroll(this.$refs.topBlock);
					console.log(this.scroll)
=======
					this.scroll = new BScroll(this.$refs.homeWrapper);
				//	console.log(this.scroll)
>>>>>>> fang
					}
				},
				deep:true
			}	  
		  },
<<<<<<< HEAD
		  
	}
</script>

<style lang="scss">
	.find,.topBlock{
		height: 100%;
	}
	</style>
=======
		  methods:{
		...Vuex.mapActions({
			handleDaily:"find/handleDaily"
		}),
		...Vuex.mapActions({
			handleNews:"find/handleNews"
		}),
		...Vuex.mapActions({
			handleEval:"find/handleEval"
		}),
		...Vuex.mapActions({
			handleList:"find/handleList"
		}),
		...Vuex.mapActions({
			handlePad:"find/handlePad"
		}),
	  }
	}
</script>

<style lang="scss" scoped>
.find,
.homeWrapper {
  height: 100%;
  centent {
    padding-bottom: 1rem;
  }
}
</style>
>>>>>>> fang
