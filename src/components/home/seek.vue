<template>
	<div class="seek">
		<div class="seek-input">
			<div class="seek-inp">
				<i class="iconfont">&#xe62b;</i>
				<input type="text" placeholder="搜索商品，品牌" v-model="val"/>
			</div>
			<div class="seek-return" @click="handleClick">
				取消
			</div>
		</div>
		<div class="seek-conent">
			<ul>
				<li v-for="(item,index) in seoList" :key="index"
					@click="handleInoputChange(item)">
					{{item}}
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				val:""
			}
		},
		watch:{
			val(){
				let params = this.val
				this.handleSeoList(params)
			}
		},
		methods:{
			...Vuex.mapActions({
				handleSeoList:"home/handleSeoList"
			}),
			handleClick(){
				this.$router.back()
			},
			handleInoputChange(item){
				this.val = item
			}
		},
		computed:{
			...Vuex.mapState({
				seoList:state=>state.home.seoList
			})
		}
	}
</script>

<style lang="scss" scoped>

	.seek{
		width: 100%;
		height: 1rem;
		background: rgb(247, 247, 247);
		.seek-input{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.seek-inp{
				width: 85%;
				height: .62rem;
				background: #EAEAEA;
				i{
					width: .45rem;
					line-height: .6rem;
				}
				input{
					width: 5.9rem;
					height: .6rem;
					border: 0;
					background: #EAEAEA;
				}
			}
			.seek-return{
				font-size: .3rem;
			}
		}
		.seek-conent{
			padding: .3rem;
			li{
				line-height: .8rem;
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>