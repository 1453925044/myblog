import { get, post } from '@/http/http.js'

const isLogin = (info) => post('/login', info)

export {
    isLogin
}