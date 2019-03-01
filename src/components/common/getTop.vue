<template>
	<div class="getTop" @click="backTop">
		<i class="iconfont">&#xe62e;</i>
	</div>
</template>

<script>
	export default {
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			// 点击回到顶部方法
			backTop() {
				alert(1)
				
			},

			// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
			scrollToTop() {
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if(that.scrollTop > 60) {
					that.btnFlag = true
				} else {
					that.btnFlag = false
				}
			}
		}
	}
</script>

<style>
	.getTop {
		position: fixed;
		bottom: 1.3rem;
		right: .3rem;
		width: .8rem;
		height: .8rem;
		border: 1px solid #ccc;
		border-radius: 50%;
		background: rgba(250, 250, 250, .6);
		line-height: .8rem;
		text-align: center;
	}
	
	.getTop i {
		font-size: .4rem;
	}
</style>