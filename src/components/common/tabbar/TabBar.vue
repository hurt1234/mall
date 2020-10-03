<template>
   <div id='tab-bar'>
       <slot></slot>
   </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
#tab-bar {
  width: 100%;
  display: flex;
  text-align: center;
  position: fixed;
  height: 49px;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100,100,100,.2);


}

</style>