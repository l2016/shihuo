<template>
	<div class="seckill">
		<ul>
			<li v-for="(item,index) in seckills">
				<router-link to="">
					<div class="seckill-content">
						<p>{{item.name}}</p>
						<p>{{item.details}}</p>
					</div>
					<div class="seckill-img">
						<img :src="item.img"/>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				seckills:state=>state.home.seckills
			})
		},
		created(){
			this.handleSeckill();
		},
		methods:{
			...Vuex.mapActions({
				handleSeckill:"home/handleSeckill"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.seckill{
		margin-top: .2rem;
		width: 100%;
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			li{
				width: 3.75rem;
				height: 1.26rem;
				padding: .05rem .1rem;
				background: #fff;
				border-top: 1px solid #f2f2f2;
				border-right: 1px solid #f2f2f2;
				a{
					width: 3.54rem;
					height: 1.15rem;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.seckill-img{
						width: 1.05rem;
						height: 1.05rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.seckill-content{
						p:nth-of-type(1){
							font-size: .3rem;
							font-weight: 800;
							color: #333;
						}
						p:nth-of-type(2){
							font-size: .2rem;
							color: #666;
						}
					}
				}
			}
		}
	}
</style>