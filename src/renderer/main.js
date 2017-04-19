import Vue from 'vue'
// import App from './App'
import MaterialLayout from '@/components/MaterialLayout'
import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import '@/assets/material-design-lite.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<material-layout/>',
  components: { MaterialLayout }
})
