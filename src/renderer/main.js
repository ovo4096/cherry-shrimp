import Vue from 'vue'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import App from './App'
// import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import '@/assets/material-design-lite.scss'
import 'material-design-lite/material'

Vue.use(IScrollView, IScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
