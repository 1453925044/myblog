import Vue from 'vue'
import App from './App'
import router from './router'
import { httpGet } from './http/http'
import store from './store/store'
import handleTemp from './library/factory.js'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$unit = handleTemp

// 引入全局头部组件
import headers from './components/common/head';
Vue.component('headers', headers)

// 引入富文本编辑器
import tinymce from 'tinymce/tinymce'


new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
