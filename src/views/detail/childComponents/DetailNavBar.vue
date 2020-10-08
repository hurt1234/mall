<template>
   <div>
     <nav-bar>
       <div slot="left" class="detail-nav-left" @click=backClick>
        <img src="~assets/img/common/back.svg" alt="">

      </div>
     <div slot="center" class="detail-nav-center">
       <div v-for="(item,index) in titles " :key="index" @click=itemClick(index) :class="{active:currentIndex==index}">
         {{item}}
       </div>

     </div>
       
     </nav-bar>
     
   </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
   data () {
      return {
          titles: ['商品', '参数', '评论', '推荐'],
          currentIndex:0
         

      };
   },
   components:{
     NavBar

   },

   methods: {
     backClick() {
       this.$router.back();
     },
     itemClick(index) {
       this.currentIndex=index
     }
   }
}
</script>
<style lang='css' scoped>
.detail-nav-left img {
  margin-top:15px;
  width: 30%;

}
.detail-nav-center {
  display: flex;
  justify-content: space-around;
}
.active {
   color:hotpink
}

</style>