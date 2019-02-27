<template>
	<div class="swiper-container header-container" ref="headerContainer">
		<div class="swiper-wrapper header-wrapper">
			<div class="swiper-slide header-content" v-for="(item,index) in headerList">
				<img :src="item.img" />
				<div class="header-p">
					<p class="header-name">{{item.introduce}}</p>
					<p class="header-name">{{item.name}}</p>
					<p class="header-span">
						<span>{{item.price}}</span>
						<span>{{item.discount}}</span>
						<del>{{item.del}}</del>
					</p>
				</div>
				<div class="open">打开</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	import Vuex from "vuex";
	export default {

		computed: {
			...Vuex.mapState({
				headerList: state => state.home.headerList
			})
		},
		created() {
			this.handleHeaders()
		},
		methods: {
			...Vuex.mapActions({
				handleHeaders: "home/handleHeaders"
			})
		},
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.headerContainer, {
					autoplay: {
						disableOnInteraction: false
					}
				});
			}

		}
	}
</script>

<style lang="scss" scoped>
	.header-container {
		width: 100%;
		height: .9rem;
		.header-wrapper {
			width: 100%;
			height: 100%;
			.header-content {
				width: 100%;
				height: 100%;
				background: #000;
				display: flex;
				align-items: center;
				position: relative;
				img {
					width: .75rem;
					height: .75rem;
					margin-left: .3rem;
				}
				.header-p {
					padding-left: .2rem;
					.header-name {
						color: #fff;
						font-size: .28rem;
					}
					.header-span {
						font-size: .24rem;
						span:nth-of-type(1) {
							color: #dd1712;
						}
						span:nth-of-type(2) {
							background: #dd1712;
							border-radius: 2px;
							color: #fff;
						}
					}
				}
				.open {
					position: absolute;
					top: .15rem;
					right: .3rem;
					width: 1rem;
					height: .6rem;
					background: #dd1712;
					border-radius: 3px;
					line-height: .6rem;
					text-align: center;
					color: #fff;
				}
			}
		}
	}
</style>