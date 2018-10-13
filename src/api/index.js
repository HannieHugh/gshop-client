/*包含n个接口请求函数的模块*/

import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax('/api/position/'+geohash);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax('/api/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>

export const reqShops = (latitude,longitude)=>ajax('/api/shops',{latitude,longitude});

//4.发送短信验证码
 export const reqCode = (phone)=> ajax('/api/sendcode',{phone});

//5.短信登录
export const reqMsgLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST');
//6.密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax('api/login_pwd',{name,pwd,captcha},'POST');
// 7.根据会话获取用户信息
export const reqUserInfo = () => ajax('/api/userinfo');
//退出登录
export const reqLogout = () => ajax('/api/logout');

export const reqGoods = () => ajax('/goods');
export const reqRatings = () => ajax('/ratings');
export const reqInfo = () => ajax('/info');
