<template>
  <div id="app">
    <router-view/>
    <Footer-com v-if="flag" v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
export default {
  name: 'App',
  components:{
    "Footer-com":Footer,
  },
  data(){
  	return{
  		flag:true
  	}
  }
}
</script>

<style>
#app{
	height: 100%;
}
</style>
