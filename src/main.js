// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// 导入全局样式
import './assets/css/global.css'
import axios from 'axios'
import qs from 'qs';

axios.defaults.baseURL = 'http://127.0.0.1:8082'

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
