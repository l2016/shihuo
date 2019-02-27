<template>
	<div class="home">
		<div class="wrapper homeWrapper" ref="homeWrapper">
			<div class="conent">
				<Header-com/>
				<Banner-com/>
				<Seckill-com/>
				<Activity-com/>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../common/header";
	import Banner from "./components/banner";
	import Seckill from "./components/seckill";
	import Activity from "./components/activity";
	import BScroll from "better-scroll";
	export default {
		components: {
			"Header-com": Header,
			"Banner-com": Banner,
			"Seckill-com": Seckill,
			"Activity-com": Activity
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.homeWrapper)
			console.log(this.scroll)
		}
	}
</script>

<style scoped lang="scss">
	.home,
	.homeWrapper {
		height: 100%;
		background: #f2f2f2;
		.content {
			padding-bottom: 1rem;
		}
	}
	
</style>