<template>
   <div>
     <ic-slider :autoplay="2000" class="detail-swiper">
      <ic-slider-item v-for="item in topImages" :key="item">
       
          <img :src="item" alt="">
       

      </ic-slider-item>
    </ic-slider>


   </div>
</template>

<script>
 import {IcSlider, IcSliderItem} from 'components/common/swiper'
export default {
   data () {
      return {

      };
   },
   props:{
      topImages:{
         type:Array,
         default() {
            return []
         }
      }
   },
   components:{
      IcSlider,
      IcSliderItem
    },

   methods: {}
}
</script>
<style lang='css' scoped>
.detail-swiper {
   height: 300px;
  overflow: hidden;
  box-sizing:content-box;
}


</style>