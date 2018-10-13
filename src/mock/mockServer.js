import Mock from 'mockjs'
import data from './data.json'

/*mock模拟goods请求数据接口*/
 Mock.mock('/goods',{code:0,data:data.goods})

/*mock模拟ratings请求数据接口*/
Mock.mock('/ratings',{code:0,data:data.ratings})

/*mock模拟info请求数据接口*/
Mock.mock('/info',{code:0,data:data.info})


// 向外暴露什么?  不需要
console.log('mockserver 运行了')
