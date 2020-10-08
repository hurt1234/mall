import { request} from "./request";
export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })

}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice


  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] :'';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}