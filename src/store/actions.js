/*包含 n个用于间接更新状态数据方法的对象
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from  './mutation-types'
import ajax from "../api/ajax";

export default {
  //异步获取address
  async getAddress({commit,state}){
    const {latitude, longitude} = state;
    const result = await reqAddress(latitude + ',' + longitude)  //{code: 0, data: address}
    if(result.code===0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },

  async getCategorys({commit}){
    const result = await reqFoodCategorys()
    if(result.code===0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  async getShops({commit,state}){
    const {latitude, longitude} = state;
    const result = await reqShops(latitude, longitude);
    if(result.code===0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
