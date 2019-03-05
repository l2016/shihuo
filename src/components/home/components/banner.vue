<template>
	<div class="swiper-container banner-container" ref="bannerContainer">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in hwaderBannerImg">
				<img :src="item">
			</div>
		</div>
		<div class="swiper-pagination banner-pagination"></div>
		<div class="banner-input" @click="handleClick">
			<div class="banner-input-inp">
				<i class="iconfont">&#xe62b;</i>
				<input type="text" placeholder="搜索商品，品牌" />
			</div>
			<span><i class="iconfont">&#xe69b;</i></span>
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
				hwaderBannerImg: state => state.home.hwaderBannerImg
			})
		},
		created() {
			this.handleHeaderBanner()
		},
		methods: {
			...Vuex.mapActions({
				handleHeaderBanner: "home/handleHeaderBanner"
			}),
			handleClick(){
				this.$router.push({name:'seek'})
			}
		},
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerContainer, {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.banner-pagination',
					},
				});
			}
		}
	};
</script>

<style scoped lang="scss">
	.banner-container {
		width: 100%;
		height: 3.8rem;
		position: relative;
		.banner-input {
			width: 100%;
			height: 1rem;
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 5;
			i {
				color: #fff;
			}
			.banner-input-inp {
				width: 6.37rem;
				height: .62rem;
				background: #fff;
				border-radius: 3px;
				margin-left: .2rem;
				line-height: .62rem;
				color: #666;
				i{
					color: #666;
					margin-left: .2rem;
				}
				input{
					width: 5.65rem;
					height: .6rem;
					border: 0;
				}
			}
			span{
				margin-right: .2rem;
			}
		}
	}
	
	.banner-container img {
		width: 100%;
		height: 100%;
	}
</style>