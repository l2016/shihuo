<template>
    <div>
     <Header/>
     <Topbar/>
     <Banner/>
    </div>
</template>

<script>
import Header from '../common/header'
import Topbar from './components/topbar'
import Banner from './components/banner'

export default {
    components:{
      "Header":Header,
      "Topbar":Topbar,
      "Banner":Banner
    }
}
</script>

<style lang="">
    
</style>