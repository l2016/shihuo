<template>
	<div class="login">
		<h2><span @click="handleClick"><</span>
			HUPU
		</h2>
		<div class="login-input">
			<form>
				<div class="login-div">
					用户名：
					<input type="text" placeholder="请输入用户名" v-model="username">
				</div>
				<div class="login-div">
					密码：
					<input type="password"  placeholder="请输入密码" v-model="password">
				</div>
			</form>
			<button @click="handleClickRegister">注册</button>
			<p>已有账号？去     <span @click="handleGoLogin">登陆</span></p>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		computed:{
			...Vuex.mapState({
				register:state=>state.home.register
			})
		},
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods: {
			handleClick() {
				this.$router.back()
			},
			handleGoLogin(){
				this.$router.push({name:'login'})
			},
			handleClickRegister(){
				let username = this.username;
				let password = this.password;
				this.handleRegister({username,password})
			},
			...Vuex.mapActions({
				handleRegister:"home/handleRegister"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 100%;
		h2 {
			width: 100%;
			height: .8rem;
			color: #dd1712;
			font-size: .4rem;
			background: #f4f4f4;
			display: flex;
			justify-content: center;
			align-items: center;
			span {
				display: inline-block;
				width: 1rem;
				height: .8rem;
				line-height: .8rem;
				position: absolute;
				top: 0;
				left: .2rem;
			}
		}
		.login-input {
			margin-top: .3rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.login-div{
				margin: .4rem;
			}
		}
	}
</style>