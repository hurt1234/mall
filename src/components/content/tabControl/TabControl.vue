<template>
   <div class="tab-control">
     <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="activeClick(index)"
     :class="{active:index===currentIndex}">
       <span>{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
        currentIndex:0

      };
   },
   props:{
     titles:{
       type:Array,
       default() {
         return []
       }
     }
   },

   methods: {
     activeClick(index) {
       this.currentIndex=index;
       this.$emit('activeClick',index);
       
       
     }
   }
}
</script>
<style lang='css' scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  z-index: 999;
  background-color: #fff;

}
.tab-control-item {
  flex: 1;
}
.active span {
  color: var(--color-tint);
  border-bottom:2px solid var(--color-tint);
  padding-bottom: 3px;

}
</style>