<template>
  <div>
    <ic-slider :autoplay="2000">
      <ic-slider-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad" alt="">
        </a>

      </ic-slider-item>
    </ic-slider>

  </div>
</template>

<script>
  import {IcSlider, IcSliderItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        required:true
      }

    },
    data() {
      return {
        isLoad:true

      }

    },
    
    components:{
      IcSlider,
      IcSliderItem
    },
    methods:{
      imageLoad() {
        if(this.isLoad) {
          this.$emit('swiperImageLoad');
          this.isLoad=false;
        }
      }
    }
  }
</script>

<style scoped>

</style>
