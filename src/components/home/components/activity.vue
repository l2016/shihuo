<template>
	<div class="activity">
		<div class="discounts">
			<ul>
				<li v-for="(item,index) in activity.discounts" :key="index"> 
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
			<h3>热门活动</h3>
			<ul>
				<li v-for="(item,index) in activity.hot">
					<router-link to="">
						<div class="hot-img">
							<img :src="item.img" />
						</div>
						<div class="hot-conent">
							<p>{{item.name}}</p>
							<p>{{item.dat}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				activity: state => state.home.activity
			})
		},
		created() {
			this.handleActivity();
		},
		methods: {
			...Vuex.mapActions({
				handleActivity: "home/handleActivity"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.activity {
		width: 100%;
		.discounts {
			width: 100%;
			margin: .1rem 0;
			ul {
				width: 100%;
				display: flex;
				justify-content: space-around;
				li {
					width: 2.35rem;
					height: 2.57rem;
					background: #fff;
					a {
						.discounts-conent {
							width: 100%;
							line-height: .5rem;
							text-align: center;
							p:nth-of-type(1) {
								font-size: .3rem;
							}
						}
						.discounts-img {
							width: 1.2rem;
							height: 1.2rem;
							margin: .1rem auto;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		}
		.hot {
			width: 100%;
			background: #fff;
			h3{
				font-size: .28rem;
				line-height: .4rem;
				padding: .27rem .4rem;
				margin-bottom: .13rem;
			}
			ul{
				padding: 0 .4rem;
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				li{
					width: 2.1rem;
					height: 2.04rem;
					margin: 0 .08rem .25rem 0;
					a{
						width: 100%;
						.hot-img{
							width: 100%;
							height: 1.34rem;
							img{
								width: 100%;
								height: 100%;
							}
						}
						.hot-conent{
							text-align: center;
							p:nth-of-type(1){
								font-size: .26rem;
								line-height: .3rem;
								font-weight: 700;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							p:nth-of-type(2){
								font-size: .24rem;
								color: #666;
							}
						}
					}
				}
			}
		}
	}
</style>