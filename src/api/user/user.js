import { httpGet, httpPost } from '@/http/http.js' 

const isLogin = (info) => httpPost('/login', info)

export {
    isLogin
}