<template>
   <div ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import Scroll from 'better-scroll';
export default {
   data () {
      return {
        scroll:null

      };
   },
   props:{
     probeType:{
       type:Number,
       default:1
     }
   


   },
   mounted() {
     this.scroll = new Scroll(this.$refs.wrapper,{
       probeType:this.probeType,
       click:true,
       pullUpLoad:true

     })
     this.scroll.on('scroll',(position)=>{
       this.$emit('monitorScroll',position)
       

     })
     this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp');
     })


   },
   

   methods: {
      backTo (x,y,time=500) {
      this.scroll && this.scroll.scrollTo(x,y,time)
     },
     refresh() {
       this.scroll && this.scroll.refresh();
     },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
        console.log( this.scroll.y );
        
      }
   }
}
</script>
<style lang='css' scoped>

</style>