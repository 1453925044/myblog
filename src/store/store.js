import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 登录状态管理
        hasLogin: false,
        // 导航索引
        is_active: 0
    },
    mutations: {
        // 登入改变用户登录状态
        login(state, status) {
            state.hasLogin = status;
        },
        mutaIs_Active(state, info) {
            state.is_active = info;
        }
    },
    getters: {
        // 获取登录状态
        hasLogin: (state, getters) => {
            return state.hasLogin;
        },
        getterIs_Active(state, getters) {
            state.is_active = getters;
        }
    },
    plugins: [createPersistedState()]
})
export default store;