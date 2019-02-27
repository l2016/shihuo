<template>
	<div class="activity">
		<div class="discounts">
			<ul>
				<li v-for="(item,index) in activity.discounts">
					<router-link to="">
						<div class="discounts-conent">
							<p>{{item.name}}</p>
							<p>{{item.dat}}</p>
						</div>
						<div class="discounts-img">
							<img :src="item.img" />
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="hot">
			<ul>
				<li>
					<router-link to="">
						<div class="hot-img">
							<img src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" />
						</div>
						<div class="hot-conent">
							<p>ssss</p>
							<p>ccccc</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				activity:state=>state.home.activity
			})
		},
		created(){
			this.handleActivity();
		},
		methods:{
			...Vuex.mapActions({
				handleActivity:"home/handleActivity"
			})
		}
	}
</script>

<style lang="scss" scoped>
.discounts{
	width: 100%;
	margin: .1rem 0;
	ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		li{
			width: 2.35rem;
			height: 2.57rem;
			background: #fff;
			a{
				.discounts-conent{
					width: 100%;
					line-height: .5rem;
					text-align: center;
					p:nth-of-type(1){
						font-size: .3rem;
					}
				}
				.discounts-img{
					width: 1.2rem;
					height: 1.2rem;
					margin: .1rem auto;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
}
</style>