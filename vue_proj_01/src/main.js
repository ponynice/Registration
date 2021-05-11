import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/global.css'
import './assets/fontclass/iconfont.css'
import qs from 'qs'
import instance_ from './api/index'
axios.defaults.baseURL = 'http://39.104.71.38:8000'
axios.interceptors.request.use(config => {
  console.log(config)
  return config
})
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.instance = instance_
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
