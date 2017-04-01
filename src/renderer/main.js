import Vue from 'vue'
import App from './App'
import router from './router'
import 'materialize-css/sass/materialize.scss'
import 'jquery'
import 'materialize-css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
