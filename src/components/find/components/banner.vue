<template>
  <div class="swiper-container banner-container" ref="bannerContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
        <a href>
          <img :src="item">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination banner-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vuex from 'vuex';
export default {
    computed: {
        ...Vuex.mapState({
            banners: state => state.find.handfind
        })
    },
    created(){
        this.findBanner()
    },
    methods: {
        ...Vuex.mapActions({
            findBanner:"find/findBanner"
        })
    },
    updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerContainer, {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.banner-pagination',
					},
				});
			}
		}

};

</script>

<style lang="scss" scoped>
.swiper-container{
    width: 100%;
    height: 2.7rem;

}


</style>