<template>
   <div id="goods-list">
     <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item">
      

     </goods-list-item>

   </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
   data () {
      return {
        

      };
   },
   props:{
     goods:Array
   },
  
   components:{
     GoodsListItem

   },

   methods: {}
}
</script>

<style lang='css' scoped>
#goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

</style>