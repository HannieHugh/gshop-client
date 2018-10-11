/*包含n个接口请求函数的模块*/

import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax('/api/position/'+geohash);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax('/api/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>

export const reqShops = (latitude,longitude)=>ajax('/api/shops',{latitude,longitude})
