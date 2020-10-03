<template>
   <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
     <home-swiper :banners="banners"/>
     <home-recommed :recommends="recommends"/>
   </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomponents/HomeSwiper";
import HomeRecommed from "./childcomponents/HomeRecommed";



import { getHomeMultidata} from 'network/home'

export default {

   data () {
      return {
        banners:[],
        recommends:[]

      };
   },
  created() {
    getHomeMultidata().then(res=>{
      //console.log(res)
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
    })

  },

  components: {
     NavBar,
    HomeSwiper,
    HomeRecommed

   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
  #home {
    height: 100%;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

  }


</style>
