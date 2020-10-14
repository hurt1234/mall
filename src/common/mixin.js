import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
  data() {
    return {
      isShowBackTop:false
    }
  },
  components:{
    BackTop
  },
  methods:{
    backTop() {
      //console.log(111);
      
      this.$refs.scroll.backTo(0,0,200);
      
    }
  }

}