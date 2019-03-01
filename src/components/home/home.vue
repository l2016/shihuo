<template>
	<div class="home">
		<div class="wrapper homeWrapper" ref="homeWrapper">
			<div class="conent">
				<Header-com/>
				<Banner-com/>
				<Seckill-com/>
				<Activity-com/>
				<Tab-com/>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../common/header";
	import Banner from "./components/banner";
	import Seckill from "./components/seckill";
	import Activity from "./components/activity";
	import Tab from "./components/tab";
	import BScroll from "better-scroll";
	import Vuex from "vuex";
	export default {
		components: {
			"Header-com": Header,
			"Banner-com": Banner,
			"Seckill-com": Seckill,
			"Activity-com": Activity,
			"Tab-com": Tab,
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.homeWrapper,{
				click:true,
				tab:true
			})
		},
		created(){
			this.handleGoodsList()
		},
		methods:{
			...Vuex.mapActions({
				handleGoodsList:"home/handleGoodsList"
			})
		}
	}
</script>

<style scoped lang="scss">
	.home,
	.homeWrapper {
		height: 100%;
		background: #f2f2f2;
		padding-bottom: 1rem;
	}
	
</style>