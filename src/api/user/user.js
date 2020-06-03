import { httpGet, httpPost } from '@/http/http.js'

// 用户登录
const isLogin = (info) => httpPost('/login', info)

// 获取用户个人信息
const getUserInfo = (info) => httpGet('/user/baseInfo', info)

export {
    isLogin,
    getUserInfo
}