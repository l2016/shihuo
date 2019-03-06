<template>
	<div class="tab">
		<div id="tab">
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
									<router-link :to="{name:'list'}">
										<div class="tabBar-conent-img">
											<img :src="item.data.img" />
										</div>
										<div class="tabBar-conent-R">
											<h4>{{item.data.title}}</h4>
											<p>{{item.data.intro}}</p>
											<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
											<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
										</div>
									</router-link>
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
									<router-link :to="{name:'list'}">
										<div class="tabBar-conent-img">
											<img :src="item.data.img" />
										</div>
										<div class="tabBar-conent-R">
											<h4>{{item.data.title}}</h4>
											<p>{{item.data.intro}}</p>
											<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
											<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
										</div>
									</router-link>
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
									<router-link :to="{name:'list'}">
										<div class="tabBar-conent-img">
											<img :src="item.data.img" />
										</div>
										<div class="tabBar-conent-R">
											<h4>{{item.data.title}}</h4>
											<p>{{item.data.intro}}</p>
											<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
											<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
										</div>
									</router-link>
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
									<router-link :to="{name:'list'}">
										<div class="tabBar-conent-img">
											<img :src="item.data.img" />
										</div>
										<div class="tabBar-conent-R">
											<h4>{{item.data.title}}</h4>
											<p>{{item.data.intro}}</p>
											<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
											<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
										</div>
									</router-link>
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
									<router-link :to="{name:'list'}">
										<div class="tabBar-conent-img">
											<img :src="item.data.img" />
										</div>
										<div class="tabBar-conent-R">
											<h4>{{item.data.title}}</h4>
											<p>{{item.data.intro}}</p>
											<p class="tabBar-conent-R-p">{{item.data.subtitle}}</p>
											<p>{{item.data.merchant}}<span class="tabBar-conent-price">￥{{item.data.price}}</span></p>
										</div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		data() {
			return {
				tabNavIndex: 0,
				tabListIndex: 0,
				selected: "1"
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
	.tab {
		margin-top: .1rem;
		width: 100%;
		background: #fff;
		#tab {
			.nav-nav {
				.tab-nav {
					font-size: .5rem;
					font-weight: 700;
				}
				.is-selected {
					color: #dd1712;
					border-bottom: 2px solid #dd1712;
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
							a {
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
		}
	}
</style>