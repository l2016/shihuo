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
		computed: {
			...Vuex.mapState({
				tabList: state => state.home.tabList,
				page: state => state.home.page,
				basketballList: state => state.home.basketballList,
				runList: state => state.home.runList,
				fitnessList: state => state.home.fitnessList,
				trendList: state => state.home.trendList
			})
		},
		watch: {
			tabList(newVal, oldVal) {
				this.scroll.refresh();
				this.scroll.finishPullUp();
				//				console.log(newVal,oldVal)
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.homeWrapper, {
				pullUpLoad: true,
				click: true,
				tab: true
			});
			this.scroll.on("pullingUp", () => {
				this.handleGoodsList(this.page);
				this.handleBasketballList(this.page);
				this.handleRunList(this.page);
				this.handleFitnessList(this.page);
				this.handleTrendList(this.page);
			})
		},
		created() {
			this.handleGoodsList(this.page);
			this.handleBasketballList(this.page);
			this.handleRunList(this.page);
			this.handleFitnessList(this.page);
			this.handleTrendList(this.page);
		},
		methods: {
			...Vuex.mapActions({
				handleGoodsList: "home/handleGoodsList",
				handleBasketballList: "home/handleBasketballList",
				handleRunList: "home/handleRunList",
				handleFitnessList: "home/handleFitnessList",
				handleTrendList: "home/handleTrendList",
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