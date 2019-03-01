<template>
  <div id="app">
    <router-view/>
    <Footer-com/>
    <GetTop-com/>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
import GetTop from "./components/common/getTop";
export default {
  name: 'App',
  components:{
    "Footer-com":Footer,
    "GetTop-com":GetTop
  }
}
</script>

<style>
#app{
	height: 100%;
}
</style>
