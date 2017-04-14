import Vue from 'vue'
import App from './App'
import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import '@/assets/material-design-lite.scss'
import 'material-design-lite/material'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
