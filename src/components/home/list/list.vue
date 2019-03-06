<template>
	<div class="list">
		<span @click="handleClick"><</span>
		<h2>list</h2>
	</div>
</template>

<script>
	export default{
		methods:{
			handleClick(){
				this.$router.back()
			}
		}
	}
</script>

<style>
</style>