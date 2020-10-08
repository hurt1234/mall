<template>
   <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control v-show="!isTabControl" class="home-tab" :titles="['流行','新款','精选']" @activeClick="activeClick" ref="tabControl2" />
     
    <scroll class="wrapper"
            ref="scroll"
            @pullingUp="loadUp"
            @monitorScroll="monitorScroll"
            :probeType="3">
      
     <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
     <home-recommed :recommends="recommends"/>
     <home-feature/>
     <!-- tab control -->
     <tab-control v-show="isTabControl" class="home-tab" :titles="['流行','新款','精选']" @activeClick="activeClick" ref="tabControl1" />
    
     <!-- 商品信息 -->
     <goods-list :goods="goods[currentType].list"/>
      
   
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isShow" />

     
     
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
import BackTop from 'components/content/backTop/BackTop'

import { debounce} from 'common/utils'



import { getHomeMultidata ,getHomeGoods} from 'network/home'

export default {
  
  components: {
     NavBar,
    HomeSwiper,
    HomeRecommed,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

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
        currentType:'pop',
        //isshow显示上拉的状态
        isShow:false,
        isTabControl:true,
        tabControlOffsetTop:0,
        saveY:0

      };
   },
  created() {
    //请求轮播图数据 
     this.getHomeMultidata();
    //请求商品的详细数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    //监听图片加载，并刷新better-scroll的内容高度
   
   
  },
  activated() {
   // console.log(11);
    this.$refs.scroll.backTo(0,this.saveY,0);
    this.$refs.scroll.refresh()
    


  },
  deactivated() {
   this.saveY=this.$refs.scroll.getScrollY()
   //console.log(this.saveY);
   //console.log('00');
   

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,300)
     this.$bus.$on('itemImageLoad',()=>{
      
      refresh();
      
    })
    
   
   
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
       this.$refs.tabControl1.currentIndex=index;
       this.$refs.tabControl2.currentIndex=index;
       

     },
     backTop() {
       this.$refs.scroll.backTo(0,0,300)
     },
     //上拉加载更多方法
     loadUp() {
       this.getHomeGoods(this.currentType);

     },
     //吸顶获取tabControl1的位置
      swiperImageLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      //console.log(this.tabControlOffsetTop);
      
    },
     //监听滚动的方法
     monitorScroll(position) {
       this.isShow = -position.y>1000;
       this.isTabControl=-position.y>this.tabControlOffsetTop ? false : true ;
       
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
         //上拉加载更多
         this.$refs.scroll.scroll.finishPullUp();
         this.$refs.scroll.scroll.refresh();
         

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
    position: relative; 
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
  .wrapper {
   position: absolute;
   top:44px;
   bottom: 49px;
   left: 0;
   right: 0;
 
   overflow: hidden;
   
   
   
    

  }
 


</style>
