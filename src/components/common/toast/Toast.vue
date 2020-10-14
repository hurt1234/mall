<template>
   <div class="toast" v-show="isShow">
     {{message}}
   </div>
</template>

<script>
export default {
   data () {
      return {
        message:'',
        isShow:false

      };
   },
   
   methods: {
     show(message, time=1000) {
       this.message = message;
       this.isShow = true
       setTimeout(()=>{
       
         this.isShow = false
           this.message = ''

       },time)

     }
   }
}
</script>
<style lang='css' scoped>
.toast {
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px;
  background: rgba(0,0,0,.3);
  color: #fff;
  z-index: 999;

}

</style>