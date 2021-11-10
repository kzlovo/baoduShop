//包含n个请求的模块
//函数的返回值是：promise对象
import ajax from "./ajax"

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
    // [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodType = () => ajax(`/index_category`)
    // [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList = (latitude, longitude) => ajax(`/shops`, { latitude, longitude })
    // [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearch_shops = (geohash, keyword) => ajax(`/search_shops`, { geohash, keyword })
    // [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => ajax('/captcha')
    // [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLogin_pwd = (name, pwd, capcha) => ajax(`/login_pwd`, { name, pwd, capcha }, "POST")
    // [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendcode = (phone) => ajax(`/sendcode`, { phone })
    // [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLogin_sms = (phone, code) => ajax(`/login_sms`, { phone, code }, "POST")
    // [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax('/userinfo')
    // [10、用户登出](#10用户登出)
export const reqLogout = () => ajax('/logout')