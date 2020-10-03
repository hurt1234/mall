<template>
  <div id="home-recommed">
    <a :href="item.link" v-for="item in  recommends" >
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>

  </div>
</template>

<script>
  export default {
    name: "HomeRecommed",
    props:{
      recommends:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style lang="css" scoped>
  #home-recommed {
    display: flex;
    padding: 10px 0px 20px;
    border-bottom: 6px solid #eee;
    box-sizing: border-box;

  }
  #home-recommed  a {
    flex: 1;
    font-size: 12px;

  }
 #home-recommed img {
   width: 60px;
   margin-bottom: 5px;

 }


</style>
