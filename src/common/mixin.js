import backTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
  data() {
    return {
      isShowBackTop:false
    }
  },
  components:{
    backTop
  },
  methods:{
    backTop() {
      this.refs.scroll.backTo(0,0,0);
    }
  }

}