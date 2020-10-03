<template>
  <div>
    <ic-slider :autoplay="2000">
      <ic-slider-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
    components:{
      IcSlider,
      IcSliderItem
    }
  }
</script>

<style scoped>

</style>
