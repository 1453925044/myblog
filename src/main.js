import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http/http'
import store from './store/store'
import handleTemp from './library/factory.js'
// 引入element ui
import ElementUI, { Header } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$unit = handleTemp

import headers from './components/common/head';
Vue.component('headers',headers)

// 引入富文本编辑器


new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
