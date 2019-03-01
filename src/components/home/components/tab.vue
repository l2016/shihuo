<template>
	<div class="tab">
		<!--<div class="tab-nav">
			<ul class="nav-nav">
				<li v-for="(item,index) in activity.tabNav" @click="handleToggleNav(index)">
					<router-link to="" :class="index == tabNavIndex ? 'activeNav':''">
						{{item}}
					</router-link>
				</li>
			</ul>
			<ul class="nav-list">
				<li v-for="(item,index) in activity.tabList" @click="handleToggleList(index)">
					<router-link to="" :class="index == tabListIndex ? 'activeList':''">
						{{item}}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="tabBar">
			<div class="tabBar-conent">
				<ul>
					<li v-for="(item,index) in tabList">
						<div class="tabBar-conent-img">
							<img :src="item.data.img"/>
						</div>
						<div class="tabBar-conent-R">
							<h4>{{item.data.title}}</h4>
							<p>{{item.data.intro}}</p>
							<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
							<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
						</div>
					</li>
				</ul>
			</div>
		</div>-->
		<mt-navbar v-model="selected" class="nav-nav">
			<mt-tab-item id="1" class="tab-nav">推荐</mt-tab-item>
			<mt-tab-item id="2" class="tab-nav">篮球</mt-tab-item>
			<mt-tab-item id="3" class="tab-nav">跑步</mt-tab-item>
			<mt-tab-item id="4" class="tab-nav">健身</mt-tab-item>
			<mt-tab-item id="5" class="tab-nav">潮流</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="tabBar">
					<div class="tabBar-conent">
						<ul>
							<li v-for="(item,index) in tabList">
								<div class="tabBar-conent-img">
									<img :src="item.data.img" />
								</div>
								<div class="tabBar-conent-R">
									<h4>{{item.data.title}}</h4>
									<p>{{item.data.intro}}</p>
									<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
									<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="tabBar">
					<div class="tabBar-conent">
						<ul>
							<li v-for="(item,index) in basketballList">
								<div class="tabBar-conent-img">
									<img :src="item.data.img" />
								</div>
								<div class="tabBar-conent-R">
									<h4>{{item.data.title}}</h4>
									<p>{{item.data.intro}}</p>
									<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
									<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="tabBar">
					<div class="tabBar-conent">
						<ul>
							<li v-for="(item,index) in runList">
								<div class="tabBar-conent-img">
									<img :src="item.data.img" />
								</div>
								<div class="tabBar-conent-R">
									<h4>{{item.data.title}}</h4>
									<p>{{item.data.intro}}</p>
									<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
									<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<div class="tabBar">
					<div class="tabBar-conent">
						<ul>
							<li v-for="(item,index) in fitnessList">
								<div class="tabBar-conent-img">
									<img :src="item.data.img" />
								</div>
								<div class="tabBar-conent-R">
									<h4>{{item.data.title}}</h4>
									<p>{{item.data.intro}}</p>
									<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
									<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="5">
				<div class="tabBar">
					<div class="tabBar-conent">
						<ul>
							<li v-for="(item,index) in trendList">
								<div class="tabBar-conent-img">
									<img :src="item.data.img" />
								</div>
								<div class="tabBar-conent-R">
									<h4>{{item.data.title}}</h4>
									<p>{{item.data.intro}}</p>
									<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
									<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>

</template>

<script>
	import Vuex from "vuex";
	import Vue from "vue";
	import { Navbar, TabItem } from 'mint-ui';

	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	export default {
		data() {
			return {
				tabNavIndex: 0,
				tabListIndex: 0,
				selected: "qq"
			}
		},
		computed: {
			...Vuex.mapState({
				tabNav: state => state.home.tabNav,
				tabList: state => state.home.tabList,
				basketballList: state => state.home.basketballList,
				runList: state => state.home.runList,
				fitnessList: state => state.home.fitnessList,
				trendList: state => state.home.trendList,
			})
		},
		methods: {
			handleToggleNav(index) {
				this.tabNavIndex = index;
			},
			handleToggleList(index) {
				this.tabListIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.is-selected {
		color: #dd1712;
		border-bottom: 3px solid #dd1712;
		margin-bottom: -3px;
	}
	
	.tab {
		margin-top: .1rem;
		width: 100%;
		background: #fff;
		.tab-nav {
			width: 100%;
			ul {
				width: 100%;
				height: .8rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: .26rem;
				font-weight: 700;
				li {
					width: 100%;
					text-align: center;
				}
			}
			.nav-nav {
				.activeNav {
					color: #dd1712;
					border-bottom: 2px solid #dd1712;
				}
			}
			.nav-list {
				a {
					display: inline-block;
					line-height: .5rem;
					width: 1.5rem;
					height: .5rem;
					background: #f5f5f5;
					color: #333;
					border-radius: 3px;
				}
				.activeList {
					background: #dd1712;
					color: #fff;
				}
			}
		}
		.tabBar {
			width: 100%;
			padding: .2rem;
			.tabBar-name {
				width: 100%;
				padding-left: .2rem;
				display: flex;
				align-items: center;
				.tabBar-name-img {
					width: .4rem;
					height: .4rem;
					img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
			.tabBar-conent {
				width: 100%;
				padding: 0 .2rem;
				ul {
					width: 100%;
					li {
						width: 100%;
						border-top: 2px solid #f2f2f2;
						display: flex;
						justify-content: space-around;
						.tabBar-conent-img {
							width: 2.13rem;
							height: 2.13rem;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.tabBar-conent-R {
							padding: 0 .2rem;
							width: 4.6rem;
							h4 {
								font-size: .28rem;
								color: #333;
								font-weight: 400;
								max-height: 1.12rem;
								overflow: hidden;
								word-break: break-all;
								line-height: .5rem;
							}
							.tabBar-conent-price,
							.tabBar-conent-R-p {
								color: #dd1712;
							}
						}
					}
				}
			}
		}
	}
</style>