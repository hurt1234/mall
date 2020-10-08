<template>
   <div id="detail">
      <detail-nav-bar class="detail-nav"/>
      <scroll class="content" ref="scroll">
         <detail-swiper :topImages="topImages"/>
         <detail-goods :goods="goods"/>
         <detail-shop :shop="shop"/>
         <detail-param :paramInfo="paramInfo"/>
         <detail-comment :commentInfo="commentInfo" />
         <!-- 推荐信息 -->
         <goods-list :goods="recommendInfo">

         </goods-list>
         

         

        

      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop" />
      
   
   </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar';
import DetailSwiper from './childComponents/DetailSwiper';
import DetailGoods from './childComponents/DetailGoods';
import DetailShop from './childComponents/DetailShop';
import DetailParam from './childComponents/DetailParam'; 
import DetailComment from './childComponents/DetailComment'; 

import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goodsShow/GoodsList'

import { getDetailData ,Goods, GoodsParam ,getRecommend  } from 'network/detail'

import { backTopMixin }  from 'common/mixin'
export default {
   name:"Detail",
   data () {
      return {
         iid:null,
         topImages:[],
         goods:{},
         shop:{},
         paramInfo:{},
         commentInfo:{},
         recommendInfo:[],

      };
   },
   created() {
      //得到详情页所需的iid
      this.iid=this.$route.query.iid;
      //请求详情页的轮播图数据
      getDetailData(this.iid).then(res=>{
        // console.log(res);
       const data = res.data.result;
       //console.log(data);
       
        this.topImages = data.itemInfo.topImages;
        //请求Goods的详细信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //请求店铺的详细信息
      this.shop = data.shopInfo; 
      // 请求商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      //请求评论信息
       if (data.rate.cRate) {
            this.commentInfo = data.rate.list[0];
          };
          //获取推荐信息
      getRecommend().then(res=>{
         this.recommendInfo=res.data.data.list
      })
      
      })
      
      
      


   },
   components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      Scroll,
      DetailShop,
      DetailParam,
      DetailComment,
      GoodsList

   },

   methods: {}
}
</script>
<style lang='css' scoped>
 #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }

</style>