import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 登录状态管理
        hasLogin: false
    },
    mutations: {
        // 登入改变用户登录状态
        login(state, status) {
            state.hasLogin = status;
        },

    },
    getters: {
        // 获取登录状态
        hasLogin: (state, getters) => {
            return state.hasLogin;
        },
    },
})
export default store;