<template>
   <div id="tab-bar-item" class="tab-bar-item" @click="itemClick">
     <div v-if='!isActive'> <slot name='item-icon'></slot></div>
     <div v-else ><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle">  <slot name='item-text'></slot></div>

   </div>
</template>

<script>
export default {
   data () {
      return {



      }
   },
   props:{
      path:String,
      activeColor:{
         type:String,
         default:'red'
      }
   },
   methods:{
      itemClick(){
        this.$router.push(this.path).catch(()=>{})
      }
   },

   components: {},

   computed: {
      isActive(){
         return this.$route.path.indexOf(this.path) !=-1;
      },
      activeStyle(){
         return this.isActive ?{color:this.activeColor} :{}

      }

   },

}
</script>
<style lang='css' scoped>
.tab-bar-item {
  flex: 1;

}
.tab-bar-item img {
  margin-bottom: 3px;
    margin-top: 2px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
}

</style>
