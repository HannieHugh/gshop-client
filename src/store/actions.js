/*包含 n个用于间接更新状态数据方法的对象
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RESET_GOODS,
  RESET_RATINGS,
  RESET_INFO
} from  './mutation-types'

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
  },

  saveUser({commit},{user}){
    commit(RECEIVE_USER,{user})
  },

  async getUserInfo({commit}){
    const result = await reqUserInfo();
    if(result.code===0){
      const user = result.data;
      commit(RECEIVE_USER,{user})
    }
  },

  async logout({commit}){
    const result = await reqLogout();
    if(result.code===0){
      const user = {};
      commit(RESET_USER,{user})
    }
  },
  async getGoods({commit}){
    const result = await reqGoods();
    if(result.code===0){
      const goods = result.data;
      commit(RESET_GOODS,{goods})
    }
  },
  async getRatings({commit}){
    const result = await reqRatings();
    if(result.code===0){
      const ratings = result.data;
      commit(RESET_RATINGS,{ratings})
    }
  },

  async getInfo({commit}){
    const result = await reqInfo()
    if(result.code===0){
      const info = result.data;
      commit(RESET_INFO,{info})
    }
  }
}

