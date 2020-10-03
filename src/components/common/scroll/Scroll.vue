<template>
   <div ref="wrapper">
     <div>
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
   mounted() {
     this.scroll = new Scroll(this.$refs.wrapper,{
       probeType:3,
       click:true,
       //pullUpLoad:true

     })
     this.scroll.on('scroll',(position)=>{
       //console.log(position);
       

     })


   },
   

   methods: {}
}
</script>
<style lang='css' scoped>

</style>