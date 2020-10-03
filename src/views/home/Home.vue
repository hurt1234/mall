<template>
   <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
    <scroll class="content">
    <home-swiper :banners="banners"/>
     <home-recommed :recommends="recommends"/>
     <home-feature/>
     <!-- tab control -->
     <tab-control class="home-tab" :titles="['流行','新款','精选']" @activeClick="activeClick" />
     <!-- 商品信息 -->
     <goods-list :goods="goods[currentType].list"/>
    </scroll>

     
     
   </div>
</template>

<script>
import HomeSwiper from "./childcomponents/HomeSwiper";
import HomeRecommed from "./childcomponents/HomeRecommed";
import HomeFeature from "./childcomponents/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goodsShow/GoodsList';
import Scroll from 'components/common/scroll/Scroll';



import { getHomeMultidata ,getHomeGoods} from 'network/home'

export default {
  
  components: {
     NavBar,
    HomeSwiper,
    HomeRecommed,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll

   },

   data () {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop'

      };
   },
  created() {
    //请求轮播图数据 
     this.getHomeMultidata();
    //请求商品的详细数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
   
  },

   methods: {
     /* 处理业务相关的方法 */
     activeClick(index) {
       switch(index) {
         case 0:
           this.currentType='pop';
           break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;

       }
       

     },


     /* 
     处理网络请求的相关方法
      */
     getHomeMultidata() {
         getHomeMultidata().then(res=>{
      //console.log(res)
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
    })
     },
     getHomeGoods(type) {
       let page = this.goods[type].page+1;
       getHomeGoods(type,page).then(res=>{
         this.goods[type].list.push(...res.data.data.list);
         this.goods[type].page+=1;
         

       },err=>{
         console.log(err);
       })

       

     }
    
   }
}
</script>
<style lang='css' scoped>
  #home {
    padding-top: 44px;
   /*  position: relative; */ 
    height: 100vh;
    
    
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;

  }
  .home-tab {
    position: sticky;
    top:44px;
  }
  .content {
   /* position: absolute;
   top:44px;
   bottom: 49px;
   left: 0;
   right: 0; */
   height: 475px;
   overflow: hidden;
   
   
   
    

  }


</style>
