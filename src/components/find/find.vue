<template>
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
</template>

<script>
import Header from '../common/header'
import Banner from './components/banner'
import Navs from './components/nav'
import TopBlock from './components/topblock'
import Vuex from 'vuex'
import BScroll from "better-scroll";
	export default{
		components:{
			"Banner":Banner,
			"Header":Header,
			"Navs":Navs,
			"TopBlock":TopBlock
		},
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
        watch: {
			state:{
				handler(){
					if(!this.scroll){
					this.scroll = new BScroll(this.$refs.homeWrapper);
				//	console.log(this.scroll)
					}
				},
				deep:true
			}	  
		  },
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